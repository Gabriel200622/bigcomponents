import http from "http";
import express, { Express } from "express";
import { Features, ServerOptions } from "../interfaces";
import { resolve, parse } from "path";
import { readdirSync } from "fs";

export class Server {
  public app: Express = express();
  public server: http.Server;

  constructor(args: ServerOptions) {
    this.setupMiddlewares(args);

    if (args.routes) {
      this.app.use(args.routes);
    }

    this.server = this.app.listen(args.port || 4000, () => {
      console.log(`🚀 Server on port ${args.port || 4000}`);
    });
  }

  private async setupMiddlewares(args: ServerOptions) {
    this.app.use(express.json());

    if (args.features) {
      const dir = resolve(`${__dirname}/base/modules`);
      const files = readdirSync(dir).filter((file) => file.endsWith(".js"));

      for (const file of files) {
        if (args.features.includes(parse(file).name as keyof Features)) {
          try {
            const Module = require(`${__dirname}/base/modules/${file}`).default;

            const moduleInstance = new Module();
            this.app.use(moduleInstance.middleware);
            console.log(
              `🚀 ${file.charAt(0).toUpperCase() + file.slice(1)} ready to go!`
            );
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  }
}
