/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Manrop: ["Manrope", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"],
      DancingScript: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
};
