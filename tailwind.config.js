/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'white':'#ffffff',
      'grey':'#888888',
      'yellow': '#FBD784',
      'gray-dark': '#0b1d26',
    },
    fontFamily: {
      abel: ['Abel', 'sans-serif'],
      serif: ['Abel', 'serif'],
      actor: ['Actor', 'sant-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '24xl': '16rem',
      '8xl': '5rem',
      '6xl': '64px'
    },
    extend: {
      spacing: {
        '105': '105rem',
      },
      margin:{
        '30':'122px',
        '54':'212px'
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/MNTN main-foto.png')",
        'blog-pattern':"url('./assets/hiking_one_leg.jpg')",
      }
    },
  },
  
  plugins: [],
}

