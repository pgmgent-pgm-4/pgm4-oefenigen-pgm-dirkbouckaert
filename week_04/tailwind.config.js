const tailwindcssForms = require('@tailwindcss/forms');
const tailwindcssTypography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: "selector", // options: 'media' or 'selector'
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {},
      colors: {},
      screens: {
        xs: '512px',
      },
    },
  },
  plugins: [tailwindcssForms, tailwindcssTypography],
};
