/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jua': ['Jua', 'sans-serif'],  // 'Jua' es el nombre que usamos en @font-face
      },
      textStroke: {
        sm: '1px',
        DEFAULT: '2px',
        lg: '3px',
      },
      colors: {
        stroke: '#000', // Puedes definir colores para los bordes
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2px #000',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '1px #000',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '3px #000',
        },
      });
    },
  ],
}

