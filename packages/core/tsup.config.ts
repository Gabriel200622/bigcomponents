import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  clean: true,
  dts: true,
  target: "es2019",
  entry: ["src/**/*.tsx"],
  format: ["cjs", "esm"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  ...options,
}));
