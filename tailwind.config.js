/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: '#dc4492',
        yellow: '#f0bc68',
        grey: '#ededed',
        'dark-blue': '#022d5f',
        cream: '#fdfbec',
        pink: '#f9a0a3',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
      }),
      fontFamily: {
        Montserrat: ['Montserrat', 'serif'],
        Lora: ['Lora', 'serif'],
        LG: ['Luckiest Guy', 'cursive'],
      },
      content: {
        brush: "url('./assets/brush.png')",
        lines: "url('./assets/lines.png')",
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
