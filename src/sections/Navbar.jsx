import { useState, useContext, useEffect } from "react"
import { NavItems } from "../const/const.js"
import { ThemeContext } from "../context/ThemeContext.jsx"
import clsx from "clsx"
import SAMIcon from "../components/SAMIcon.jsx"
import {CloseIcon, MenuIcon} from "../components/Icons.jsx"
import { DarkTheme } from "../components/ThemeSwitcher.jsx"

const useActiveSection = () => {
    const [activeSecction, setActiveSecction] = useState(null)

    useEffect(()=>{
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        }
        const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry)=>{
                    const id = entry.target.getAttribute("id")
                    const menuLink = document.querySelector(`.menu a[href="#${id}"]`)
                    if (entry.isIntersecting) {
                        setActiveSecction(id)
                        if(menuLink){
                            menuLink.classList.add("underline")
                        }
                    } else {
                        if(menuLink){
                            menuLink.classList.remove("underline")
                        }
                    }
                })
            }, observerOptions)
        const sections = document.querySelectorAll("section[id]")
        sections.forEach((section) => observer.observe(section))
        return () => {
            sections.forEach((section)=> observer.unobserve(section))
        }
        
    },[])
    return activeSecction
}

const NavbarItems = ({toggleMenu, darkMode}) => {
    const activeSecction = useActiveSection()
    return(
        <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative menu">
            {
            NavItems.map(({id ,title, href})=>(
                <li key={id} className="max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
                    <a href={href} 
                    className={clsx("xl:text-xl md:text-lg sm:text-base text-lg transition-colors duration-500", 
                        activeSecction === id 
                        ? darkMode 
                            ? "text-black underline underline-offset-4" 
                            : "text-white underline underline-offset-4" 
                        : darkMode 
                            ? `text-white hover:text-gray-800` 
                            : `text-black hover:text-gray-300`)}
                    onClick={toggleMenu} >
                        {title.charAt(0).toUpperCase()+title.slice(1)}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)
    const { theme, darkMode, toggleDarkMode } = useContext(ThemeContext);
    return (
        <header className="fixed top-0 right-0 left-0 z-50">
            <div className="mx-auto">
                <div className={clsx("relative flex justify-between items-center py-2 sm:px-10 px-5", 
                    darkMode 
                    ? `bg-dark${theme}-secondary`
                    : `bg-${theme}-secondary`)}>
                    <a href="/">
                        <div className="relative w-12 h-12">
                            <SAMIcon />
                        </div>
                    </a>
                    <div className="relative flex items-center justify-between gap-6">
                        <nav className="sm:flex relative hidden">
                            <NavbarItems toggleMenu={toggleMenu}  darkMode={darkMode}/>
                        </nav>
                        <button onClick={toggleMenu} className="focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                            { isOpen ? <CloseIcon /> : <MenuIcon/>}
                        </button>
                        <DarkTheme />
                    </div>
                </div>
                <div className={clsx("absolute left-0 backdrop-blur-sm w-full transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block", isOpen ? 'max-h-screen' : 'max-h-0', darkMode ? `bg-dark${theme}-secondary` : `bg-${theme}-secondary`)}>
                    <nav className="p-3">
                        <NavbarItems toggleMenu={toggleMenu} darkMode={darkMode} />
                    </nav>
                </div>
            </div>
        </header>
    )
}