/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Inconsolata', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    colors: {
      'primary': {
        100: '#fcd4d3',
        200: '#fc947c',
        300: '#fc2f08'
      },
      'black': '#040404',
      'white': '#f1f1f1',
      'fond': '#e5e5e5',
      'success': '#35591a',
      'alert': '#591a1a'
    },
    extend: {
      backGroundImage: {
        'main-pattern': "url('/assets/photo_entreprise.jpg')"
      }
    },
  },
  plugins: [],
}
