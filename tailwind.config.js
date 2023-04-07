/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '475px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}