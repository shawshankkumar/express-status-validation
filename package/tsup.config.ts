import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  target: ["node18", "node16"],
  shims: false,
  // dts: true, 
  clean: true,
  treeshake: true,
  sourcemap: false,
  outDir: 'lib'
})