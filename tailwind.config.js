/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', ...defaultTheme.fontFamily.sans],
        'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        tan: {
          100: '#F3EFE5'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ['_site/**/*.html'],
}
