/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3E8BFF',
          light: '#64A3FF',
        },
        bg: '#F5F7FB',
        muted: '#AAAAAA',
        border: '#EEEEEE',
        tile: '#f1f3f7',
        icon: '#b0b0b0',
        nav: '#818E96',
        navstroke: '#879FB1',
      },
      fontFamily: {
        sans: [
          'IRANYekanMobile',
          'Vazirmatn',
          'Tahoma',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        sheet: '0 -6px 20px rgba(0, 0, 0, 0.08)',
        nav: '0 -1px 4px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
