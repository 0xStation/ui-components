/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
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
      backgroundImage: {
        electricity: 'linear-gradient(180deg, #885EC2 6.83%, #C82BCB 100%))',
      },
    },
  },
  plugins: [],
}
