/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signika: ['Signika', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },
      textColor: {
        'primary': '#333333',
        'secondary': '#ffffff',
        'flp': '#83c600',
        'flp-secondary': '#fdca14',
        'flp-dark': '#577d0c'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#83c600',
        'secondary': '#fdca14',
        'dark': '#0a472e',
        'ligth': '#ffffff',
        'ultradark': '#3a3f31'
      }),
      colors: {
        'primary': '#83c600',
        'secondary': '#fdca14',
        'dark': '#577d0c',
        'ligth': '#ffffff',
        'ultradark': '#3a3f31'
      }
    },
  },
  plugins: [],
}

