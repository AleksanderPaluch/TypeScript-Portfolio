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
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
        'horizontal': 'horizontal-tb',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%', 
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
    themes: ["cmyk", "forest"]
  },
}

