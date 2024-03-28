/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
      },
      boxShadow: {
        techcard: "1px 1px 20px 3px rgb(0 0 0 / 0.05)",
      },
      colors: {
        primary: "#f97316", // Update this to use a color value instead of a utility class
      },
      fontSize: {
        herosmall: [
          "3rem",
          {
            lineHeight: "2.5rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
