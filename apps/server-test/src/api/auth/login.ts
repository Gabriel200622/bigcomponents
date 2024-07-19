import { Endpoint, responseHandler } from "@bigcomponents/server";

export default new Endpoint({
  name: "Login",
  method: "get",
  path: "/login",
  controller: (_, res) => {
    return responseHandler({
      res,
      msg: "Login",
    });
  },
});
