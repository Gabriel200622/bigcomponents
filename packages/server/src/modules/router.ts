import { responseHandler } from "../utils/response-handler";
import { Endpoint } from "./endpoint";
import { Router as ExpressRouter } from "express";
import { join } from "path";
import { readdirSync } from "fs";
import { EndpointController } from "../types";

export interface RouterArgs {
  /**
   * Endpoints
   */
  endpoints: Endpoint[];
  /**
   * Prefix for the router
   */
  prefix?: string;
}

/**
 * Router class
 * @example
 * const { router } = new Router({
 *  endpoints: [authEndpoint],
 *  prefix: `/api/${envs.API_VERSION}`,
 * });
 */
export class Router {
  /**
   * Express router
   */
  public router: ExpressRouter;
  /**
   * Endpoints
   */
  public endpoints: Endpoint[];
  /**
   * Prefix for the router
   */
  public prefix?: string;

  constructor(args: RouterArgs) {
    this.router = ExpressRouter();
    this.endpoints = args.endpoints;
    this.prefix = args.prefix;

    this.loadEndpoints();
  }

  /**
   * Load endpoints from a directory
   */
  public getEndpoints(path: string): void {
    try {
      const dir = join(process.cwd(), path);
      const files = readdirSync(dir);

      for (const file of files) {
        try {
          const endpoint = require(join(dir, file)).default;
          if (endpoint) {
            this.endpoints.push(endpoint);
          } else {
            console.warn(`No default export found in file: ${file}`);
          }
        } catch (error) {
          console.error(`Error loading file: ${file}`);
        }
      }

      this.loadEndpoints();
    } catch (error) {
      console.error(`Error reading directory: ${path}`);
    }
  }

  /**
   * Load endpoints
   */
  private loadEndpoints(): void {
    this.endpoints.forEach((endpoint) => {
      const path = this.prefix
        ? `${this.prefix}${endpoint.path}`
        : endpoint.path;

      if (endpoint.method === "use") {
        if (endpoint.router) {
          this.router.use(path, endpoint.router);
        }
      } else {
        this.router[endpoint.method](
          path,
          endpoint.validateReq(),
          endpoint.middleware ?? this.defaultMiddleware(),
          endpoint.controller ?? this.defaultEndpointController(endpoint)
        );
      }
    });
  }

  private defaultEndpointController(endpoint: Endpoint): EndpointController {
    return (_, res) => {
      responseHandler({
        res,
        msg: `Default endpoint controller for ${endpoint.name}`,
      });
    };
  }

  private defaultMiddleware(): EndpointController {
    return (_, __, next) => {
      next();
    };
  }
}
