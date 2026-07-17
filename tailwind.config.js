/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          base: '#0B0B0B',
          surface: '#111111',
          card: '#181818',
          card2: '#1E1E1E',
        },
        ember: {
          DEFAULT: '#C75A12',
          50: '#FBE7DC',
          100: '#F6CDB4',
          200: '#EFA277',
          300: '#E9773B',
          400: '#D2681E',
          500: '#C75A12',
          600: '#A24A0E',
          700: '#7D390B',
          800: '#522808',
          900: '#291704',
        },
        muted: '#A0A0A0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.3em',
        wide2: '0.15em',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient-pan': 'gradientPan 18s ease infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-slower': 'floatSlow 12s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s ease-out infinite',
        'shimmer': 'shimmer 2.2s linear infinite',
      },
      keyframes: {
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
