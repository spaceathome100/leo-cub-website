/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        leoBlue: "#0C2D48",
        leoGold: "#F4AF1B",
        leoAccent: "#145DA0",
      },
      keyframes: {
        scrollLoop: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scrollLoopFast: "scrollLoop 20s linear infinite",  // ⏩ Mobile
        scrollLoopSlow: "scrollLoop 60s linear infinite",  // 🐢 Desktop (≥ sm)
      },
    },
  },
  plugins: [],
};
