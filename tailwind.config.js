const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      coolGray: colors.coolGray,
      red: colors.red,
      green: colors.green,

      "conf": {
        DEFAULT: "#131c21",
        "dark": "#131c21",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
