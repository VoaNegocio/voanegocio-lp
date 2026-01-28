/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'voa-navy': '#003051', // Main Background
        'voa-blue': '#3b00f2', // Primary
        'voa-cyan': '#00cfff', // Accent / Highlight
        'voa-grey': '#37373d', // Surface / Cards
        'voa-light': '#adbdc9', // Text / Border
        'brand-green': '#25D366', // WhatsApp Green (Standard)
        'voa-purple': 'rgb(60,38,242)', // Premium Purple
      },
      fontFamily: {
        sans: ['Figtree', 'Inter', 'sans-serif'],
        display: ['"Wix Madefor Display"', 'Sora', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #37373d 1px, transparent 1px), linear-gradient(to bottom, #37373d 1px, transparent 1px)",
      },
      keyframes: {
        electricity: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(200%)' },
        }
      },
      animation: {
        'electricity': 'electricity 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
