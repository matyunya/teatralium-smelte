const { addUtility } = require("smelte/src/utils/style.js");

const buildPalette = require("smelte/src/utils/color.js");

const colors = {
  primary: "#D473D4",
  secondary: "#333399",
  alert: "#ffeb3b",
  blue: "#2196f3"
};

module.exports = {
  variants: {
    backgroundColor: ["hover"]
  },
  theme: {
    fontSize: {
      "5xl": "6rem",
      "4xl": "3.75rem",
      "3xl": "3rem",
      "2xl": "2.125rem",
      xl: "1.5rem",
      lg: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
      xs: "0.75rem"
    },
    breakpoints: {
      sm: { max: "639px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279px" }
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.45,
      relaxed: 1.75,
      loose: 2
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      "white-trans": "rgba(255,255,255,0.5)",
      "white-transLight": "rgba(255,255,255,0.6)",
      "white-transDark": "rgba(255,255,255,0.2)",
      "black-trans": "rgba(0,0,0,0.5)",
      "black-transLight": "rgba(0,0,0,0.7)",
      "black-transDark": "rgba(0,0,0,0.35)",
      "white-500": "#fff",
      black: "#000",

      ...buildPalette(colors),

      gray: {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
        trans: "rgba(250, 250, 250, 0.5)",
        transLight: "rgba(250, 250, 250, 0.6)",
        transDark: "rgba(100, 100, 100, 0.2)"
      }
    }
  },
  extend: {
    fontFamily: {
      sans: "Helvetica"
    }
  },
  plugins: [
    require("tailwindcss-elevation")(["hover"]),
    require("tailwindcss-typography")({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      textUnset: true, // whether to generate utilities to unset text properties
      caps: true, // whether to generate utilities to use alternate glyphs for capital letters
      nums: true, // whether to generate utilities to use alternate glyphs for numbers, fractions, and ordinal markers
      ligatures: true, // whether to generate ligature utilities
      componentPrefix: "c-" // the prefix to use for text style classes
    }),
    function ({ addUtilities }) {
      return addUtilities({
        [".border-box"]: {
          boxSizing: "border-box"
        },
        [".content-box"]: {
          boxSizing: "content-box"
        },
        [".transition"]: {
          transition: ".2s ease-in"
        },
        [".transition-fast"]: {
          transition: ".1s"
        }
      });
    },
    addUtility({
      prop: "caret-color",
      className: ".caret"
    }),
    addUtility({
      prop: "stroke",
      className: ".stroke"
    })
  ]
};
