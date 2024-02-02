import { Server } from "@bigcomponents/server";

const server = new Server({
  port: 4000,
  features: ["morgan", "cookieParser"],
});

server.app.get("/", (_, res) => {
  res.json({ msg: "Hello World!" });
});
