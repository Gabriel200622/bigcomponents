import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload, { Options } from "express-fileupload";
import morgan from "morgan";
import express, { Express, RequestHandler } from "express";
import { Features, MiddlewareConfig, ServerOptions } from "../interfaces";

export class Server {
  public app: Express = express();
  public server: http.Server;

  constructor({
    port = 4000,
    routes,
    features,
    configCors,
    configFileUpload,
  }: ServerOptions) {
    this.setupMiddlewares({
      features,
      configCors,
      configFileUpload,
    });

    if (routes) {
      this.app.use(routes);
    }

    this.server = this.app.listen(port, () => {
      console.log(`🚀 Server on port ${port}`);
    });
  }

  private setupMiddlewares({
    features,
    configCors,
    configFileUpload,
  }: {
    features?: (keyof Features)[];
    configCors?: cors.CorsOptions;
    configFileUpload?: Options;
  }) {
    this.app.use(express.json());

    if (features) {
      const middlewareConfig: MiddlewareConfig = {
        cors: this.setupConfigCors(configCors),
        morgan: morgan("dev"),
        cookieParser: cookieParser(),
        fileUpload: this.setupConfigFileUpload(configFileUpload),
      };

      features.forEach((key) => {
        const middleware = middlewareConfig[key];

        console.log(
          `🚀 ${key.charAt(0).toUpperCase() + key.slice(1)} ready to go!`
        );

        if (middleware) {
          this.setupMiddleware(middleware, key, configCors, configFileUpload);
        }
      });
    }
  }

  private setupMiddleware(
    middleware: RequestHandler,
    key: keyof Features,
    configCors?: cors.CorsOptions,
    configFileUpload?: Options
  ) {
    if (key === "cors" && !configCors) {
      this.handleCorsConfigError();
    }
    if (key === "fileUpload" && !configFileUpload) {
      this.handleFileUploadConfigError();
    }

    this.app.use(middleware);
  }

  private setupConfigFileUpload(configFileUpload?: Options): RequestHandler {
    return fileUpload(configFileUpload);
  }

  private setupConfigCors(configCors?: cors.CorsOptions): RequestHandler {
    return cors(configCors);
  }

  private handleCorsConfigError(): void {
    throw new Error("Cors configuration is required for this app!");
  }

  private handleFileUploadConfigError(): void {
    throw new Error("FileUpload configuration is required for this app!");
  }
}
