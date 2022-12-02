/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        cloud: {
        '0%' : {
            marginLeft: '0',
        },
        '50%': {
          marginLeft: '70%',
          backgroundPosition: '-30%'
        },
        '100%' :{
          marginLeft: '0'
        }
        },
        text: {
          '0%': {
            opacity: '0',
            transform: 'translate(0px, -80px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0px, 0px)'
          }
        },
      },
      animation: {
        clouds: 'cloud 60s linear infinite',
        texts: 'text 3s',
        navbar: 'text 1s',
        pulse1: 'pulse delay 1s '
      }
    },
  },
  plugins: [],
}
