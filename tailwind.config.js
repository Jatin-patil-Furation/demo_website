/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inner-top": "inset 0px 11px 8px -10px #CCC",
        "inner-bottom": "inset 0rem -5rem 2rem -1rem #0f0f0f",
      },
      colors: {
        primary: "#EF3239",
        card1: "#e42e35",
        card2: "#a0141a",
        card3: "#e95056",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
