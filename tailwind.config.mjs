/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        accent: {
          DEFAULT: '#22c55e',
          soft: '#15803d',
        },
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.08)',
      },
    },
  },
  plugins: [],
}
