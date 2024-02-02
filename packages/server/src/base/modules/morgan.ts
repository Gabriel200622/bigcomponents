import morgan from "morgan";
import { BaseModule } from "../base";

export default class MorganModule extends BaseModule {
  constructor() {
    super(morgan("dev"));
  }
}
