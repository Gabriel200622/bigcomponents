import {
  EndpointController,
  ParamsDictionary,
  Query,
} from "@bigcomponents/server";

export const checkAuth = <
  P = ParamsDictionary,
  ReqBody = any,
  ReqQuery = Query,
>(): EndpointController<P, ReqBody, ReqQuery> => {
  return (req, _, next) => {
    const {} = req.body;

    console.log("Check auth executed");

    next();
  };
};
