// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '375',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'white': '#fff',
      'blue-light': '#413C66',
      'black': "#000",
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      'Axiforma-Regular': ['Axiforma-Regular', 'sans-serif'],
      'Axiforma-Book': ['Axiforma-Book', 'sans-serif'],
      'Axiforma-Light': ['Axiforma-Light', 'sans-serif'],
      'Axiforma-Medium': ['Axiforma-Medium', 'sans-serif'],
      'Axiforma-SemiBold': ['Axiforma-SemiBold', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("daisyui")],
}