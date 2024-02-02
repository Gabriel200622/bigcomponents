import cors from "cors";
import expressFileupload from "express-fileupload";
import { RequestHandler } from "express";

export abstract class BaseModule {
  public middleware: RequestHandler;
  public config?: ModuleConfigs;

  constructor(middleware: RequestHandler, config?: ModuleConfigs) {
    this.middleware = middleware;
    this.config = config;
  }

  public handleError(errorMsg: string) {
    if (!this.config) {
      throw new Error(errorMsg);
    }
  }
}

export type ModuleConfigs = cors.CorsOptions | expressFileupload.Options;
