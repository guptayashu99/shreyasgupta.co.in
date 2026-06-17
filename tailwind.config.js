/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0C10',
        'bg-band': '#0E0F13',
        'bg-footer': '#08090C',
        surface: '#121419',
        'surface-chip': '#16181E',
        border: '#23262E',
        'border-subtle': '#1E2127',
        'border-strong': '#2A2E36',
        'border-outline': '#3A3E47',
        'text-hi': '#F2F3F5',
        text: '#E8E9EC',
        'text-body': '#B8BBC2',
        'text-body-2': '#B0B4BC',
        'text-muted': '#9498A0',
        'text-soft': '#A9ADB5',
        'text-dim': '#787C85',
        'text-faint': '#6C7079',
        'text-nav': '#8A8E96',
        accent: '#E2623C',
        'accent-lt': '#F0865C',
        'accent-border': '#5A3326',
        'status-online': '#3FB950',
        'dot-inactive': '#4A4E57',
        'logo-box': '#FFFFFF',
      },
      fontFamily: {
        'display': ['Hanken Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1-hero': 'clamp(54px, 8.4vw, 108px)',
        'h2-section': 'clamp(30px, 4.4vw, 48px)',
        'h2-resume': 'clamp(36px, 5.6vw, 68px)',
        'subhead': 'clamp(18px, 2vw, 22px)',
        'body': 'clamp(17px, 1.7vw, 19px)',
        'rec-body': 'clamp(15px, 1.5vw, 17px)',
      },
      spacing: {
        'content': '1180px',
        'gutter': '32px',
      },
    },
  },
  plugins: [],
};

export default config;
