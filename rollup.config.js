import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "build/main.js",
    output: [
      {
        file: "plugin.js",
        format: "esm",
      },
    ],
    plugins: [nodeResolve(), terser()],
  },
];
