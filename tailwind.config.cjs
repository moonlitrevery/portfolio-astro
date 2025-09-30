/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#7c3aed', // purple-600
          light: '#8b5cf6',   // purple-500
          dark: '#6d28d9'     // purple-700
        }
      }
    }
  },
  plugins: []
};
