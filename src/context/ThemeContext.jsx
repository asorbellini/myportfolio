import { useState, useEffect, createContext } from "react"
import { themes } from "../const/const.js"

export const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(()=>localStorage.getItem('theme')||'autumn')
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')
    const toggleTheme = (newTheme) => {
        setTheme(newTheme)
    }
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    useEffect(()=>{
        document.documentElement.classList.remove(...themes)
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme',theme)
        if (darkMode){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('darkMode', darkMode.toString());
    },[theme, darkMode]) 

    return(
        <ThemeContext.Provider value={{theme, toggleTheme, darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

