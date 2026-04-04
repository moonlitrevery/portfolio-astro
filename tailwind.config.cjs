/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#010120',
        lavender: '#bdbbff',
        // Illustration-only per DESIGN.md — use in decorative backgrounds, not UI chrome
        'brand-magenta': '#ef2cc1',
        'brand-orange': '#fc4c02',
      },
      fontFamily: {
        display: ['Syne', 'Arial', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Georgia', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        elevate: '0 4px 10px rgba(1, 1, 32, 0.1)',
      },
      borderRadius: {
        sharp: '4px',
        comfy: '8px',
      },
    }
  },
  plugins: []
};
