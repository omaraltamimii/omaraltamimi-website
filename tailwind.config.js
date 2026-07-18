/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        ink: {
          base: '#0A0F14',
          surface: '#111827',
          card: '#16202C',
          card2: '#1C2735',
          border: '#263445',
        },

        accent: {
          DEFAULT: '#F97316',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },

        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
        },

        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        hero: ['72px', { lineHeight: '1' }],
        title: ['48px', { lineHeight: '1.1' }],
        subtitle: ['24px', { lineHeight: '1.4' }],
      },

      letterSpacing: {
        ultra: '0.3em',
        wide2: '0.15em',
      },

      borderRadius: {
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
      },

      backdropBlur: {
        xs: '2px',
      },

      boxShadow: {
        card: '0 8px 30px rgba(0,0,0,0.18)',
        hover: '0 18px 45px rgba(0,0,0,0.28)',
        glow: '0 0 0 rgba(0,0,0,0)',
      },

      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',

        dots:
          'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',

        grid:
          'linear-gradient(to right, rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.02) 1px, transparent 1px)',
      },

      backgroundSize: {
        blueprint: '40px 40px',
        dots: '24px 24px',
        grid: '60px 60px',
      },

      animation: {
        float: 'float 8s ease-in-out infinite',
        fade: 'fade .5s ease',
        slideUp: 'slideUp .7s ease',
      },

      keyframes: {
        float: {
          '0%,100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-8px)',
          },
        },

        fade: {
          from: {
            opacity: 0,
          },

          to: {
            opacity: 1,
          },
        },

        slideUp: {
          from: {
            opacity: 0,
            transform: 'translateY(40px)',
          },

          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(.22,.61,.36,1)',
      },
    },
  },

  plugins: [],
}
