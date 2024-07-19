import { z } from "zod";
import { EndpointSchema } from "../modules/endpoint";
import { EndpointController } from "../types";

interface CreateMiddlewareArgs<Schema extends EndpointSchema = any> {
  schema?: Schema;
  handler: EndpointController<
    z.infer<Schema["params"]>,
    z.infer<Schema["body"]>,
    z.infer<Schema["query"]>
  >;
}

export const createMiddleware = <Schema extends EndpointSchema = any>(
  args: CreateMiddlewareArgs<Schema>
) => {
  return args.handler;
};
