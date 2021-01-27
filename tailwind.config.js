const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#FFF',
        purple: '#733FC8',
        'grayish-blue': '#48556A',
        'blackish-blue': '#19202D',
      },
      neutral: {
        DEFAULT: '#CFCFCF',
        blue: '#ECF2F8',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        normal: ['.8125rem', 1.38],
      },
    },
  },
}
