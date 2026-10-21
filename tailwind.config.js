/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stonegold: "#f39c12",
        stoneamber: "#e67e22",
        stonecyan: "#00cec9"
      }
    },
  },
  plugins: [],
}
