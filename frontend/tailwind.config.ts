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
      backgroundColor: {
        'black-opacity': 'rgba(24, 24, 24, 0.8)',
      },
      boxShadow: {
        shadow1: '25px 25px 25px 0 rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        "first": "PT_Sans sans-serif" ,
        "second": "Playfair_Display_SC sans-serif",
      },
      spacing: {
        'temp-1': '54px',
        'temp-2': '70px',
        '550px': '550px',
        '1px': '1px',
        "100px": "100px",
      },
      colors: {
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config