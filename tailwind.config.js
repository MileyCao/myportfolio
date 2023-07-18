/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: '#dc4492',
        yellow: '#f0bc68',
        grey: '#ededed',
        'dark-blue': '#022d5f',
        cream: '#fdfbec',
        pink: 'f9a0a3',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow': 'linear-gradient(0,0,0,0)',
      }),
      fontFamily: {
        Montserrat: ['Montserrat', 'serif'],
        Lora: ['Lora', 'serif'],
      },
      content: {
        avatar: "url('./assets/avatar.png')",
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
