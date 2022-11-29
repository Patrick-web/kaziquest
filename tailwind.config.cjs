/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "very-light-gray": "hsl(0, 0%, 98%)",
      "very-light-grayish-blue": "hsl(236, 33%, 92%)",
      "light-grayish-blue": "hsl(233, 11%, 84%)",
      "dark-grayish-blue": "hsl(236, 9%, 61%)",
      "very-dark-grayish-blue": "hsl(235, 19%, 35%)",

      "d-very-dark-blue": "hsl(235, 21%, 11%)",
      "d-very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
      "d-light-grayish-blue": "hsl(234, 39%, 85%)",
      "d-very-light-grayish-blue-hover": "hsl(236, 33%, 92%)",
      "d-dark-grayish-blue": "hsl(234, 11%, 52%)",
      "d-very-dark-grayish-blue-dark": "hsl(233, 14%, 35%)",
      "d-very-dark-grayish-blue-dark-hover": "hsl(237, 14%, 26%)",
      "link-active": "hsl(240, 90%, 69%)",
      transparent: "transparent",
    },
    fontSize: {
      sm: "15px",
      base: "19px",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {},
  },
  plugins: [],
};
