import { z } from "zod";
import { EndpointSchema } from "../modules/endpoint";

/**
 * Create a schema for an endpoint.
 */
export const createSchema = <
  Params = z.ZodTypeAny,
  Body = z.ZodTypeAny,
  Query = z.ZodTypeAny,
>(
  schema: EndpointSchema<Params, Body, Query>
) => {
  return schema;
};
