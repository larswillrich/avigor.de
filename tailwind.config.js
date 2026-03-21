/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          deep: "#1E1B4B",
        },
        lime: {
          DEFAULT: "#84CC16",
          light: "#BEF264",
          dark: "#65A30D",
        },
        slate: {
          DEFAULT: "#1E293B",
          light: "#475569",
        },
        lavender: "#EEF2FF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
