/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-pan': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'draw-check': {
          '0%': { 'stroke-dashoffset': '28' },
          '100%': { 'stroke-dashoffset': '0' },
        },
        'blob-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(12px, -14px) scale(1.08)' },
          '66%': { transform: 'translate(-10px, 10px) scale(0.94)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        float: 'float 4s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 6s ease infinite',
        'scale-in': 'scale-in 0.4s ease-out both',
        'draw-check': 'draw-check 0.5s ease-out 0.1s both',
        'blob-drift': 'blob-drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

