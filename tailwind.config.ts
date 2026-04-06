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
        bg:           '#FFFAF5',
        surface:      '#FFF6EF',
        card:         'rgba(255,255,255,0.85)',
        text:         '#2A2319',
        body:         '#332F2A',
        sub:          '#7A6E65',
        tint:         '#F7EBDD',
        accent:       '#4F6FF7',
        accentSoft:   '#DCE4FF',
        accentHover:  '#3A5CE8',
        border:       'rgba(201,173,151,0.22)',
        apricot:      '#F2A46E',
        apricotSoft:  '#FDEBD9',
        sage:         '#6B9E7C',
        sageSoft:     '#E8F3EC',
        espresso:     '#2A2319',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'warm-sm':   '0 4px 20px rgba(207,185,170,0.15)',
        'warm-md':   '0 12px 32px rgba(207,185,170,0.22)',
        'warm-lg':   '0 24px 60px rgba(207,185,170,0.28)',
        'accent-sm': '0 4px 16px rgba(79,111,247,0.22)',
        'accent-md': '0 8px 28px rgba(79,111,247,0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
