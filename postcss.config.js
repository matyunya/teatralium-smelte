const extractor = require("smelte/src/utils/css-extractor.js");

module.exports = (purge = false) => {
  return [
    require("postcss-import")(),
    require("postcss-url")(),
    require("postcss-nesting")(),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")(),
    purge &&
      require("cssnano")({
        preset: "default"
      }),
    purge &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./**/*.svelte", "./**/*.svexy"],
        extractors: [
          {
            extractor,
            extensions: ["svelte", "svexy"]
          }
        ],
        whitelist: [
          "lead",
          "body",
          "bg-primary-100",
          "ripple",
          "ripple-normal",
          "bg-primary-trans"
        ],
        whitelistPatterns: [/ripple-primary/]
      })
  ].filter(Boolean);
};
