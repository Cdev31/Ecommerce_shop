/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          them: '#DF3E0A',
          theme: 'green'
      }
    },
  },
  plugins: [],
}

