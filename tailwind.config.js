/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        gray: "#E9E9E9",
        black: "#212629",
        orange: "#FE9102",
        textGray: "rgba(33, 38, 41, 0.5)",
      },
    },
  },
  plugins: [],
}
