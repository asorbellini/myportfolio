import clsx from "clsx"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const ArrowDown = () => {
    const {theme, darkMode} = useContext(ThemeContext)
    return (
        <svg width="30px" height="30px" viewBox="0 0 30 30" className={clsx(darkMode ? `fill-white` : `fill-${theme}-secondary`)}>
            <path d="M 15 4 L 15 24.0625 L 8.21875 17.28125 L 6.78125 18.71875 L 15.28125 27.21875 L 16 27.90625 L 16.71875 27.21875 L 25.21875 18.71875 L 23.78125 17.28125 L 17 24.0625 L 17 4 Z"/>
        </svg>
            
    )
}

export const ArrowUp = () => {
    return (
        <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48"/>
            <path d="M13 30L25 18L37 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const CloseIcon = () => {
    return (
        <svg width="30px" height="30px" viewBox="0 0 24 24" strokeWidth="1.5" className="stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )
}



export const MenuIcon = () => {
    return (
        <svg width="30px" height="30px" viewBox="0 0 24 24">
            <g id="Page-1" stroke="none">
                <g id="Menu" >
                    <line x1="5" y1="7" x2="19" y2="7" id="Path" strokeWidth="2" strokeLinecap="round" className="stroke-white"> </line>
                    <line x1="5" y1="17" x2="19" y2="17" id="Path" strokeWidth="2" strokeLinecap="round" className="stroke-white"></line>
                    <line x1="5" y1="12" x2="19" y2="12" id="Path" strokeWidth="2" strokeLinecap="round" className="stroke-white"></line>
                </g>
            </g>
        </svg>
    )
}


export const LoveIcon = ({width, height}) => {
    const {theme, darkMode} = useContext(ThemeContext)
    return (
            <svg width={width} height={height} viewBox="0 0 1000 1000"  enableBackground="new 0 0 1000 1000" className={clsx(darkMode ? "fill-white" : `fill-black`)}>
                <g>
                    <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                        <path d="M2272.8,4311.4c-903.4-148.4-1645.6-724.3-1986-1543.3C148.6,2432.8,100,2182,100,1787.9c0-401.8,48.6-657.7,194.5-1005.8c179.2-432.5,222.7-478.6,2508.1-2761.5c1676.3-1676.3,2147.2-2131.9,2195.9-2131.9s514.4,450.4,2170.3,2106.3C8328.1-848.2,9333.9,173,9403,265.1c176.6,232.9,343,581,422.3,883c94.7,353.2,99.8,885.5,12.8,1220.8c-227.8,888.1-824.1,1543.3-1661,1827.3c-921.3,314.8-1950.2,69.1-2638.6-629.6c-133.1-133.1-455.6-578.4-527.2-726.8c-7.7-20.5-17.9-20.5-28.1,2.6c-66.5,140.8-401.8,601.4-534.9,734.5c-325,322.5-765.2,575.8-1190.1,680.8C3017.6,4316.5,2487.8,4344.6,2272.8,4311.4z"/>
                    </g>
                </g>
            </svg>
    )
}


export const MoonIcon = () => {
    return(
        <svg width="24px" height="24px" viewBox="0 0 48 48">
        <g data-name="Layer 2">
            <g data-name="Q3 icons" fill="white">
                <path d="M24.2,5h-.1a19.2,19.2,0,0,0-17,21.1A19.2,19.2,0,0,0,24.2,42.9h2.1a19.2,19.2,0,0,0,14.4-6.4A.9.9,0,0,0,40,35H38.1c-8.8-.5-16.6-8.4-16.9-17.1A17.4,17.4,0,0,1,25,6.6,1,1,0,0,0,24.2,5Z"/>
            </g>
        </g>
        </svg>
    )
}

export const SunIcon = () => {
    return ( 
        <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
            <path d="M22 12L23 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2V1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 23V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 20L19 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 4L19 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20L5 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 4L5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 12L2 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}


export const GitHubIcon = () => {
    const {darkMode} = useContext(ThemeContext)
    return (
        <svg width="30px" height="30px" viewBox="0 0 16 16" >
            <rect width="16" height="16" id="icon-bound" fill="none"/>
            <path className={clsx(darkMode ? `fill-white` : `fill-black`)} fillRule="evenodd" clipRule="evenodd" d="M7.999,0C3.582,0,0,3.582,0,8c0,3.534,2.292,6.533,5.471,7.591 c0.4,0.073,0.546-0.174,0.546-0.386c0-0.19-0.007-0.693-0.011-1.361c-2.225,0.483-2.695-1.072-2.695-1.072 c-0.364-0.924-0.888-1.17-0.888-1.17c-0.726-0.496,0.055-0.486,0.055-0.486c0.803,0.057,1.225,0.824,1.225,0.824 c0.714,1.223,1.872,0.87,2.328,0.665c0.073-0.517,0.279-0.87,0.508-1.069c-1.776-0.202-3.644-0.888-3.644-3.954 c0-0.873,0.312-1.587,0.823-2.147C3.637,5.233,3.362,4.419,3.798,3.318c0,0,0.672-0.215,2.2,0.82C6.636,3.961,7.32,3.872,8,3.869 c0.679,0.003,1.364,0.092,2.003,0.269c1.527-1.035,2.198-0.82,2.198-0.82c0.436,1.101,0.162,1.915,0.08,2.117 c0.513,0.559,0.822,1.273,0.822,2.147c0,3.073-1.87,3.75-3.653,3.948c0.287,0.247,0.543,0.735,0.543,1.481 c0,1.069-0.01,1.932-0.01,2.195c0,0.214,0.144,0.463,0.55,0.385C13.71,14.53,16,11.534,16,8C16,3.582,12.418,0,7.999,0z"/>
        </svg>
    )
}

export const LinkedinIcon = () => {
    const {darkMode} = useContext(ThemeContext)
    return (
        <svg width="30px" height="30px" viewBox="0 0 24 24" className={clsx(darkMode ? `fill-white` : `fill-black`)} >
            <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM8.078,18.737H5.085v-9H8.078ZM6.582,8.5h-.02A1.56,1.56,0,1,1,6.6,5.393,1.56,1.56,0,1,1,6.582,8.5ZM18.87,18.737H15.877V13.921c0-1.211-.433-2.036-1.516-2.036a1.637,1.637,0,0,0-1.535,1.094,2.032,2.032,0,0,0-.1.731v5.027H9.734s.04-8.16,0-9h2.992V11.01a2.97,2.97,0,0,1,2.7-1.488c1.969,0,3.446,1.287,3.446,4.053Z"/>
        </svg>
    )
}