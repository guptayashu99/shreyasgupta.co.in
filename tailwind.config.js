/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D9FF',
        secondary: '#64748b',
        'dark-bg': '#0a0e27',
        'dark-card': '#1a1f3a',
        'dark-border': '#2a3050',
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
