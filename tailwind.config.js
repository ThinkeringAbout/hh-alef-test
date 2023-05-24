/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    screens: {
      'mobile': '500px',
      'md': '786px',
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'input-shadow': '0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 56px rgba(51, 51, 51, 0.16)'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

