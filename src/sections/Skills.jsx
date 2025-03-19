import clsx from "clsx"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import {ArrowDown} from "../components/Icons.jsx"
import { HTML5, CSS3, PYTHON, JS, DJANGO, REACT, SQLite3 } from "../components/Tecnologies.jsx"

export const Skills = () => {
    const {theme, darkMode} = useContext(ThemeContext)
    return (
        <section className="h-screen w-full relative flex flex-col justify-between" id="skills">
            <div className="flex sm:flex-row flex-col items-center sm:mt-40 mt-20 sm:mx-10 mx-5">
                <div className="w-full align-middle items-center">
                    <p className="title-section"><strong>Tecnologías</strong></p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-7 gap-4 mt-3 sm:mt-5 h-fit justify-items-center">
                        {[
                            {icon: <CSS3 />, name: "CSS3"},
                            {icon: <DJANGO />, name: "Django"},
                            {icon: <HTML5 />, name: "HTML5"},
                            {icon: <JS />, name: "JavaScript"},
                            {icon: <PYTHON />, name: "Python"},
                            {icon: <REACT />, name: "React"},
                            {icon: <SQLite3 />, name: "SQLite3"},
                        ].map((tech, index) => (
                            <div key={index} className={clsx("w-full aspect-square flex flex-col items-center justify-center p-4 rounded-xl shadow-md", darkMode ? `shadow-dark${theme}-terciary` : `shadow-${theme}-quaternary` )}>
                                <div className="w-12 h-12">{tech.icon}</div>
                                <p className="mt-2 text-sm sm:text-base"><strong>{tech.name}</strong></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 flex items-center justify-center animate-bounce">
                <a href="#projects" onClick={()=>{}}>
                    <ArrowDown className="w-6 h-6"/>
                </a>
            </div>
        </section>
    )
}

