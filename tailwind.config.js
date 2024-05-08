/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  plugins: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '991px',
      xl: '1280px',
      '2xl': '1536px'
    }
  }
};

