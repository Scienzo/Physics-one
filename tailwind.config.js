/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Physics-themed dark backgrounds (unified)
        'physics-dark': {
          950: '#050a14',
          900: '#0A192F',
          800: '#0d1f3c',
          700: '#112240',
        },
        // Electric Cyan - Primary accent (energy, electricity)
        'electric': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        // Plasma Orange - Secondary accent (heat, energy)
        'plasma': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
      },
      backgroundImage: {
        'physics-gradient': 'linear-gradient(135deg, #0A192F 0%, #112240 50%, #0d1f3c 100%)',
        'electric-gradient': 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
        'plasma-gradient': 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
        'glow-radial': 'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(34, 211, 238, 0.3)',
        'glow-md': '0 0 25px -5px rgba(34, 211, 238, 0.4)',
        'glow-lg': '0 0 35px -5px rgba(34, 211, 238, 0.5)',
        'plasma-glow': '0 0 25px -5px rgba(249, 115, 22, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(34, 211, 238, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
