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
      "--clr-neutral-50": "#fff",
      "--clr-neutral-200": "hsl(0, 0%, 97%)",
      "--clr-neutral-400": "hsl(227, 12%, 61%)",
      "--clr-neutral-300": "#d4d4d4",
      "--clr-neutral-900": "hsl(233, 12%, 13%)",
      "--clr-pink-500": "#ec4899",
      "--clr-pink-600": "#db2777",
      "--clr-gray-300": "#e4e4e7",
      "--clr-blue-200": "#3b82f6",
      "--clr-gray-200": "#e5e7eb",
      "--clr-gray-500": "#6b7280",
      "--clr-green-300": "#ecfdf5",
      "--clr-cyan-700": "#0369a1",
      "--clr-cyan-100": "#cffafe",
      "--clr-cyan-200": "#a5f3fc",
      "--clr-teal-300": "#5eead4"
    },
    extend: {
      backgroundImage: {
        "custom-image": "url('./images/blur-back-img.png')",
        "about-banner": "url('./images/about-banner.jpg')",
      },
    },
  },
  plugins: [],
};
