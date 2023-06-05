/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    colors: {
      white: "#fff",
      primary: "#F8AE05",
      "light-primary": "#FAC842",
      dark: "#1D1F22",
      gray: "#313439",
      "light-gray": "#6F7275",
      cream: "#F1EFE3",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        source: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
