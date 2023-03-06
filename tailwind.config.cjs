/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#2B2B2B',
        secbackground: '#3B3B3B',
        label: '#858584',
        light: '#fff',
        action: '#A259FF',
      },
      fontFamily: {
        spaceMono: ["space Mono"]
      },
      screens: {
        "mobile": "360px",
        'tablet': '767px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },


    },
  },
  plugins: [],
}
