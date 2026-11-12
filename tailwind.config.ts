import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zuvan: {
          gold: {
            pale: "#FEF3C7",
            light: "#D4AF37",
            DEFAULT: "#B8860B",
            dark: "#7A5C00",
          },
          blue: {
            pale: "#EFF6FF",
            light: "#3B82F6",
            DEFAULT: "#1D4ED8",
            dark: "#1E3A8A",
            navy: "#0F2464",
          },
          dark: "#0F172A",
          muted: "#64748B",
          slate: "#334155",
          bg: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 24px rgba(180, 130, 0, 0.2)",
        blue: "0 4px 24px rgba(29, 78, 216, 0.2)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        card: "0 2px 12px rgba(0, 0, 0, 0.04)",
        hover: "0 12px 40px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(160deg, #0F2464 0%, #1D4ED8 50%, #1E3A8A 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
        "blue-gradient": "linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)",
      },
      animation: {
        pulseDot: "pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

