/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
        dark: '#000000',
        light: {
          DEFAULT: '#ffffff',
          secondary: '#f3f4f6',
          darker: '#e5e7eb',
        },
        dark2: '#1a1a1a',
        gray: {
          900: '#111827',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'skill-bounce': 'skillBounce 0.6s ease-in-out',
        'skill-pulse': 'skillPulse 2s infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #ff0000' },
          '100%': { textShadow: '0 0 20px #ff0000' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        skillBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        skillPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 0, 0, 0.4)' },
          '50%': { boxShadow: '0 0 20px 0 rgba(255, 0, 0, 0.2)' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
