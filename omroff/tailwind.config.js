/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#0A0C10',
        surface:   '#12151C',
        surfaceHi: '#1C2030',
        border:    '#252836',
        accent:    '#F97316',
        accentDk:  '#C2560A',
        textPri:   '#F1F5F9',
        textMut:   '#64748B',
        textSub:   '#94A3B8',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'line-grow': 'lineGrow 0.8s ease forwards',
      },
      keyframes: {
        fadeUp:   { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        lineGrow: { from: { width: '0' }, to: { width: '100%' } },
      },
    },
  },
  plugins: [],
}
