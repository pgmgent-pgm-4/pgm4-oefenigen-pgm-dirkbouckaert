import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "selector", // Choose between 'media' or 'selector'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [forms, typography],
}

