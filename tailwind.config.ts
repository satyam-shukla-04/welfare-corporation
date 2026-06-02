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
        primary: '#07111f',
        secondary: '#101827',
        accent: '#16a34a',
        orange: '#f97316',
        ink: '#030712',
        porcelain: '#f8fafc',
        'premium-gray': '#f4f7fb',
        'premium-dark': '#020617',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'premium': '0 24px 80px -32px rgba(2, 6, 23, 0.38)',
        'premium-hover': '0 34px 110px -42px rgba(22, 163, 74, 0.38)',
        'glow': '0 0 0 1px rgba(255,255,255,0.12), 0 28px 90px -36px rgba(22,163,74,0.65)',
      }
    },
  },
  plugins: [],
}
export default config
