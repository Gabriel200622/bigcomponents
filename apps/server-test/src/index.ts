import { EnvSchema, Server, Router } from "@bigcomponents/server";

const main = async () => {
  const { envs } = new EnvSchema({
    PORT: {
      type: "port",
      required: true,
    },
    APP_URL: {
      type: "string",
      required: true,
    },
    CLIENT_URL: {
      type: "string",
      required: true,
    },
    API_VERSION: {
      type: "string",
      required: true,
    },
  });

  const mainRouter = new Router({
    endpoints: [],
    prefix: `/api/${envs.API_VERSION}`,
  });

  mainRouter.getEndpoints("/src/routers");

  new Server({
    port: envs.PORT,
    router: mainRouter.router,
    features: [
      {
        name: "cors",
      },
      {
        name: "fileUpload",
      },
    ],
  });
};

(() => {
  main();
})();
