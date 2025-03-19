import { useState,  createContext, useEffect } from "react"

export const LanguageContext = createContext()

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState('es')
    const [languageData, setLanguageData] = useState({})

    const toggleLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    }

    useEffect(()=>{
        fetchLanguageData()
    },[])
    
    useEffect(()=>{
        fetchLanguageData()
    },[language])

    const fetchLanguageData = () => {
        const dataUrl = `/locales/${language}.json`

        fetch(dataUrl)
        .then((response) => response.json)
        .then((data) => setLanguageData(data))
        .catch((error) => console.error("Error fetching language data:", error))
    }
    return (
        <LanguageContext.Provider value={{language, toggleLanguage, languageData}} >
            {children}
        </LanguageContext.Provider>
    )
}