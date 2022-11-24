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
        bege: {
          100: "#FDF6EA",
          200: "#FBEDD6",
        }
      },
    },
  },
  plugins: [
    require('tailwindcss-aria-attributes'),
  ],
}
