import cors from "cors";
import { RequestHandler, Router } from "express";
import { Options } from "express-fileupload";

export type Status = 200 | 201 | 400 | 401 | 402 | 403 | 404 | 405 | 429 | 500;

export class Features {
  morgan?: unknown;
  cookieParser?: unknown;
  cors?: unknown;
  fileUpload?: unknown;
}

export type MiddlewareConfig = {
  [key in keyof Features]: RequestHandler;
};

export interface ServerOptions {
  port?: number;
  routes?: Router;
  features?: (keyof Features)[];
  configCors?: cors.CorsOptions;
  configFileUpload?: Options;
}
