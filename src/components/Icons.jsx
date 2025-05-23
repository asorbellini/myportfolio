import clsx from "clsx"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const ArrowDown = ({className}) => {
    const {darkMode} = useContext(ThemeContext)
    return (
        <svg viewBox="0 0 30 30" className={clsx(className, darkMode ? `fill-white` : `fill-black`)}>
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
    const {darkMode} = useContext(ThemeContext)
    return (
        <svg width="30px" height="30px" viewBox="0 0 24 24" strokeWidth="1.5" className={clsx(darkMode ? "stroke-white hover:stroke-[#4d4d4d]" : "stroke-black hover:stroke-[#4d4d4d]")}>
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


export const Tick = () => {
    const {darkMode} = useContext(ThemeContext)
    return(
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none">
            <path className={clsx(darkMode ? `fill-green-400` : `fill-green-800`)} fillRule="evenodd" clipRule="evenodd" d="M22.8402 2.49999L22.0446 3.29548L8.85534 16.4848C7.83023 17.5099 6.16817 17.5099 5.14304 16.4848L0.953698 12.2955L0.158203 11.5L1.7492 9.909L2.54469 10.7045L6.73403 14.8939C6.88047 15.0403 7.11791 15.0403 7.26435 14.8939L20.4537 1.70449L21.2492 0.908997L22.8402 2.49999Z"/>
        </svg>

    )
}

export const Copy = () => {
    const {darkMode} = useContext(ThemeContext)
    return(
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path className={clsx("cursor-copy", darkMode ? `fill-white` : `fill-black`)} d="M27 4.5H11C10.7348 4.5 10.4804 4.60536 10.2929 4.79289C10.1054 4.98043 10 5.23478 10 5.5V10.5H5C4.73478 10.5 4.48043 10.6054 4.29289 10.7929C4.10536 10.9804 4 11.2348 4 11.5V27.5C4 27.7652 4.10536 28.0196 4.29289 28.2071C4.48043 28.3946 4.73478 28.5 5 28.5H21C21.2652 28.5 21.5196 28.3946 21.7071 28.2071C21.8946 28.0196 22 27.7652 22 27.5V22.5H27C27.2652 22.5 27.5196 22.3946 27.7071 22.2071C27.8946 22.0196 28 21.7652 28 21.5V5.5C28 5.23478 27.8946 4.98043 27.7071 4.79289C27.5196 4.60536 27.2652 4.5 27 4.5ZM20 26.5H6V12.5H20V26.5ZM26 20.5H22V11.5C22 11.2348 21.8946 10.9804 21.7071 10.7929C21.5196 10.6054 21.2652 10.5 21 10.5H12V6.5H26V20.5Z" />
        </svg>

    )
}

export const CV = () => {
    const {darkMode} = useContext(ThemeContext)
    return(
        <svg viewBox="0 0 96 96" className={clsx("w-10 h-10", darkMode ? "stroke-white" : "stroke-black")}>
            <g id="icon">
                <path d="M63.91,86.14H10.68A4.67,4.67,0,0,1,6,81.47V10.53a4.66,4.66,0,0,1,4.66-4.66H63.91a4.67,4.67,0,0,1,4.67,4.66V21.07a.75.75,0,1,1-1.5,0V10.53a3.17,3.17,0,0,0-3.17-3.16H10.68a3.17,3.17,0,0,0-3.16,3.16V81.47a3.17,3.17,0,0,0,3.16,3.17H63.91a3.17,3.17,0,0,0,3.17-3.17V60.16a.75.75,0,0,1,1.5,0V81.47A4.68,4.68,0,0,1,63.91,86.14Z"/>
                <path d="M67.83,50.81a.74.74,0,0,1-.75-.75V37a.75.75,0,0,1,1.5,0V50.06A.75.75,0,0,1,67.83,50.81Z"/>
                <path d="M37.3,42.12a23.24,23.24,0,0,1-7.76-1.18c-3.22-1.18-3.9-2.87-3.9-4.08a11.73,11.73,0,0,1,5.79-10.08.75.75,0,0,1,.75,1.3,10.21,10.21,0,0,0-5,8.78c0,2.14,4.37,3.76,10.16,3.76S47.45,39,47.45,36.86a10.19,10.19,0,0,0-5-8.77.75.75,0,0,1-.27-1,.74.74,0,0,1,1-.27A11.68,11.68,0,0,1,49,36.86C49,40.49,43.1,42.12,37.3,42.12Z"/>
                <path d="M20.59,53.53H18.26a.75.75,0,0,1,0-1.5h2.33a.75.75,0,1,1,0,1.5Z"/>
                <path d="M20.59,61.82H18.26a.75.75,0,1,1,0-1.5h2.33a.75.75,0,0,1,0,1.5Z"/>
                <path d="M20.59,70.11H18.26a.75.75,0,0,1,0-1.5h2.33a.75.75,0,1,1,0,1.5Z"/>
                <path d="M56.33,53.53H26.9a.75.75,0,0,1,0-1.5H56.33a.75.75,0,0,1,0,1.5Z"/>
                <path d="M46.21,61.82H26.9a.75.75,0,0,1,0-1.5H46.21a.75.75,0,0,1,0,1.5Z"/>
                <path d="M53.58,70.11H26.9a.75.75,0,1,1,0-1.5H53.58a.75.75,0,0,1,0,1.5Z"/>
                <path d="M67.82,37.76a8.72,8.72,0,1,1,8.73-8.71A8.72,8.72,0,0,1,67.82,37.76Zm0-15.94a7.22,7.22,0,1,0,7.23,7.23A7.22,7.22,0,0,0,67.82,21.82Z"/>
                <path d="M66.74,31.84a.73.73,0,0,1-.51-.21l-2-1.86a.75.75,0,1,1,1-1.09L66.73,30l3.62-3.58a.75.75,0,1,1,1.05,1.07l-4.13,4.09A.75.75,0,0,1,66.74,31.84Z"/>
                <path d="M58.86,90.13H10.15a7.9,7.9,0,0,1-7.9-7.9V15.4A4.35,4.35,0,0,1,6.6,11.05h.17a.75.75,0,0,1,0,1.5H6.6A2.86,2.86,0,0,0,3.75,15.4V82.23a6.41,6.41,0,0,0,6.4,6.4H58.86a2.86,2.86,0,0,0,2.85-2.85v-.39a.75.75,0,0,1,1.5,0v.39A4.35,4.35,0,0,1,58.86,90.13Z"/>
                <path d="M37.3,32.07c-4.27,0-7.7-5.25-7.7-9.6a7.7,7.7,0,0,1,15.4,0C45,26.82,41.56,32.07,37.3,32.07Zm0-15.8a6.21,6.21,0,0,0-6.2,6.2c0,3.57,2.92,8.1,6.2,8.1s6.2-4.53,6.2-8.1A6.21,6.21,0,0,0,37.3,16.27Z"/>
                <path d="M53.58,70.11a.71.71,0,0,1-.53-.22.73.73,0,0,1-.18-.78l2.71-7.76a.84.84,0,0,1,.18-.28L86.37,30.46a4.32,4.32,0,1,1,6.11,6.11L61.87,67.18a.84.84,0,0,1-.28.18l-7.77,2.71A.67.67,0,0,1,53.58,70.11ZM56.94,62,54.8,68.14,60.93,66,91.42,35.51a2.82,2.82,0,1,0-4-4Zm4.4,4.64h0Z"/>
                <path d="M61.34,67.4a.74.74,0,0,1-.53-.22l-5.05-5.05a.74.74,0,0,1,0-1.06.75.75,0,0,1,1.06,0l5,5.05a.75.75,0,0,1,0,1.06A.74.74,0,0,1,61.34,67.4Z"/>
                <path d="M88.73,40a.71.71,0,0,1-.53-.22l-5-5a.74.74,0,0,1,0-1.06.75.75,0,0,1,1.06,0l5.05,5a.75.75,0,0,1,0,1.06A.74.74,0,0,1,88.73,40Z"/>
            </g>
        </svg>
    )
}