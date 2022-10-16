const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      "theme-one": "#340b4d",
      "theme-two": "#171235",
      "theme-three": "#e0c512",
      "theme-four": "#e08c0f",
    },
    extend: {},
  },
  plugins: [],
}
