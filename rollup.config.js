const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "es",
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "index.umd.js",
    },
  ],
  plugins: [commonjs(), typescript()],
};
