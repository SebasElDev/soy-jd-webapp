/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#188994',
        secondary: '#CB9825',
      },
      fontFamily: {
        lexend: ['"Lexend Deca"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 