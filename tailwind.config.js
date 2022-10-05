/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  './src/**/*.html',
  './src/**/*.vue',
  './src/**/*.jsx',],
  theme: {
    extend: {},
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
      
    },
  },
  plugins: [],
}
