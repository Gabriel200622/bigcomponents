import http from "http";
import express, { Express, Router } from "express";
import { CorsOptions } from "cors";
import { Options as FileUploadOptions } from "express-fileupload";

export interface ServerConstructorArgs {
  /**
   * Port to listen on
   */
  port?: number;
  /**
   * Features to enable
   */
  features?: Feature[];
  /**
   * Initial router
   */
  router?: Router;
}

type FeatureName = "cors" | "fileUpload";

/**
 * Base feature
 */
export interface BaseFeature {
  name: FeatureName;
}

export interface CorsFeature extends BaseFeature {
  name: "cors";
  options?: CorsOptions;
}

export interface FileUploadFeature extends BaseFeature {
  name: "fileUpload";
  options?: FileUploadOptions;
}

export type Feature = CorsFeature | FileUploadFeature;

/**
 * @class
 * @classdesc Server class
 * @example
 * const server = new Server({
 *  port: 4000,
 *  features: [
 *    {
 *      name: "cors",
 *    },
 *    {
 *      name: "fileUpload",
 *    },
 *  ],
 * });
 * @param {ServerConstructorArgs} args Server constructor args
 */
export class Server {
  /**
   * Express app
   */
  public app: Express;
  /**
   * HTTP server
   */
  public server: http.Server;

  constructor(args: ServerConstructorArgs) {
    this.app = express();
    this.app.use(express.json());

    if (args.router) this.app.use(args.router);
    if (args.features) this.enableFeatures(args.features);

    this.server = this.app.listen(args.port || 4000, () => {
      console.log(`🚀 Server on port ${args.port || 4000}`);
    });
  }

  /**
   * Enable features
   * @param features Features to enable
   */
  private enableFeatures(features: Feature[]) {
    features.forEach((feature) => {
      switch (feature.name) {
        case "cors":
          this.app.use(require("cors")(feature.options));
          console.log("🚀 Cors enabled");
          break;
        case "fileUpload":
          this.app.use(require("express-fileupload")(feature.options));
          console.log("🚀 File upload enabled");
          break;
      }
    });
  }
}
