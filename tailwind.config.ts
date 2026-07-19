import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        bg: 'var(--background)',
        bg2: 'var(--surface)',
        bg3: 'var(--surface-2)',
        surface: 'var(--surface)',
        text: 'var(--text-primary)',
        muted: 'var(--text-secondary)',
        dim: 'var(--text-dim)',
        'ds-background': 'var(--background)',
        'ds-surface': 'var(--surface)',
        'ds-border': 'var(--border)',
        'ds-content': 'var(--text-primary)',
        'ds-content-subtle': 'var(--text-secondary)',
      },
      fontFamily: {
        display: ['Inter', 'var(--font-display)', 'sans-serif'],
        ui: ['Inter', 'var(--font-ui)', 'sans-serif'],
        mono: ['Inter', 'var(--font-mono)', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(201,168,76,0.18), 0 24px 80px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'gold-grid': 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;