import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Назва шрифту з Google Fonts
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%', // Set the max-width of prose to 100%
          },
        },
      },
    },
  },
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: {
    themes: ["cyberpunk", "forest",]
  },
}

