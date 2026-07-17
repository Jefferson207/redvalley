import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./data/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#080706",
        basalt: "#16110d",
        ember: "#ef3b1f",
        solar: "#f7b733",
        skyglass: "#39a9db",
        moss: "#67824a",
        clay: "#9b5638"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(239, 59, 31, .26)"
      }
    }
  },
  plugins: []
};

export default config;
