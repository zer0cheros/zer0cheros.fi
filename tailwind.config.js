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
            left: '0%'
            
        },
        '100%' : {
            left: '100%',
            transform: 'translateX(-100%)'
        }
        },
        animation: {
          cloud: 'cloud 60s linear infinite'
        }
      }
    },
  },
  plugins: [],
}
