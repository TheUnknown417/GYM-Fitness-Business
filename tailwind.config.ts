import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#000000",
          white: "#FFFFFF",
        },
        cream: "#F5F1ED",
        charcoal: "#2D2D2D",
        accent: "#FF6B35",
        "accent-alt": "#4A90E2",
        gray: {
          light: "#E5E5E5",
          medium: "#6B6B6B",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
        wide: "0.1em",
      },
    },
  },
  plugins: [],
};
export default config;

