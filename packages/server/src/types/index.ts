import type { NextFunction, Request, Response } from "express";

export interface ParamsDictionary {
  [key: string]: string;
}

interface ParsedQs {
  [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[];
}

export type Query = ParsedQs;

export type EndpointController<
  P = ParamsDictionary,
  ReqBody = any,
  ReqQuery = Query,
> = (
  req: Request<P, any, ReqBody, ReqQuery>,
  res: Response,
  next: NextFunction
) => void;

export { NextFunction, Request, Response };
