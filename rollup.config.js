import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import json from "rollup-plugin-json";
import config from "sapper/config/rollup.js";
import getPreprocessor from "svelte-preprocess";
import postcss from "rollup-plugin-postcss";
import includePaths from "rollup-plugin-includepaths";
import image from "svelte-image";
import path from "path";
import XXhash from "xxhash";
import { mdsvex } from "mdsvex";
const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;
const cache = {};

function cached(name, { markup }) {
  return {
    markup: ({ content, filename }) => {
      const key = `${name}:${filename}`;

      if (
        cache[key] &&
        XXhash.hash(Buffer.from(content, "utf8"), 0xcafebabe) ===
          cache[key].hash
      ) {
        return cache[key].result;
      }

      const result = markup({ content, filename });

      cache[key] = {
        hash: XXhash.hash(Buffer.from(content, "utf8"), 0xcafebabe),
        result
      };

      return result;
    }
  };
}

const preprocess = [
  getPreprocessor({
    postcss: {
      plugins: require("./postcss.config.js")()
    }
  }),
  cached(
    "mdsvex",
    mdsvex({
      // you can add markdown-it options here, html is always true
      markdownOptions: {
        typographer: true,
        linkify: true
      },
      outputMeta: true,
      layout: "./src/layouts/article.svelte",
      parser: md => md.use(require("markdown-it-attrs"))
    })
  ),
  cached(
    "image",
    image({
      sizes: [600, 900, 1200],
      optimizeAll: false,
      trace: {
        background: "transparent",
        color: "#D473D4",
        threshold: 200,
        size: 350
      }
    })
  )
];

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      json(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: false,
        extensions: [".svelte", ".svexy", ".svx"],
        preprocess
      }),
      resolve(),
      commonjs(),
      includePaths({ paths: ["./src", "./", "./node_modules/smelte/src/"] }),

      !legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          exclude: ["node_modules/@babel/**"],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-object-rest-spread"
          ]
        }),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%"
              }
            ]
          ]
        }),

      !dev &&
        terser({
          module: true
        })
    ]
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      json(),
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        generate: "ssr",
        dev,
        extensions: [".svelte", ".svexy", ".svx"],
        preprocess
      }),
      resolve(),
      includePaths({ paths: ["./src", "./", "./node_modules/smelte/src/"] }),
      commonjs(),
      postcss({
        plugins: require("./postcss.config.js")(!dev),
        extract: path.resolve(__dirname, "./static/global.css")
      })
    ],
    external: [].concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    )
  }
};
