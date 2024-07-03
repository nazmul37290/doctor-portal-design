/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main: "#020043",
      second: "#ffc637",
    },
  },
  plugins: [require("daisyui")],
};
