/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        violet: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        surface: {
          950: '#07060F',
          900: '#0C0B18',
          800: '#131224',
          700: '#1A1930',
          600: '#22213D',
          500: '#2E2C4A',
        },
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'float-2': 'float2 9s ease-in-out infinite',
        'float-3': 'float3 11s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'score-ring': 'scoreRing 1.2s cubic-bezier(0.4,0,0.2,1) forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        float2: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-2deg)' },
        },
        float3: {
          '0%,100%': { transform: 'translateY(0px)' },
          '33%': { transform: 'translateY(-10px)' },
          '66%': { transform: 'translateY(-5px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scoreRing: {
          '0%': { strokeDashoffset: '283' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        careerai: {
          primary: '#7c3aed',
          secondary: '#8b5cf6',
          accent: '#f59e0b',
          neutral: '#E2E8F0',
          'base-100': '#07060F',
          'base-200': '#0C0B18',
          'base-300': '#131224',
          info: '#818cf8',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
    ],
  },
}
