import { Endpoint, responseHandler, Schema } from "@bigcomponents/server";
import { checkAuth } from "../../middlewares/checkAuth";

export default new Endpoint({
  name: "Signup",
  method: "post",
  path: "/signup",
  schema: {
    body: Schema.object({
      name: Schema.string(),
      username: Schema.string(),
      email: Schema.string().email(),
      password: Schema.string(),
    }),
  },
  middleware: checkAuth(),
  controller: (req, res) => {
    const { name, username, email, password } = req.body;

    console.log({
      name,
      username,
      email,
      password,
    });

    return responseHandler({
      res,
      msg: "Signup",
    });
  },
});
