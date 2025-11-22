
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-khaki': '#F4F1EA',
        'safari-olive': '#4B5320',
        'sunset-orange': '#D9702F',
        'dark-leather': '#3E3328',
      },
    },
  },
  plugins: [],
}