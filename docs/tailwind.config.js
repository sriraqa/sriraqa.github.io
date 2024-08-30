/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-pattern": "url('/src/assets/primary-pattern.png')",
        "illustration-bg": "url('/src/assets/illustration-background.png')",
        "scribble": "url('/src/assets/scribble.svg')",
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

