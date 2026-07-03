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
        gold: 'var(--gold)',
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        bg3: 'var(--bg3)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--text-muted)',
        dim: 'var(--text-dim)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        ui: ['var(--font-ui)'],
        mono: ['var(--font-mono)'],
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