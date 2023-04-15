/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        gold: "#e9c176",
        blackish: "#000000",
        whitish: "#f7e8d0",
      },

      fontFamily: {
        sans: ["Black Han Sans", "sans-serif"],
        mono: ["Poiret One", "monospace"],
        mini: ["Nunito", "monospace"],
      },
    },
  },
  plugins: [],
};
