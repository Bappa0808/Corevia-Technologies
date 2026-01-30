/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Deep Charcoal / Navy - Stability & Trust
        secondary: '#cca43b', // Muted Gold / Bronze - Luxury & Prestige
        accent: '#f8fafc', // Soft Light Gray - Backgrounds
        appText: {
          main: '#334155', // Dark Slate - Headings/Important text
          body: '#64748b', // Slate Gray - Body text
          light: '#94a3b8', // Light Slate - Muted text
        },
        background: {
          default: '#ffffff', // Clean White
          alt: '#f1f5f9', // Very Light Gray/Blue
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
