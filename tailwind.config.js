/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        instrumentsans: ['Instrument Sans', 'Helvetica', 'Arial', 'sans-serif'],
        instrumentserif: ['Instrument Serif', 'serif'],
      },
      colors: {
        'bg-primary':    'var(--color-bg-primary)',
        'bg-secondary':  'var(--color-bg-secondary)',
        'bg-tertiary':   'var(--color-bg-tertiary)',
        'bg-card':       'var(--color-bg-card)',
        'bg-elevated':   'var(--color-bg-elevated)',
        'bg-badge':      'var(--color-bg-badge)',
        'bg-nav':        'var(--color-bg-nav)',
        'text-primary':   'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted':     'var(--color-text-muted)',
        'border-primary': 'var(--color-border-primary)',
        'border-secondary':'var(--color-border-secondary)',
        'border-accent':  'var(--color-border-accent)',
        'hover-tint':     'var(--color-hover-tint)',
      },
      borderRadius: {
        'sm': '6px',
        DEFAULT: '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '14px',
        '2xl': '16px',
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'shimmer': 'shimmer 1.5s infinite linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
