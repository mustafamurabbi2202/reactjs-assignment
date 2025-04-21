/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#fdfdfd", 
        primary: "#5a4cff", 
        secondary: "#2a2a6e", 
        activeLink: "#9c8aff",
      },
    },
  },
  plugins: [],
};
