/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.handlebars", "./views/layouts/main.handlebars", "./views/partials/*.handlebars", ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}
