/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        petrichor: {
          navy: '#00558C',
          sky: '#3DA9E1',
          light: '#F4F9FC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        outfit: ['Outfit', 'sans-serif'], // Added to support your font-outfit class
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeZoom: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        fadeZoom: 'fadeZoom 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}