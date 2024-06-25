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
        'flip-vertical-right': {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(10px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          },
        }
      },
      animation: {
        'color-change-2x': 'color-change-2x 5s linear infinite alternate both',
        'flip-vertical-right': 'flip-vertical-right 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

