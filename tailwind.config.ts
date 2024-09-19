import type { Config } from "tailwindcss";

const colors = require("./themes/colors.ts").default;
const { fontSize, lineHeight, fontWeight, fontFamilies } =
  require("./themes/typography.ts").default;
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },

      fontSize: {
        ...fontSize,
      },

      fontFamily: {
        ...fontFamilies,
      },

      fontWeight: {
        ...fontWeight,
      },

      lineHeight: {
        ...lineHeight,
      }

    },
  },
  plugins: [],
};
export default config;
