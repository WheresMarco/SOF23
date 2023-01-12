/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "royal-yellow": "#ffd73a",
        "royal-red": "#c1525e",
        "royal-purple": "#815585",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["hover", "focus", "disabled"],
      opacity: ["disabled"],
      fontWeight: ["hover", "focus"],
    },
  },
};
