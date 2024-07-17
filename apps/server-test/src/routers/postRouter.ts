import { Endpoint, Router } from "@bigcomponents/server";

const postRouter = new Router({
  endpoints: [],
});

postRouter.getEndpoints("/src/api/post");

export default new Endpoint({
  name: "Post Router",
  method: "use",
  path: "/post",
  router: postRouter.router,
});
