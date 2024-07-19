import { createMiddleware } from "@bigcomponents/server";

export const checkAuth = createMiddleware({
  handler: (req, _, next) => {
    const {} = req.body;

    console.log("Check auth executed");

    next();
  },
});
