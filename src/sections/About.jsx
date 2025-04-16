import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx"
import {ArrowDown} from "../components/Icons.jsx"
import clsx from "clsx"

export const About = () => {
    const { theme, darkMode } = useContext(ThemeContext)
    return (
        <section className="h-screen w-full relative flex flex-col justify-between" id="about">
            <div className="flex sm:flex-row flex-col items-center sm:mt-40 mt-20 sm:mx-10 mx-5">
                <div className="w-full">
                    <p className={clsx("title-section", darkMode ? `text-dark${theme}-terciary` : `text-${theme}-quaternary`)}><strong>Un poco sobre mi</strong></p>
                    <p className="paragraph">Con una sólida formación en ingeniería civil y experiencia laboral en el rubro, y motivada por un creciente interés en la tecnología, decidí comenzar una nueva etapa profesional en el desarrollo de software. Desde entonces, me he formado de manera autodidacta lo que me permitió adquirir conocimientos del mundo del desarrollo. Actualmente complemento este aprendizaje con estudios formales en la Tecnicatura Superior en Desarrollo de Software, mientras trabajo en este portafolio como una base para documentar mis proyectos y crecimiento profesional.</p>
                    <p className="paragraph">Mi objetivo es lograr incursionar y crecer profesionalmente en el mundo I.T., aportando mis capacidades de pensamiento crítico, analítico y creatividad en la construcción de soluciones digitales.</p>
                </div>
            </div>
            <div className="relative w-full">
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center animate-bounce">
                    <a href="#skills" onClick={()=>{}}>
                        <ArrowDown />
                    </a>
                </div>
            </div>
        </section>
    )
}

