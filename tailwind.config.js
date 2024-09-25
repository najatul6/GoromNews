/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#0292ca",
      },
      fontFamily: {
        Montserrat: '"Montserrat", sans-serif',
        Sofadi: '"Sofadi One", system-ui',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
