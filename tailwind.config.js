/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        secColor: "#FF8049",
        blackColor: "#222",
        para: "#797979",
        white: "#FFF",
        primaryColor: "#1D2130",
      },
    },
  },

  plugins: [],
};
