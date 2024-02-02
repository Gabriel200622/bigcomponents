import cookieParser from "cookie-parser";
import { BaseModule } from "../base";

export default class CookieParserModule extends BaseModule {
  constructor() {
    super(cookieParser());
  }
}
