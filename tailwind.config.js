/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'custom-image1': "url('./assets/bgimage3.jpg')"
      }
    },
  },
  plugins: [],
}
