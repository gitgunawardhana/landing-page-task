/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#6B3CC9",
        secondary: "#F28D35",
        analogous1: "#6A44F2",
        analogous2: "#1CBDDD",
        triadic1: "#52378C",
        dark: "#44B36B",
        textColor: "#2F2F2F",
        textColorLight: "#545A75",
        textColorSubtle: "#939189",
        accent1: "#E1F1FD",
        accent2: "#FDF6DE",
        error: "#FC0334",
        success: "#5DB10B",
      },
    },
  },
  plugins: [],
};

