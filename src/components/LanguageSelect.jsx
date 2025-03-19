import { useContext, useState } from "react"
import { LanguageContext} from "../context/LanguageContext.jsx"

export const LanguageSelect = () => {
    const { language, toggleLanguage} = useContext(LanguageContext)
    
    const handleToggleLanguage = () => {
        const newLanguage = language === "es" ? "en" : "es"
        toggleLanguage(newLanguage)
    }
    return (
        <button id="language-switcher" type="button">
            <ul>
                <li><button onClick={handleToggleLanguage}>Español</button></li>
            </ul>
        </button>
/*         <input type="select" name="language" id="language-select" onClick={handleToggleLanguage} className="fixed top-52 right-10 bg-red-600">
            <option value="es" selected>Español</option>
            <option value="en">English</option>
        </input> */
    )
}