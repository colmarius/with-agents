/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff', // indigo-50
          100: '#e0e7ff', // indigo-100
          200: '#c7d2fe', // indigo-200
          300: '#a5b4fc', // indigo-300
          400: '#818cf8', // indigo-400
          500: '#6366f1', // indigo-500
          600: '#4f46e5', // indigo-600
          700: '#4338ca', // indigo-700
          800: '#3730a3', // indigo-800
          900: '#312e81', // indigo-900
          950: '#1e1b4b', // indigo-950
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
