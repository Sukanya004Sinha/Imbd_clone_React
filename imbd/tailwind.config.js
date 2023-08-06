/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner": "url(./components/image.jpg)"
      }
    },
  },
  plugins: [],
}

