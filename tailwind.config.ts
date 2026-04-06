import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFAF5',
        card: 'rgba(255,255,255,0.82)',
        text: '#332F2A',
        sub: '#5F5851',
        tint: '#F7EBDD',
        accent: '#4F6FF7',
        accentSoft: '#DCE4FF',
        depthTint: '#FFF5EC',
        border: 'rgba(201,173,151,0.22)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
