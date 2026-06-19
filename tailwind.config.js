/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        'background-light': '#141414',
        'background-card': '#1a1a1a',
        accent: '#E50914',
        'accent-hover': '#f6121d',
        'text-primary': '#ffffff',
        'text-secondary': '#c0c0c0',
        'text-muted': '#888888',
        'border-dark': '#2a2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw, 5.5rem)', { lineHeight: '1.05', fontWeight: '800' }],
        'hero-sub': ['clamp(1.1rem, 3vw, 1.6rem)', { lineHeight: '1.3' }],
        'section-title': ['clamp(2rem, 4.5vw, 3rem)', { lineHeight: '1.15', fontWeight: '800' }],
      },
      maxWidth: {
        'section': '1200px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(229,9,20,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(229,9,20,0.6)' },
        },
      },
    },
  },
  plugins: [],
};
