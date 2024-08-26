import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateRows: {
        '1fr-auto': '1fr auto',
      },
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundColor: {
        'black-opacity': 'rgba(24, 24, 24, 0.8)',
      },
      boxShadow: {
        shadow1: '25px 25px 25px 0 rgba(0, 0, 0, 0.5)',
        shadow2: '6px 6px 8px 0 rgba(0, 0, 0, 0.3);'
      },
      fontFamily: {
        "first": "PT_Sans sans-serif" ,
        "second": "Playfair_Display_SC sans-serif",
      },
      spacing: {
        'header': '94px',
        'mobile': '15px',
        '400px': '400px',
        'm40px': '-40px',
        'temp-1': '54px',
        'temp-2': '70px',
        '550px': '550px',
        '1px': '1px',
        "100px": "100px",
      },
      colors: {
        gray: '#D9D9D9',
        gold: '#C4A25E',
        main: '#0F2117',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        'desk': {'max': '1440px'},
        'deskS': {'max': '1110px'},
        'tablet': {'max': '800px'},
        'tabletS': {'max': '560px'},
        'mobile': {'max': '440px'},
        'mobileS': {'max': '375px'},
        "max800": {'max': '800px'},
        "max550": {'max': '550px'},
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config