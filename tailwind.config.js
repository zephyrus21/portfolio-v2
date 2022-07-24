/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Montserrat', sans-serif",
        secondary: "'Comfortaa', sans-serif",
      },
      backgroundImage: {
        me_1: `url('/me_1.jpeg')`,
      },
      screens: {
        sm: "540px",
      },
    },
    plugins: [],
  },
};
