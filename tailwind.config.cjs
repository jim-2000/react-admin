/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './src/**/*.{js,jsx,ts,tsx}',
     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px',
    },
    container:{
      center:true,
      padding:'1rem',      
    },
    extend: {
       fontFamily:{
        neocha: "'Neucha', 'cursive'",
        poppins: "'Poppins', 'sans-serif'",
        roboto: "'Roboto', 'sans-serif'",
       },
       colors:{
        'primary':'#FD3D57',
        'secondary':'#FFDADF',
        'dark':'#2B2D42',
        'icon':'#59d0ff',
        'hovericon':'#00458b',
        'primaryText':'#727D8F',
        'secondaryText':'#C5C9D0'
       }      
    },
  },
  
  plugins: [
    require('flowbite/plugin')
  ],
}
