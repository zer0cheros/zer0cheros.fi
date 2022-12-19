/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        font1:  ['Zen Dots', 'cursive'],
        font2: ['Lato', 'sans-serif']
      },
      keyframes: {
        cloud: {
        '0%' : {
            marginLeft: '-50%',
        },
        '50%': {
          marginLeft: '30%',
          backgroundPosition: '-30%'
        },
        '100%' :{
          marginLeft: '-50%'
        }
        },
        cloud2: {
        '0%' : {
            marginLeft: '-150%',
        },
        '50%': {
          marginLeft: '-50%',
          backgroundPosition: '50%'
          
        },
        '100%' :{
          marginLeft: '-150%'
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
        pulse: {
          '0%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%' : {
            opacity: '1'
          }
        },
      },
      animation: {
        clouds: 'cloud 60s linear infinite',
        cloudsmg: 'cloud2 40s linear infinite',
        texts: 'text 1s',
        navbar: 'text 0.5s',
        pulse1: 'pulse delay-1 1s infinite',
        pulse2: 'pulse delay-2 2s infinite',
        pulse3: 'pulse delay-3 3s infinite'
      }
    
  },
  plugins: [],
}}
