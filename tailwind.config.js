module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#c6c7c4", 600: "#a46a6a", 800: "#353b3c" },
        white: { A700_7f: "#ffffff7f", A700: "#ffffff" },
        blue_gray: { 50: "#eef0f2" },
        black: { 900: "#000000" },
      },
      fontFamily: { galdeano: "Galdeano", kablammo: "Kablammo" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
