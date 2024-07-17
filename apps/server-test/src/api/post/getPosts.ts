import { Endpoint, responseHandler } from "@bigcomponents/server";

export default new Endpoint({
  name: "Get Posts",
  method: "get",
  path: "/all",
  controller: (_, res) => {
    return responseHandler({
      res,
      msg: "Get All Posts",
    });
  },
});
