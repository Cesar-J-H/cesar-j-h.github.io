/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FFBAA3',
        sand: '#F6F1EB',
        teal: '#2FA4A9',
        navy: '#0F172A',
        lightBlue: '#2555cfff',
        lighterBlue: '#536cacff'
      },
    },
  },
  plugins: [],
}