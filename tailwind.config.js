/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#121212ff",
      },
      keyframes: {
        flipBottom: {

          "0% ": { transform: "rotateX(0)" },

          "100% ": { transform: "rotateX(-180deg)" },
        },
        flipTop: {
         " from" :{transform: "rotateX(180deg)"},
          "to":  {transform: "rotateX(0)"},
          },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
