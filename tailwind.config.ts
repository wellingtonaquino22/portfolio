import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -40px) scale(1.05)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.97)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, 35px) scale(1.08)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(25px, -25px)' },
          '75%': { transform: 'translate(-25px, 15px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float1: 'float1 9s ease-in-out infinite',
        float2: 'float2 13s ease-in-out infinite',
        float3: 'float3 11s ease-in-out infinite 2s',
        'gradient-x': 'gradient-x 5s ease infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
}

export default config
