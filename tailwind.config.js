/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans TC", "PT Sans"],
    },
    extend: {
      colors: {
        primary: "#B5CC22",
      },
    },
  },

  plugins: [],
};
