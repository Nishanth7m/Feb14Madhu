/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        cloud: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(14, 165, 233, 0.2)",
      },
    },
  },
  plugins: [],
};
