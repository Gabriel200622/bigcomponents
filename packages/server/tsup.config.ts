import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  clean: true,
  dts: true,
  target: "es2019",
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  ...options,
}));
