
import {ArrowDown} from "../components/Icons.jsx"

export const About = () => {
    return (
        <section className="h-screen w-full relative flex flex-col justify-between" id="about">
            <div className="flex sm:flex-row flex-col items-center sm:mt-40 mt-20 sm:mx-10 mx-5">
                <div className="w-full">
                    <p className="title-section"><strong>Un poco acerca de mi</strong></p>
                    <p className="paragraph">Hola de nuevo, soy Ayelén y soy ingeniera civil de formación, pero hace un tiempo decidí redirigir mi carrera hacia el desarrollo web. Siempre me ha interesado la tecnología y la resolución de problemas, y encontré en la programación una forma de combinar creatividad y lógica para construir soluciones.</p>
                    <p className="paragraph">Actualmente, estoy desarrollando mi portafolio para mostrar mis habilidades y proyectos. Mi objetivo es seguir aprendiendo y creciendo en el mundo del desarrollo web, aportando mi capacidad analítica y resolución de problemas adquiridas en mi formación como ingeniera.</p>
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

