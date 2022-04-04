module.exports = {
  // mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // darkMode: "class", // or 'media' or 'class'
  important: '#body',
  theme: {
    extend: {
      colors: {
        primary: {
          main: 'var(--color-primary-main)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
          contrastText: 'var(--color-primary-contrastText)',
        },
        secondary: {
          main: 'var(--color-secondary-main)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
          contrastText: 'var(--color-secondary-contrastText)',
        },
      },
      fontFamily: {
        'nunito-san': ['Nunito San', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
