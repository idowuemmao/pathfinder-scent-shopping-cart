/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": 'url("/src/assets/DISPLAYPIC.jpg")',
      },
      colors: {
        primary: "#e9cc89",
      },
    },
  },
  plugins: [],
};
// bg - [url("./assets/DISPLAYPIC.jpg")];
