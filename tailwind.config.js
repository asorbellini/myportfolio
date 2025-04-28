

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['Merriweather Sans', 'sans-serif'],
      },
      colors:{
        //LIGHT THEME
        autumn:{
          'primary': 'rgb(243, 225, 187)', //BACKGROUND 
          'secondary': 'rgb(145, 114, 55)',//TEXT / BACKGROUND-NAVBAR 
          'terciary': 'rgb(255, 254, 138)', //LOGO
          'quaternary': 'rgb(170, 97, 67)', //BORDER
        },
        winter:{
          'primary': 'rgb(225, 235, 240)',
          'secondary': 'rgb(26, 120, 193)', 
          'terciary':'rgb(240, 190, 250)', //##CAMBIAR
          'quaternary':'rgb(69, 98, 104)',
        },
        spring:{
          'primary': 'rgb(190, 174, 226)',
          'secondary': 'rgb(179, 35, 247)',
          'terciary':'rgb(255, 255, 255)',
          'quaternary':'rgb(123, 86, 240)',
        },
        summer:{
          'primary': 'rgb(249,249,108)',
          'secondary': 'rgb(50, 160, 50)',
          'terciary':'rgb(255, 255, 244)',
          'quaternary':'rgb(244,139,41)',
        },
        //DARK THEME
        darkautumn:{
          'primary': 'rgb(28, 28, 28)', //BACKGROUND
          'secondary': 'rgb(160, 154, 44)', //TEXT / BACKGROUND-NAVBAR 
          'terciary': 'rgb(255, 254, 138)', //LOGO 
          'quaternary': 'rgb(97, 24, 0)', //BORDER 
        },
        darkwinter:{
          'primary': 'rgb(28, 28, 28)',
          'secondary': 'rgb(90, 146, 207)',
          'terciary':'rgb(120, 139, 202)',
          'quaternary':'rgb(20, 2, 79)',
        },
        darkspring:{
          'primary': 'rgb(28, 28, 28)',
          'secondary': 'rgb(167, 102, 217)',
          'terciary':'rgb(213, 111, 189)',
          'quaternary':'rgb(36, 22, 40)',
        },
        darksummer:{
          'primary': 'rgb(28, 28, 28)',
          'secondary': 'rgb(27, 162, 55)',
          'terciary':'rgb(194, 112, 199)',
          'quaternary':'rgb(199, 83, 2)',
        }
      }
    },
  },
  safelist: [
    {
      pattern: /bg-(autumn|darkautumn|winter|darkwinter|spring|darkspring|summer|darksummer)-(primary|secondary|terciary|quaternary)/,
      variants: ["dark"],
    },
    {
      pattern: /text-(autumn|darkautumn|winter|darkwinter|spring|darkspring|summer|darksummer)-(primary|secondary|terciary|quaternary)/,
      variants: ["dark"],
    },
    {
      pattern: /fill-(autumn|darkautumn|winter|darkwinter|spring|darkspring|summer|darksummer)-(primary|secondary|terciary|quaternary)/,
      variants: ["dark"],
    },
    {
      pattern: /border-(autumn|darkautumn|winter|darkwinter|spring|darkspring|summer|darksummer)-(primary|secondary|terciary|quaternary)/,
      variants: ["dark"],
    },
    {
      pattern: /shadow-(autumn|darkautumn|winter|darkwinter|spring|darkspring|summer|darksummer)-(terciary|quaternary)/,
      variants: ["dark"],
    },
  ],
}

