/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "warm-caramel": "#C49A6C",
        "warm-caramel-hover": "#B98A5A",

        "rich-chocolate": "#5D4037",
        "rich-chocolate-hover": "#4E342E",

        "deep-espresso": "#3E2723",
        cream: "#FFF8E7",
        "soft-blush": "#F4E4D7",
        "fresh-mint": "#A8D5BA",
        "pure-white": "#FFFFFF",
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
