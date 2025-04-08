import { useContext } from "react"
import {LoveIcon} from "../components/Icons.jsx"
import { ThemeContext } from "../context/ThemeContext.jsx"
import clsx from "clsx"

export const Footer = () => {
    const {theme, darkMode} = useContext(ThemeContext)
    return(
        <footer className={clsx("relative bottom-0 w-full flex flex-col sm:flex-row justify-around sm:px-10 px-5 sm:py-6 gap-5 text-center", darkMode ? `bg-dark${theme}-quaternary` : `bg-${theme}-quaternary`)}>
            <div className="flex flex-col sm:flex-row items-center justify-center basis-1/2 gap-2 mx-10 sm:mx-0">
                <p className="text-sm">Diseñado y desarrollado con amor por S.A.M.</p>
                <LoveIcon width="20px" height="20px" />
            </div>
        </footer>
    )

}
