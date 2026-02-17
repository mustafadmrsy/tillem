import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#234A41",
          deep: "#1b352f",
          mid: "#3a6b5e",
          pale: "#5F7D6E",
          mist: "#e8eeeb",
        },
        cream: { DEFAULT: "#D8CFC4", light: "#ede8e1" },
        gold: { DEFAULT: "#c9a84c", light: "#e8d5a3" },
        bg: { DEFAULT: "#F6F8F4" },
        text: { DEFAULT: "#2F2F2F", mid: "#5a5a52", muted: "#8a8a80" },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Outfit", "sans-serif"],
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
