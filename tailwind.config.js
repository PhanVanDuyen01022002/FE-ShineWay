/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CCFF',
          300: '#66B0FF',
          400: '#3399FF',
          450: '#5296E5',
          500: '#0088FF',
          600: '#0077E6',
          700: '#0066CC',
          800: '#0055B3',
          900: '#004499',
          950: '#003380',
        },
      },
    },
  },
  plugins: [],
};
