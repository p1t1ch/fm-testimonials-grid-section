const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#FFF',
        purple: '#733FC8',
        'purple-light': '#A775F1',
        'grayish-blue': '#48556A',
        'blackish-blue': '#19202D',
      },
      neutral: {
        DEFAULT: '#CFCFCF',
        blue: '#ECF2F8',
      },
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        normal: ['.8125rem', 1.38],
        extrasmall: ['.6875rem', 1],
      },
      gridTemplateColumns: {
        card: '1.875rem 1fr',
      },
      gap: {
        x: '1.875rem',
      },
      boxShadow: {
        DEFAULT: '40px 60px 50px -47px rgba(72, 85, 106, 0.247378)',
      },
      maxWidth: {
        container: '69.375rem',
      },
      padding: {
        18: '4.5rem',
      },
      backgroundImage: {
        quotation: 'url(../icons/bg-pattern-quotation.svg)',
      },
      backgroundPosition: {
        'quotation-desktop': 'right 5rem top',
        'quotation-mobile': 'right 1.5rem top',
      },
    },
  },
}
