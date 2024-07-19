import { Endpoint, Router } from "@bigcomponents/server";

const authRouter = new Router({
  endpoints: [],
  pathToEndpoints: "/src/api/auth",
});

export default new Endpoint({
  name: "Auth Router",
  method: "use",
  path: "/auth",
  router: authRouter.router,
});
