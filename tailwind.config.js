/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // example to add animation
      // animation: {
      //   beat: 'heart_beat 3s infinite'
      // },
      // keyframes: {
      //   heart_beat: {
      //     '0%, 100%, 10%, 20%': { transform: 'scale(0.75)'},
      //     '5%, 15%': { transform: 'scale(1)'}
          
      //   }
      // }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'), 
  ],
  darkMode: 'class',
}

