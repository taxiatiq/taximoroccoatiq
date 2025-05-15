/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFEB99',
          300: '#FFE266',
          400: '#FFD833',
          500: '#F8C51B', // Main brand color
          600: '#E6B000',
          700: '#CC9C00',
          800: '#B38800',
          900: '#996600',
        },
        secondary: {
          50: '#E5E9F0',
          100: '#C5D0E6',
          200: '#9BAED3',
          300: '#738CC0',
          400: '#4D6BAD',
          500: '#0A2342', // Secondary brand color
          600: '#091D36',
          700: '#07172A',
          800: '#05111F',
          900: '#030A13',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#FBBF24',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};