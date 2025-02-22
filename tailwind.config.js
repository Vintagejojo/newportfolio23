/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        iconbg: '#7DBAD4',
        generalbg: '#E9F3F8',
        gold: '#FFD700',
        electricBlue: '#00FFFF',
        royalPurple: '#6A0DAD',
        crimsonRed: '#DC143C',
      },

      animation: {
        bounce:
          'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
      },

      keyframes: {
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
