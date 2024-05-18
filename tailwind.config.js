/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        techcard: "1px 1px 20px 3px rgb(0 0 0 / 0.05)",
      },
      colors: {
        primary: "#0a192f",
        mywhite: "#FCFCFA",
        mygrey: "D4D3D1", // Update this to use a color value instead of a utility class
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
