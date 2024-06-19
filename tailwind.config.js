/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'customGreen': '#1DB954',
        'customBlack': '#121212',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'color-change-2x': {
          '0%': { background: '#1DB954' },
          '100%': { background: '#121212' },
        },
      },
      animation: {
        'color-change-2x': 'color-change-2x 5s linear infinite alternate both',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

