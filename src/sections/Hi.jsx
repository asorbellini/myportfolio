import clsx from "clsx"
import { ThemeContext } from "../context/ThemeContext.jsx"
import { useContext } from "react"
/* import imagenPrevia from "../assets/Imagenprevia.jpg" */
import AvatarViewer from '../components/Avatar.jsx'
import {ArrowDown} from "../components/Icons.jsx"

export const Hi = () => {
    const {theme, darkMode} = useContext(ThemeContext)
    return (
        <section className="h-screen w-full relative flex flex-col justify-between" id="home">
            <div className="flex sm:flex-row flex-col items-center sm:mt-40 mt-28 sm:mx-10 mx-5">
                <div className="w-full sm:basis-2/3">
                    <h1 className={clsx("home-section", darkMode ? `text-dark${theme}-secondary` : `text-${theme}-secondary`)}><strong>Hola! Soy Ayelén.</strong></h1>
                    <h3 className="my-4 text-start xl:text-2xl md:text-xl sm:text-lg text-base/6">Bienvenido a mi espacio digital, donde cada línea de código representa un nuevo aprendizaje en mi camino.</h3>
                </div>
                <div className="w-full sm:basis-1/3 flex justify-center">
                        <AvatarViewer/>
                    {/*<img src={imagenPrevia} className="w-64"/> */}
                </div>
            </div>
            <div className="relative w-full">
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center animate-bounce">
                    <a href="#about" onClick={()=>{}}>
                        <ArrowDown className="w-6 h-6"/>
                    </a>
                </div>
            </div>
        </section>
    )
}
