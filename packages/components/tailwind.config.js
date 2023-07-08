/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
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
      concrete50: '#4a4a4a',
      concrete70: '#626262',
      concrete100: '#858585',
      concrete115: '#979797',
      'wet-concrete115': '#4d4d4d',
      'wet-concrete100': '#2e2e2e',
      'marble-white100': '#ffffff',
      blue100: '#5f6fff',
      green20: 'rgba(99, 235, 175, 0.20))',
      green100: '#63ebaf',
      orange20: 'rgba(255, 153, 86, 0.2)',
      orange80: 'rgba(255, 153, 86, 0.8)',
      orange100: '#FF9956',
      red20: 'rgba(255, 86, 80, 0.2)',
      red100: '#FF5650',
      violet20: '#684499',
      violet80: '#462F64',
      violet100: '#AD72FF',
      'frequency-yellow100': '#CEDC4B',
      magenta100: '#F866A3',
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
