/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--c-primary)',
        secondary: 'var(--c-secondary)',
        background: 'var(--c-bg)',
        text: 'var(--c-text)',
        accent: 'var(--c-accent)',
        onAccent: 'var(--c-onAccent)',
        border: 'var(--c-border)',
        muted: 'var(--c-muted)',
        terminalBg: 'var(--c-terminal-bg)',
        terminalFg: 'var(--c-terminal-fg)',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}

