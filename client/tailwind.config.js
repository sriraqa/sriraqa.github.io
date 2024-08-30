/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-pattern": "url('/src/assets/primary-pattern.png')",
      }
    },
    colors: {
      "background": "#FCFBF7",
      "body": "#46464A",
      "primary": "#117E6C",
    },
  },
  plugins: [],
}

