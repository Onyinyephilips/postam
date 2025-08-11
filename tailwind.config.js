/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        plus: ['Plus Jarkarta Sans', 'sans-serif'],
      },
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '50%': { transform: 'rotate(-3deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        wobble: 'wobble 0.5s ease-in-out',
      },
      colors: {
        'primary': "#7562E0",
        "postam-gray": "#0D0D0D",
        "pale-purple": "#DDD7FF",
        "light-purple": "#EBE8FF",
        "postam-white": "#fff"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'cta': "url('assets/images/cta-background.jpg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'hero': "url('assets/images/hero-section.jpg')",
        'hero-mobile': "url('assets/images/hero-mobile.jpg')",
        'pattern': "url('assets/images/Organic-pattern.png')",
        'pattern2': "url('assets/images/pattern-2.svg')",
        
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [require('tailwindcss-motion')],
}