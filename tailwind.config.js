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
        indigo: colors.indigo,
        red: colors.red,
        rose: colors.rose,
        yellow: colors.amber,
        blue: colors.blue,
        green: colors.green,
        emerald: colors.emerald,
        pink: colors.pink,
        purple: colors.purple,
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
