import { Endpoint, Router } from "@bigcomponents/server";

const authRouter = new Router({
  endpoints: [],
});

authRouter.getEndpoints("/src/api/auth");

export default new Endpoint({
  name: "Auth Router",
  method: "use",
  path: "/auth",
  router: authRouter.router,
});
