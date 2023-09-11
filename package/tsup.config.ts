import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  shims: false,
  dts: true, 
  clean: true,
  treeshake: true,
  sourcemap: false,
  outDir: 'lib'
})