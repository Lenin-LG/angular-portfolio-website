/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF", // Azul elegante
        dark: "#0a0a0a",
        accent: "#007bff",
      },
    },
  },
  plugins: [],
}
