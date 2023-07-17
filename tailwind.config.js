/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',

    //   'sm-c': '400px',

    //   'xs-c': '350px',

    //   'pix-c': '380px',
      
    //   'md': '768px',

    // },
  },
  plugins: [require("daisyui")],
}