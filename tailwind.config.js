/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        christmas: {
          red: '#8B1C1C',
          light: '#FDFBF7',
          pink: '#FDEAEB',
          gold: '#D4AF37'
        }
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}