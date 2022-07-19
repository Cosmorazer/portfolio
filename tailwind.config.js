/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'blacklite': '#17171F',
      },
      fontFamily: {
        'poppins':"Poppins",
        'poppinssb':"Poppins SemiBold",
        'fira':"Fira Code Light"
      }
    },
  },
  plugins: [],
}
