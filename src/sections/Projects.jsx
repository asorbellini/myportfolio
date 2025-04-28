import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext.jsx"
import {ArrowDown, GitHubIcon} from "../components/Icons.jsx"
import clsx from "clsx"
import { Proyectos } from "../const/const.js"
import {CloseIcon} from "../components/Icons.jsx"

function Modal({isOpen, onClose, children, theme, darkMode}) {
    if (!isOpen) return null;
    return (
        <div className={clsx("fixed w-full h-full inset-0 flex items-center justify-center z-50", 
                                darkMode ? `bg-dark${theme}-primary bg-opacity-90` : `bg-${theme}-primary bg-opacity-90`)}>
            <div className={clsx("relative max-w-4xl w-full max-h-[90vh] p-3 rounded-2xl my-20 sm:mx-10 mx-5 z-50 overflow-y-auto",
                darkMode ? `bg-dark${theme}-primary bg-opacity-90 shadow-md shadow-dark${theme}-terciary` : `bg-${theme}-terciary bg-opacity-90 shadow-md shadow-${theme}-quaternary`)}>
            <button
                onClick={onClose}
                className="absolute top-2 right-2"
            >
                <CloseIcon />
            </button>
            {children}
            </div>
        </div>
    );
  }

const Carousel = ({listOfImages}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => setCurrentSlide((prev)=>(prev+1) % listOfImages.length)
    const prevSlide = () => setCurrentSlide((prev)=>(prev-1 + listOfImages.length) % listOfImages.length)

    useEffect(()=>{
        const timer = setInterval(nextSlide, 8000)
        return () => clearInterval(timer) 
    },[])

    return(
        <div className="relative w-full max-w-md aspect-square flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)`}}>
                {listOfImages.map((img)=>(
                    <div key={img.id} className="w-full flex-shrink-0 flex items-center justify-center" >
                        <img 
                        src={img.image}
                        alt={img.name}
                        className="w-full h-full object-contain rounded-2xl"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-600 bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition duration-300"
                >
                    <div style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}>
                        <ArrowDown className="w-3 sm:w-6 h-6 sm:h-6"/>
                    </div>
            </button>
            <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-600 bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition duration-300"
            >
                <div style={{ transform: 'rotate(270deg)', transformOrigin: 'center' }}>
                        <ArrowDown className="w-3 sm:w-6 h-6 sm:h-6"/>
                    </div>
            </button>
            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex items-center justify-center gap-2">
                    {listOfImages.map((_, i) => (
                    <button
                        key={i}
                        className={`
                        w-2 h-2 rounded-full transition-all duration-300
                        ${currentSlide === i ? 'bg-green-600 scale-110' : 'bg-[#4c4c4c] bg-opacity-50'}
                        `}
                        onClick={() => setCurrentSlide(i)}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Projects = () => {
    const {theme, darkMode} = useContext(ThemeContext)
    const [activeModal, setActiveModal] = useState(null)
    return (
        <section className="min-h-screen w-full relative flex flex-col justify-between transition-all" id="projects">
            <div className="flex sm:flex-row flex-col items-center sm:mt-28 mt-20 sm:mx-10 mx-5">
                <div className="w-full align-middle items-center">
                    <h1 className={clsx("title-section", darkMode ? `text-dark${theme}-terciary` : `text-${theme}-quaternary`)}><strong>Proyectos</strong></h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 sm:mt-5 justify-items-center">
                        {([...Proyectos].reverse()).map((project)=>(
                            <div key={project.id} className={clsx("w-full h-full flex flex-col items-center rounded-xl sm:px-10 px-5", 
                                darkMode 
                                ? `border-2 border-dark${theme}-terciary shadow-md shadow-dark${theme}-terciary` 
                                : `border-2 border-${theme}-quaternary shadow-md shadow-${theme}-quaternary`)}>
                                <h1 className="paragraph underline underline-offset-8"><strong>{project.title}</strong></h1>
                                <img className="object-cover rounded-md md:w-[80%] w-[60%] mt-2" src={project.urlImages[0].image} alt={project.urlImages[0].name}/>
                                <p className="text-start text-base mt-2">{project.smallDescription}</p>
                                <button className={clsx("m-2 p-2 rounded-sm",
                                darkMode 
                                ? `bg-dark${theme}-quaternary border border-dark${theme}-secondary text-white hover:bg-opacity-50` 
                                : `bg-${theme}-quaternary border border-${theme}-secondary text-black hover:bg-opacity-50`)} onClick={()=>{setActiveModal(project)}} >Ver más</button>
                            </div>
                        ))}
                        <Modal
                            isOpen={!!activeModal}
                            onClose={() => setActiveModal(null)}
                            theme={theme}
                            darkMode={darkMode}
                        >
                            <h3 className="text-xl font-bold text-center mb-2 underline underline-offset-8">{activeModal?.title}</h3>
                            <div className="w-full flex justify-center items-center">
                                <Carousel listOfImages={activeModal?.urlImages} />
                            </div>
                            <div className="overflow-y-auto text-start my-2 sm:px-10 px-5">
                                <p className="text-base">{activeModal?.description}</p>
                                <p className=" text-base">Teconologías implementadas: {activeModal?.technologies.join(", ")}</p>
                                <p className="inline-flex text-base"> Repositorio del proyecto</p><a className="inline-flex m-1 gap-1 hover:scale-125" href={activeModal?.repository} target="_blank" rel="noopener noreferrer"><GitHubIcon  /></a>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="relative w-full">
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center animate-bounce">
                    <a href="#contact" onClick={()=>{}}>
                        <ArrowDown className="w-8 h-8"/>
                    </a>
                </div>
            </div>
        </section>
    )
}