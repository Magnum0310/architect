/** @type {import('tailwindcss').Config} */
const defautTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "540px",
      ...defautTheme.screens,
    },
    extend: {
      colors: {
        primaryBackground: "#171C22",
        goldLines: "#DDA302",
      },
      fontFamily: {
        Coda: ["Coda", "system-ui"],
        Fahkwang: ["Fahkwang", "sans-serif"],
      },
    },
  },
  plugins: [],
};
