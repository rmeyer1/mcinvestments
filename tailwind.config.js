/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
        'custom-green': '#17BF63',
        // Add as many custom colors as you need
      },
    },
  },
  plugins: [],
}