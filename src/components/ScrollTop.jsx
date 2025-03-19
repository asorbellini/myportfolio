import { useState, useEffect, useContext } from "react";
import { ArrowUp } from "./Icons.jsx";
import clsx from "clsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);    
    const {theme, darkMode} = useContext(ThemeContext)
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        window.history.pushState(null, "", window.location.pathname)
    };

    return (
        <button
            onClick={scrollToTop}
            className={clsx("fixed bottom-2 left-2 z-50 sm:w-16 w-10 sm:h-16 h-10 rounded-xl flex items-center justify-center shadow-lg hover:animate-bounce transition-all duration-300", isVisible ? "translate-x-0 opacity-100" : "translate-y-20 opacity-0", 
            darkMode ? `bg-dark${theme}-secondary` : `bg-${theme}-secondary`)}
            aria-label="Volver arriba"
        ><ArrowUp />
        </button>
    );
};

export default ScrollToTop;