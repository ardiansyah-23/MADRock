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
          lime: "#B8E10F",
          "lime-hover": "#9EC40B",
          "lime-light": "#D4F542",
          "lime-dark": "#1E2903",
          bg: "#0D0D0D",
          surface: "#171717",
          "surface-2": "#1F1F1F",
          border: "rgba(255, 255, 255, 0.08)",
          glass: "rgba(255, 255, 255, 0.04)",
          gray: "#9CA3AF",
          "gray-dark": "#4B5563",
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
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(184, 225, 15, 0.2)" },
          "50%": { boxShadow: "0 0 35px rgba(184, 225, 15, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
