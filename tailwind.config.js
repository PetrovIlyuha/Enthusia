module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        changeScale: {
          '0%, 100%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
        },
      },
      animation: {
        changeScale: 'changeScale 15s linear infinite forwards',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
