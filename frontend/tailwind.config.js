/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        app: {
          bg: '#020617',
          panel: '#0f172a',
          panel2: '#111c2d',
          panel3: '#152031',
          border: '#1e293b',
          border2: '#334155',
          text: '#e2e8f0',
          muted: '#94a3b8',
          blue: '#4ea1ff',
          blue2: '#60a5fa',
          green: '#22c55e',
          amber: '#f59e0b',
          red: '#ef4444',
          teal: '#14b8a6',
        },
      },
      boxShadow: {
        panel: '0 8px 28px rgba(0, 0, 0, 0.35)',
        insetSoft: 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      gridTemplateColumns: {
        'enterprise-shell': '280px minmax(0, 1fr) 320px',
        'driver-shell': 'minmax(0, 1fr)',
      },
    },
  },
  plugins: [],
}
