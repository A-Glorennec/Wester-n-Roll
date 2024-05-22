/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rye: ["Rye", "cursive"],
        niconne: ["Niconne", "cursive"],
        "Neue-Kabel": ["neue-kabel", "sans-serif"],
      },
      colors: {
        "custom-purple": "#350950",
        "deep-purple": "#4A0F6F",
        "light-purple": "#854BA9",
        "off-white": "#FFFDFA",
        "gold-default": "#C39C61",
        "start-color": "#COLOR_CODE",
        "end-color": "#COLOR_CODE",
        "text-color": "#4D166D",
        cream: "#FFFDFA",
        "bg-color": "#E6D8ED",
      },
      backgroundImage: {
        "color-header":
          "linear-gradient(to bottom, #350950, #4A0F6F, #4A0F6F, #4A0F6F,#4A0F6F, #854BA9, #FFFDFA)",
        "color-footer":
          "linear-gradient(to top, #350950, #4A0F6F, #4A0F6F, #4A0F6F, #4A0F6F, #854BA9, #FFFDFA)",

        "gradient-custom":
          "linear-gradient(to right, #start-color, #end-color)",
      },
    },
  },
  plugins: [],
};
