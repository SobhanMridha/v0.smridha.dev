/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#38bdf8",
          light: "#88d7fb",
          dark: "#1c5f7c",
          50: "#9cdefc",
          100: "#88d7fb",
          200: "#74d1fa",
          300: "#60caf9",
          400: "#38bdf8",
          500: "#2d97c6",
          600: "#227195",
          700: "#1c5f7c",
          800: "#164c63",
          900: "#11394a",
        },
      },
      fontFamily: {
        sans: ["K2D", "sans-serif"],
        serif: ["K2D", "serif"],
      },
    },
  },
  plugins: [],
};
