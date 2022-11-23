/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./source/**/*.js",
    "./source/**/*.css",
    "./source/**/*.html.erb",
    "./source/**/*.erb",
    "./source/**/*.html.markdown",
    "./source/**/*.html.md"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#FF8A00",
        tertiary: "#DB00FF",
      },
    },
  },
  plugins: [],
}
