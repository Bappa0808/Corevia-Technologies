/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f', // Professional Deep Blue - Trust & Stability in Real Estate
        secondary: '#c89a3f', // Warm Gold - Premium & Investment
        accent: '#2d7a4f', // Growth Green - Prosperity & Nature
        appText: {
          main: '#2c3e50', // Dark Slate - Headings/Important text
          body: '#5a6c7d', // Medium Slate - Body text
          light: '#8897a8', // Light Slate - Muted text
        },
        background: {
          default: '#ffffff', // Clean White
          alt: '#f4f7fa', // Soft Blue-Gray
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
