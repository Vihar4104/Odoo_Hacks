/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'border-glow': 'borderGlow 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        borderGlow: {
          '0%': { borderColor: '#ffffff' },
          '50%': { borderColor: '#00BFFF' },
          '100%': { borderColor: '#ffffff' },
        },
      },
    },
  },
  plugins: [],
}
