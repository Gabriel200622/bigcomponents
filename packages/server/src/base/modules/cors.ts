import cors from "cors";
import { BaseModule } from "../base";

export default class CorsModule extends BaseModule {
  constructor(corsConfig: cors.CorsOptions) {
    super(cors(), corsConfig);

    if (!corsConfig) this.handleError("Cors configuration is required!");
  }
}
