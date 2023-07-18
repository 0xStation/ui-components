/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  prefix: 'ui-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      favoritpro: ['var(--favoritpro-font)', ...fontFamily.sans],
    },
    colors: {
      white: colors.white,
      slate: colors.slate,
      black: colors.black,
      marbleWhite: '#F2EFEF',
      gray: {
        30: '#858585', // concrete 50
        40: '#979797', // concrete 115
        50: '#646464', // concrete 100
        80: '#4d4d4d', // wet-concrete 115
        90: '#2E2E2E', // wet-concrete 100
        100: '#1A1A1A', // wet-concrete 90
      },
      blue: {
        100: '#5F6FFF',
      },
      green: {
        20: 'rgba(99, 235, 175, 0.20))',
        100: '#63EBAF',
      },
      orange: {
        20: 'rgba(255, 153, 86, 0.2)',
        80: 'rgba(255, 153, 86, 0.8)',
        100: '#FF9956',
      },

      red: {
        20: 'rgba(255, 86, 80, 0.2)',
        100: '#FF5650',
      },
      violet: {
        20: '#684499',
        80: '#462F64',
        100: '#AD72FF',
      },
      yellow: {
        80: '#CEDC4B',
      },
      magenta: {
        100: '#F866A3',
      },
    },
    extend: {
      fontSize: {
        'base-xxs': ['12px', { lineHeight: '16px' }],
        'base-xs': ['14px', { lineHeight: '18px' }],
        'base-sm': ['16px', { lineHeight: '20px' }],
        'base-md': ['18px', { lineHeight: '22px' }],
        'base-lg': ['22px', { lineHeight: '26px' }],
        'heading-xxs': ['13px', { lineHeight: '17px' }],
        'heading-xs': ['14px', { lineHeight: '18px' }],
        'heading-sm': ['16px', { lineHeight: '20px' }],
        'heading-md': ['18px', { lineHeight: '22px' }],
        'heading-lg': ['22px', { lineHeight: '26px' }],
        'heading-xl': ['24px', { lineHeight: '28px' }],
        'heading-2xl': ['26px', { lineHeight: '30px' }],
      },
      backgroundImage: {
        electricity: 'linear-gradient(180deg, #885EC2 6.83%, #C82BCB 100%))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
