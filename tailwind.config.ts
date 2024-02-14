import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        beating: {
          "0%": { "backdrop-filter": "blur(0px)" },
          "50%": { "backdrop-filter": "blur(4px)" },
          "100%": { "backdrop-filter": "blur(0px)" },
        },
      },
      animation: {
        "beating-blur": "beating 4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
export default config;
