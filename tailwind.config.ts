import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mad: {
          lime: "var(--mad-lime)",
          "lime-hover": "var(--mad-lime-hover)",
          "lime-light": "var(--mad-lime-light)",
          "lime-dark": "var(--mad-lime-dark)",
          bg: "var(--mad-bg)",
          surface: "var(--mad-surface)",
          "surface-2": "var(--mad-surface-2)",
          "surface-3": "var(--mad-surface-3)",
          border: "var(--mad-border)",
          glass: "var(--mad-glass)",
          gray: "var(--mad-gray)",
          "gray-dark": "var(--mad-gray-dark)",
          text: "var(--mad-text)",
        },
      },
      fontFamily: {
        spartan: ["var(--font-spartan)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "24px",
        "2xl": "20px",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
