import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
const extensions = [".ts", ".tsx", ".js", ".jsx"];

export default [
  {
    input: "src/index.ts",
    preserveModules: true,
    output: {
      dir: "build/commonjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },

    plugins: [
      postcss({
        extract: true,
      }),
      babel({
        extensions,
      }),
      typescript({
        // Declaration requires rootDir and declarationDir options.
        // See https://github.com/rollup/plugins/issues/61.
        declaration: true,
        rootDir: "src",
        declarationDir: "build/commonjs",
      }),
    ],
  },

  {
    input: "src/index.ts",
    preserveModules: true,
    output: {
      dir: "build/es6",
      format: "es",
      exports: "named",
      sourcemap: true,
    },

    plugins: [
      postcss({
        extract: true,
      }),
      babel({
        extensions,
      }),
      typescript({
        declaration: true,
        rootDir: "src",
        declarationDir: "build/es6",
      }),
    ],
  },
];
