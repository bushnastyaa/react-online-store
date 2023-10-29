/** @type {import('tailwindcss').Config} */
// @ts-ignore
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poiret: ['Poiret One', 'sans-serif'],
      },
      colors: {
        "primary": "#686262",
        "primary-blue": "#656D7E",
        "gray": "#80838A",
        "beige": "#F5F1EE"
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
