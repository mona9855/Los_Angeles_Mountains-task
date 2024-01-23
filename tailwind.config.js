/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '600px'},
        'md': {'max': '768px'},
        'lg': {'max': '1140px'},
      },
      colors: {
        'mountainActive': 'rgb(63,78,108)',
        'mountainNotActive': 'rgb(175,179,189)',
        'mountains': 'rgb(65,79,107)',
        'titleNumber': 'rgb(113,130,157)',
        'titleHistory': 'rgb(62,78,108)',
        'linksHover': 'rgb(86,100,126)',
      },
      backgroundImage: {
        'heroBgSm': "url('/src/assets/hero-bg-sm.png')",
        'tab2': "url('/src/assets/tab-2.png')",
        'tab1': "url('/src/assets/tab-1.png')",
        'heroBg': "url('/src/assets/hero-bg.png')",
        'historyBg': "url('/src/assets/Bg.png')",
      },
      fontFamily: {
        'lora': "'Lora', serif",
      },
    },
  },
  plugins: [],
}

