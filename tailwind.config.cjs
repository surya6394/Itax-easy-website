/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "--clr-accent-100": "hsl(13, 100%, 96%)",
      "--clr-accent-150": "#39a845",
      "--clr-accent-200": "hsl(322, 100%, 50%)",
      "--clr-accent-250": "hsl(0, 100%, 50%)",
      "--clr-accent-350": "hsl(273, 100%, 44%)",
      "--clr-accent-400": "hsl(273, 100%, 36%)",
      "--clr-primary-400": "hsl(228, 39%, 23%)",
      "--clr-neutral-100": "hsl(0, 0%, 98%)",
      "--clr-neutral-200": "hsl(0, 0%, 97%)",
      "--clr-neutral-400": "hsl(227, 12%, 61%)",
      "--clr-neutral-900": "hsl(233, 12%, 13%)",
    },
    extend: {
      
    },
  },
  plugins: [],
};
