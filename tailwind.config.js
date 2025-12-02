/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0F1F',
          surface: '#0E1A36',
          accent: '#1E3A8A',
          highlight: '#3B82F6',
        },
        light: {
          text: '#E5E7EB',
          textSecondary: '#9CA3AF',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#3B82F6',
          600: '#1E3A8A',
          700: '#1e40af',
          800: '#0E1A36',
          900: '#0A0F1F',
        },
      },
      backgroundColor: {
        'dark-bg': '#0A0F1F',
        'dark-surface': '#0E1A36',
        'dark-accent': '#1E3A8A',
      },
      textColor: {
        'light-text': '#E5E7EB',
        'light-secondary': '#9CA3AF',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-strong': 'glow-strong 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'wave': 'wave 20s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #3B82F6, 0 0 10px #3B82F6, 0 0 15px #3B82F6',
            textShadow: '0 0 5px #3B82F6, 0 0 10px #3B82F6'
          },
          '100%': { 
            boxShadow: '0 0 10px #3B82F6, 0 0 20px #3B82F6, 0 0 30px #3B82F6',
            textShadow: '0 0 10px #3B82F6, 0 0 20px #3B82F6, 0 0 30px #3B82F6'
          },
        },
        'glow-strong': {
          '0%': { 
            boxShadow: '0 0 10px #3B82F6, 0 0 20px #3B82F6, 0 0 30px #3B82F6, 0 0 40px #3B82F6',
            textShadow: '0 0 10px #3B82F6, 0 0 20px #3B82F6'
          },
          '100%': { 
            boxShadow: '0 0 20px #3B82F6, 0 0 30px #3B82F6, 0 0 40px #3B82F6, 0 0 50px #3B82F6',
            textShadow: '0 0 20px #3B82F6, 0 0 30px #3B82F6, 0 0 40px #3B82F6'
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateY(20px) rotate(-5deg)' },
        },
        'neon-pulse': {
          '0%, 100%': { 
            opacity: 1,
            filter: 'brightness(1) drop-shadow(0 0 5px #3B82F6)'
          },
          '50%': { 
            opacity: 0.8,
            filter: 'brightness(1.2) drop-shadow(0 0 20px #3B82F6)'
          },
        },
      },
    },
  },
  plugins: [],
}

