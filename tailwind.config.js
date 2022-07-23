/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Montserrat', sans-serif",
        secondary: "'Comfortaa', sans-serif",
      },
      screens: {
        sm: "540px",
      },
    },
    plugins: [],
  },
};
