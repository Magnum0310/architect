/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
