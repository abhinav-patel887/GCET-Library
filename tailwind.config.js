/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx},flowbite.content(),"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    colors:{
      'gold':'#d1b971',
      'dark-gold':'#827b54',
      'black':'black',
      'white':'white',
      'brown':'#8c5c2c',
      'custom-black':'#0d0d0e',
      'transparent':'transparent',
      'red':'red',
      'gray':'gray',
      'slate':'slate',
    },
    extend: {
      fontFamily: {
        archivo: ['"Archivo Black"', 'sans-serif'],
        rowdies: ['"Rowdies"', 'sans-serif'],
      },
    },
  },
  plugins: [
    
  ],
}

