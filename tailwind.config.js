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
    },
  },
  plugins: [],
}
