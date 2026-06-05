import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#334155',
        accent: '#18834f',
        orange: '#d97706',
        ink: '#0F172A',
        porcelain: '#fbf7ef',
        linen: '#f3eadc',
        mist: '#ebe5da',
        'premium-gray': '#f7efe4',
        'premium-dark': '#0F172A',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          inverse: 'var(--text-inverse)',
          'inverse-soft': 'var(--text-inverse-soft)',
          'inverse-muted': 'var(--text-inverse-muted)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'premium': '0 28px 80px -42px rgba(38, 29, 16, 0.34)',
        'premium-hover': '0 36px 110px -48px rgba(24, 131, 79, 0.28)',
        'glow': '0 0 0 1px rgba(255,255,255,0.45), 0 30px 90px -46px rgba(38,29,16,0.55)',
      }
    },
  },
  plugins: [],
}
export default config
