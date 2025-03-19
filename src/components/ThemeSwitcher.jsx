import { useContext, useState } from "react"
import { ThemeContext} from "../context/ThemeContext.jsx"
import { themes } from "../const/const.js"
import Flower from "../assets/icons/Flower.svg"
import Sun from "../assets/icons/Sun.svg"
import Autumn from "../assets/icons/Autumn.svg"
import Snow from "../assets/icons/Snow.svg"
import clsx from "clsx"
import { MoonIcon, SunIcon } from "./Icons.jsx"

export const ThemeSwitcher = () => {
    const {theme, toggleTheme, darkMode} = useContext(ThemeContext)
    const [open, setOpen] = useState(false)
    const seasons = [
        {name: "leaf", icon: Autumn, theme: "autumn", angle: -90},
        {name: "snow", icon: Snow, theme: "winter", angle: -60},
        {name: "flower", icon: Flower, theme: "spring", angle: -30},
        {name: "sun", icon: Sun, theme: "summer", angle: 0}]
    const currentTheme = seasons.find((season) => season.theme === theme);
    return (
        <div className="fixed right-2 bottom-2 z-50">
            <button
                onClick={() => setOpen(!open)}
                className={clsx("relative sm:w-16 w-10 sm:h-16 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-40",
                    darkMode ? `bg-dark${theme}-quaternary border border-white` : `bg-${theme}-quaternary border border-${theme}-secondary`
                )}
            >
                <img src={currentTheme.icon} alt={currentTheme.name} className="sm:w-10 w-6 sm:h-10 h-6 transition-transform duration-500"/>
            </button>

            <div className="absolute right-10 bottom-10">
                {seasons.map((season) => (
                    <button
                        key={season.name}
                        onClick={() => {
                            toggleTheme(season.theme);
                            setOpen(false);
                        }}
                        className={clsx("absolute w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform duration-500", 
                            open ? "scale-100 opacity-100" : "scale-0 opacity-0", 
                            darkMode ? `bg-dark${season.theme}-quaternary border border-white` : `bg-${season.theme}-quaternary border border-${theme}-secondary`)}
                        style={{
                            transform: `translate(${open ? -Math.cos((Math.PI / 180) * season.angle) * 90 : 0}px, ${
                                open ? Math.sin((Math.PI / 180) * season.angle) * 90 : 0
                            }px)`,
                        }}
                    >
                        <img src={season.icon} alt={season.name} className="w-8 h-8" />
                    </button>
                ))}
            </div>
        </div>
    );
}


export const DarkTheme = () => {
    const {theme, darkMode, toggleDarkMode} = useContext(ThemeContext)
    const handleDarkModeToggle = () => {
        toggleDarkMode();
      };
    return (
            <div className="z-50">
                <button
                onClick={handleDarkModeToggle}
                className={clsx("relative w-8 h-8 flex items-center justify-center rounded-full hover:animate-pulse transition-transform duration-500 ease-in-out rotate-animation", darkMode? "bg-[#4D4D4D] border border-white" : `bg-${theme}-quaternary border border-black` )}
                >
                    <div className={`absolute transform transition-transform duration-500 ${darkMode ? "rotate-0" : "rotate-180"}`}>
                        {darkMode ? <MoonIcon /> : <SunIcon />}
                    </div>
                </button>
            </div> 
    )
}