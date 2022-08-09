/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#888888',
          600: '#999999',
          700: '#EAEAEA',
          800: '#FAFAFA',
          900: '#FFFFFF'
        },
        secondary: {
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#111111',
          900: '#000000'
        }
      }
    }
  },
  plugins: []
}
