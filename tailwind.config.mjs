/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      // hier kun je later je kleuren/fonts etc uitbreiden
    },
  },
  plugins: [],
};

export default config;
