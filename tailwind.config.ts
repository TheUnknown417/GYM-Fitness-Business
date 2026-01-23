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
        demco: {
          cream: "#FFFCF4",
          purple: "#483856",
          olive: "#ACAA85",
          gray: "#ADAEAE",
          black: "#000000",
          offwhite: "#FDFCFA",
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        testimonial: ["var(--font-testimonial)", "monospace"],
        nav: ["var(--font-nav)", "sans-serif"],
      },
      letterSpacing: {
        "demco-tight": "-0.02em",
        "demco-wide": "0.1em",
        "demco-widest": "0.2em",
      },
      borderRadius: {
        "pill": "300px",
      },
      animation: {
        'reveal-up': 'revealUp 0.8s ease-out forwards',
      },
      keyframes: {
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
