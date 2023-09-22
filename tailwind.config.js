/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        layout: "#F1F1F1",
        blue: "#164660F1",
        darkblue: "#006495",
        light: "#FAFAFA",
      },
      backgroundImage: {},
      textColor: {
        blue: "#9BBBD8",
        link: "#006495",
        lightBlack: "#00000080",
        error: "#FF3333",
      },
      borderColor: {},
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
      dropShadow: {},
      fontSize: {},
      boxShadow: {},
      borderRadius: {},
    },
  },
  plugins: [],
};
