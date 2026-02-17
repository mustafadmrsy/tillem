import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#1E3D35",
          deep: "#18352E",
          mid: "#2F4F46",
          pale: "#3A5F55",
          mist: "#EAEAEA",
        },
        cream: { DEFAULT: "#D8CFC4", light: "#F4F1EA" },
        gold: { DEFAULT: "#3A5F55", light: "#EAEAEA" },
        bg: { DEFAULT: "#F5F3EF" },
        surface: { DEFAULT: "#F4F1EA", soft: "#F0EEE9" },
        text: { DEFAULT: "#222222", mid: "#333333", muted: "#2B2B2B" },
        header: { DEFAULT: "#E9E7E3" },
        brand: { DEFAULT: "#F0EEE9" },
        fabric: { DEFAULT: "#EDEBE6" },
        process: { DEFAULT: "#5A3E2B" },
        divider: { DEFAULT: "#3A5F55" },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 55px rgba(27,53,47,0.12)",
      },
      animation: {
        "scroll-track": "scrollTrack 28s linear infinite",
        "hero-zoom": "heroZoom 12s ease-out forwards",
        "slide-down": "slideDown 0.65s cubic-bezier(0.22,1,0.36,1)",
      },
      keyframes: {
        scrollTrack: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        heroZoom: {
          to: { transform: "scale(1)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
