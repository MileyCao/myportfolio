/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: '#C95D63',
        yellow: '#fedc97',
        grey: '#ededed',
        blue: '#0F52BA',
        'dark-blue': '#022d5f',
        cream: '#fdfbec',
        pink: '#C95D63',

        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(90deg, rgba(15,76,129,1) 0%, rgba(165,173,233,1) 35%, rgba(255,184,184,1) 100%)',

        'gradient-rainblue':
          'linear-gradient(90deg, rgba(15,76,129,1) 0%, rgba(165,173,233,1) 35%, rgba(255,184,184,1) 100%)',
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
  plugins: [require('tailwind-scrollbar')],
};
