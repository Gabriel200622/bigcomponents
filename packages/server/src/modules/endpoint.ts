import { z } from "zod";
import { EndpointController, ParamsDictionary, Query } from "../types";
import { responseHandler } from "../utils/response-handler";
import { Router } from "./router";

export type DefaultMethods = "get" | "post" | "put" | "delete";
export type RouterMethod = "use";
export type Method = DefaultMethods | RouterMethod;

export interface EndpointSchema<
  Params = z.ZodTypeAny,
  Body = z.ZodTypeAny,
  Query = z.ZodTypeAny,
> {
  body: Body;
  params: Params;
  query: Query;
}

export type InferOrDefault<T, Default> = T extends z.ZodTypeAny
  ? z.infer<T>
  : Default;

interface EndpointConstructorArgsBase<
  P = ParamsDictionary,
  ReqBody = any,
  ReqQuery = Query,
> {
  name: string;
  path: string;
  middleware?:
    | EndpointController<P, ReqBody, ReqQuery>
    | EndpointController<P, ReqBody, ReqQuery>[];
}

interface EndpointConstructorArgsDefault<
  T extends EndpointSchema = any,
  P = ParamsDictionary,
  ReqBody = any,
  ReqQuery = Query,
> extends EndpointConstructorArgsBase<P, ReqBody, ReqQuery> {
  method: DefaultMethods;
  schema?: T;
  controller?: EndpointController<P, ReqBody, ReqQuery>;
}

interface EndpointConstructorArgsRouter<
  P = ParamsDictionary,
  ReqBody = any,
  ReqQuery = Query,
> extends EndpointConstructorArgsBase<P, ReqBody, ReqQuery> {
  method: RouterMethod;
  router?: Router;
}

type EndpointConstructorArgs<
  T extends EndpointSchema = any,
  P = ParamsDictionary,
  ReqBody = any,
  ReqQuery = Query,
> =
  | EndpointConstructorArgsDefault<T, P, ReqBody, ReqQuery>
  | EndpointConstructorArgsRouter<P, ReqBody, ReqQuery>;

export class Endpoint<Schema extends EndpointSchema = any> {
  public name: string;
  public path: string;
  public method: Method;
  public router?: Router;
  public controller?: EndpointController<
    z.infer<Schema["params"]>,
    z.infer<Schema["body"]>,
    z.infer<Schema["query"]>
  >;
  public middleware?:
    | EndpointController<
        z.infer<Schema["params"]>,
        z.infer<Schema["body"]>,
        z.infer<Schema["query"]>
      >
    | EndpointController<
        z.infer<Schema["params"]>,
        z.infer<Schema["body"]>,
        z.infer<Schema["query"]>
      >[];
  public schema?: Schema;

  constructor(
    args: EndpointConstructorArgs<
      Schema,
      z.infer<Schema["params"]>,
      z.infer<Schema["body"]>,
      z.infer<Schema["query"]>
    >
  ) {
    this.name = args.name;
    this.path = args.path;
    this.method = args.method;

    if (args.method === "use") {
      if (args.router) {
        this.router = args.router;
      }
    } else {
      this.schema = args.schema;
      this.middleware = args.middleware;
      this.controller = args.controller;
    }
  }

  public validateReq(): EndpointController {
    return (req, res, next) => {
      if (this.schema) {
        const bodyResult = this.schema.body?.safeParse(req.body);
        const paramsResult = this.schema.params?.safeParse(req.params);
        const queryResult = this.schema.query?.safeParse(req.query);

        const results = [bodyResult, paramsResult, queryResult];

        for (const result of results) {
          if (result !== undefined && !result.success) {
            return responseHandler({
              res,
              status: 400,
              data: result.error.issues,
              msg: "Invalid request",
            });
          }
        }
      }

      next();
    };
  }
}

export { z as Schema };
