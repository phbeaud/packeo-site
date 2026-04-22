/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0B0D',
          900: '#0A0B0D',
          800: '#14161A',
          700: '#1E2126',
          600: '#2A2E35',
          500: '#4A4F57',
          400: '#6B7280',
          300: '#9CA3AF',
          200: '#D1D5DB',
          100: '#E5E7EB',
          50: '#F3F4F6',
        },
        bone: '#F7F7F8',
        ember: {
          DEFAULT: '#E85D1F',
          600: '#D44F14',
          500: '#E85D1F',
          400: '#F27A42',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        'ultra-tight': '-0.035em',
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.045em' }],
        'display-lg': ['clamp(2.75rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
