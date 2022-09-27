/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,tsx}",
    "./components/**/*.{jsx,js,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          claro: "#0A1520",
          escuro: "#061E3C",
          hover: "#1057B0",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyFrames: {
        sino_kf: {
          "0%,100%": {
            transform: "rotate(-10deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
        },
      },
      animation: {
        sino: "sino_kf 0.31s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("flowbite/plugin")],
};
