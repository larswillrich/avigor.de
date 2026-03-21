/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          brand: "#C47F17",
          light: "#D4983A",
          dark: "#A36A10",
        },
        charcoal: "#1C1C1E",
        ivory: "#FAF7F2",
        copper: "#B87333",
        teal: {
          brand: "#3A8C8C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
