import fileUpload from "express-fileupload";
import { BaseModule } from "../base";

export default class FileUploadModule extends BaseModule {
  constructor(fileUploadConfig: fileUpload.Options) {
    super(fileUpload(), fileUploadConfig);

    if (!fileUploadConfig)
      this.handleError("FileUpload configuration is required");
  }
}
