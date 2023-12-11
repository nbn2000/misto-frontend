import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/*/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': 'var(--color-dark)',
        "grey": "var(--color-grey)",
        "gr-white": "var(--color-gr-white)",
        "sale": "var(--color-sale)",
        "yellow": "var(--color-yellow)",
        "error": "var(--color-error)",
        "ok": "var(--color-ok)",
        "black-opacity-2": "var(--color-black-opacity-2)",
        "black-opacity-4": "var(--color-black-opacity-4)",
      },
      textColor: {
        'dark': 'var(--color-dark)',
        "grey": "var(--color-grey)",
        "gr-white": "var(--color-gr-white)",
        "sale": "var(--color-sale)",
        "yellow": "var(--color-yellow)",
        "error": "var(--color-error)",
        "ok": "var(--color-ok)",
        "black-opacity-2": "var(--color-black-opacity-2)",
        "black-opacity-4": "var(--color-black-opacity-4)",
      },
      height: {
        'nav': '4.125rem'
      },
      width: {
        'photo': '28rem',
        'width': '32.625rem'
      },
      borderRadius: {
        "round": "50%"
      },
      screens: {
        '2xl': {'max': '1400px'},
        'xl': {'max': '1024px'},
        'lg': {'max': '768px'},  
        'md': {'max': '640px'},  
        'sm': {'max': '320px'},
        '2xl-min': {'min': '1400px'},
        'xl-min': {'min': '1024px'},
        'lg-min': {'min': '768px'},  
        'md-min': {'min': '640px'},  
        'sm-min': {'min': '320px'},
      },
      boxShadow: {
        'box': 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
      },
      display: ["group-hover"],
      spacing: {
        "4.375": "4.375rem"
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}
export default config

