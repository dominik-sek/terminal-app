/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        window: "#2e333f",
        navbar: "#39393b",
      },
      fontFamily: {
        monaco: ["monaco", "monospace"],

      }
    },
  },
  plugins: [],
}
