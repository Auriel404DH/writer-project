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
    fontFamily: {
      ubuntuBold: ['UbuntuBold', 'sans-serif'],
      ubuntuLight: ['UbuntuLight', 'sans-serif'],
      ubuntuRegular: ['UbuntuRegular', 'sans-serif'],
      ubuntuMedium: ['UbuntuMedium', 'sans-serif'],
    },
    extend: {
      colors: {
        main: '#e7a007',
        main2: '#222327',
      },
    },
  },
  plugins: [],
};
