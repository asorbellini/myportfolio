import clsx from "clsx"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import {ArrowDown} from "../components/Icons.jsx"
import { HTML5, CSS3, PYTHON, JS, DJANGO, REACT, SQLite3 } from "../components/Tecnologies.jsx"

export const Skills = () => {
    const {theme, darkMode} = useContext(ThemeContext)
    return (
        <section className="min-h-screen w-full relative flex flex-col justify-between" id="skills">
            <div className="flex sm:flex-row flex-col items-center sm:mt-28 mt-20 sm:mx-10 mx-5">
                <div className="w-full align-middle items-center">
                    <h1 className={clsx("title-section", darkMode ? `text-dark${theme}-terciary` : `text-${theme}-quaternary`)}><strong>Habilidades</strong></h1>
                    <h2 className="paragraph">A continuación se muestran las tecnologías y lenguajes de programación abordados como autodidacta, mientras continuo formandome para seguir creciendo.</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-7 gap-4 mt-3 sm:mt-5 h-fit justify-items-center">
                        {[
                            {icon: <CSS3 
                                fillColorOne={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#264de4]` 
                                    : `fill-black group-hover:fill-[#264de4]`)} 
                                fillColorTwo={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#2965f1]` 
                                    : `fill-black group-hover:fill-[#2965f1]`)}
                                fillColorThree={clsx(darkMode 
                                    ? `fill-[#1c1c1c] group-hover:fill-[#ffffff]` 
                                    : `fill-white group-hover:fill-[#ffffff]`)}
                                fillColorFour={clsx(darkMode 
                                    ? `fill-[#1c1c1c] group-hover:fill-[#ebebeb]` 
                                    : `fill-white group-hover:fill-[#ebebeb]`)}/>, 
                                name: "CSS3"},
                            {icon: <DJANGO 
                                fillColorOne={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#092e20]` 
                                    : `fill-black group-hover:fill-[#092e20]`)}
                                fillColorTwo={clsx(darkMode 
                                    ? `fill-[#1c1c1c] group-hover:fill-[#ffffff]` 
                                    : `fill-white group-hover:fill-[#ffffff]`)}/>, 
                                name: "Django"},
                            {icon: <HTML5 
                                fillColorOne={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#e34f26]` 
                                    : `fill-black group-hover:fill-[#e34f26]`)} 
                                fillColorTwo={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#ef652a]` 
                                    : `fill-black group-hover:fill-[#ef652a]`)}
                                fillColorThree={clsx(darkMode 
                                    ? `fill-[#1c1c1c] group-hover:fill-[#ffffff]` 
                                    : `fill-white group-hover:fill-[#ffffff]`)}
                                fillColorFour={clsx(darkMode 
                                    ? `fill-[#1c1c1c] group-hover:fill-[#ebebeb]` 
                                    : `fill-white group-hover:fill-[#ebebeb]`)}/>, 
                                name: "HTML5"},
                            {icon: <JS 
                                fillColorOne={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#f5de19]` 
                                    : `fill-black group-hover:fill-[#f5de19]`)}
                                fillColorTwo={clsx(darkMode 
                                    ? `fill-[#1c1c1c] group-hover:fill-[#323330]` 
                                    : `fill-white group-hover:fill-[#323330]`)}/>,
                                name: "JavaScript"},
                            {icon: <PYTHON 
                                fillColorOne={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#628aac]` 
                                    : `fill-black group-hover:fill-[#628aac]`)} 
                                fillColorTwo={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#fbcb24]` 
                                    : `fill-black group-hover:fill-[#fbcb24]`)}/>, 
                            name: "Python"},
                            {icon: <REACT 
                                fillColorOne={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#61DBFB]` 
                                    : `fill-black group-hover:fill-[#61DBFB]`)}/>,
                                name: "React"},
                            {icon: <SQLite3 
                                fillColorOne={clsx(darkMode 
                                    ? `fill-white` 
                                    : `fill-black`)}
                                fillColorTwo={clsx(darkMode 
                                    ? `fill-white group-hover:fill-[#003B57] group-hover:stroke-[#ffffff]` 
                                    : `fill-black group-hover:fill-[#003B57]`)} />,
                                name: "SQLite3"},
                        ].map((tech, index) => (
                            <div key={index} className={clsx("w-full aspect-square flex flex-col items-center justify-center p-4 rounded-xl group", darkMode ? `border-2 border-dark${theme}-terciary shadow-md shadow-dark${theme}-terciary` : `border-2 border-${theme}-quaternary shadow-md shadow-${theme}-quaternary` )}>
                                <div className="w-12 sm:w-20 h-12 sm:h-20 flex items-center justify-center transition-transform group-hover:scale-150">
                                    {tech.icon}
                                </div>
                                <p className="mt-2 text-sm sm:text-base group-hover:hidden transition-all duration-300"><strong>{tech.name}</strong></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 flex items-center justify-center animate-bounce">
                <a href="#projects" onClick={()=>{}}>
                    <ArrowDown className="w-8 h-8"/>
                </a>
            </div>
        </section>
    )
}

