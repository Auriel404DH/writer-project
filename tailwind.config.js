/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors: {
        toto: '#A38467',
      },
      backgroundColor: {
        main: '#1D1A54',
      },
      fontFamily: {
        body: ['Josefin+Sans'],
      },
    },
  },
  plugins: [],
};
