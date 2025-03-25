

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
          'secondary': 'rgb(150, 120, 50)',//TEXT / BACKGROUND-NAVBAR 
          'terciary': 'rgb(255, 254, 138)', //LOGO
          'quaternary': 'rgb(97, 24, 0)', //BORDER
        },
        winter:{
          'primary': 'rgb(225, 235, 240)',
          'secondary': 'rgb(43, 110, 181)', 
          'terciary':'rgb(240, 190, 250)', //##CAMBIAR
          'quaternary':'rgb(69, 98, 104)',
        },
        spring:{
          'primary': 'rgb(190, 174, 226)',
          'secondary': 'rgb(150, 75, 200)',
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
          'secondary': 'rgb(108, 103, 19)', //TEXT / BACKGROUND-NAVBAR 
          'terciary': 'rgb(255, 254, 138)', //LOGO 
          'quaternary': 'rgb(97, 24, 0)', //BORDER 
        },
        darkwinter:{
          'primary': 'rgb(28, 28, 28)',
          'secondary': 'rgb(43, 110, 181)',
          'terciary':'rgb(150, 120, 200)',
          'quaternary':'rgb(20, 2, 79)',
        },
        darkspring:{
          'primary': 'rgb(28, 28, 28)',
          'secondary': 'rgb(111, 21, 161)',
          'terciary':'rgb(111, 21, 161)',
          'quaternary':'rgb(123, 86, 240)',
        },
        darksummer:{
          'primary': 'rgb(28, 28, 28)',
          'secondary': 'rgb(8, 110, 28)',
          'terciary':'rgb(180, 140, 255)',
          'quaternary':'rgb(244,139,41)',
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

