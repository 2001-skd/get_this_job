const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "font-primary": ["Teko", "serif"],
    },
    colors: {
      primary: "#293c84",
      secondary: "#34388f",
      third: "#3d349a",
    },
    extend: {},
  },
  plugins: [],
});
