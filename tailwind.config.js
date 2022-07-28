/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Montserrat', sans-serif",
        secondary: "'Comfortaa', sans-serif",
      },
      backgroundImage: {
        me_1: `url('/me_1a.jpeg')`,
        mac: `url('/mac.jpeg')`,
        leaf: `url('/leaf.jpeg')`,
      },
      screens: {
        sm: "540px",
      },
    },
    plugins: [],
  },
};
