/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#018089",
        secondary: "#01884D",
        hover: {
          primary: "#006c74",
          secondary: "#007341"
        }
      }
    }
  },
  plugins: []
};
