/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#96C655',
        background: '#E8E8E8',
        paper: '#0000000A'
      }
    }
  },
  plugins: []
}
