
import {ArrowDown} from "../components/Icons.jsx"

export const Projects = () => {
    return (
        <section className="h-screen w-full relative flex flex-col justify-between" id="projects">
            <div className="flex sm:flex-row flex-col items-center sm:mt-40 mt-20 sm:mx-10 mx-5">
                <div className="w-full align-middle items-center">
                    <h1 className="title-section mb-5"><strong>Proyectos</strong></h1>
                    <p className="paragraph">Proximamente...</p>
                </div>
            </div>
            <div className="relative w-full">
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center animate-bounce">
                    <a href="#contact" onClick={()=>{}}>
                        <ArrowDown className="w-6 h-6"/>
                    </a>
                </div>
            </div>
        </section>
    )
}