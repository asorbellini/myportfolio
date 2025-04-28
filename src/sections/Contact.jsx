import clsx from "clsx"
import { useState, useRef, useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { CloseIcon, GitHubIcon, LinkedinIcon } from "../components/Icons.jsx";
import { Tick, Copy } from "../components/Icons.jsx";
import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export const Contact = () => {
    const {theme, darkMode} = useContext(ThemeContext)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({status:null, message:""})
    const [hasCopied, setHasCopied] = useState(false)
    const { register, handleSubmit, setValue, reset, 
        formState:{ errors }
     } = useForm();
    const captchaRef = useRef(null)
    const [captchaToken, setCaptchaToken] = useState(null)
    const onHCaptchaChange = (token) => {
        setCaptchaToken(token)
        setValue("h-captcha-response",token);
      };

    const onSubmit = async (data) => {
        setLoading(true)
        if (!captchaToken) {
            setLoading(false)
            setMessage({status:"error", message:"Por favor, valida el captcha."})
            return
        }
        setLoading(true)
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data, null, 2)
            })
            .then(async (response) => {
                let result = await response.json()
                if (result.success) {
                    setLoading(false)
                    setMessage({status:"success", message: "Su mensaje ha sido enviado correctamente."})
                    reset()
                    captchaRef.current?.resetCaptcha()
                    setCaptchaToken(null)
                } else {
                    setLoading(false)
                    setMessage({status: "error", message:"Algo salió mal, favor de contactarse por otros medios."})
                }
            })
            .catch((error) => {
                setLoading(false)
                setMessage({status: "error", message:"Algo salió mal, favor de contactarse por otros medios."})
                setCaptchaToken(null)
            })
    }

    useEffect(() => {
        if (message.status) {
            const timer = setTimeout(() => {
                setMessage({ status: null, message:""})
            }, 10000);
            return () => clearTimeout(timer);
        } 
    }, [message.status]);

    const handleCopy = () => {
        navigator.clipboard.writeText('ayesorbellini@gmail.com')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 3000)
    }

    return (
        <section className="min-h-screen w-full relative flex flex-col justify-between sm:mb-30" id="contact">
            <div className="flex sm:flex-row flex-col items-center sm:mt-28 my-16 sm:mx-10 mx-5">
                <div className="w-full">
                    <h1 className={clsx("title-section", darkMode ? `text-dark${theme}-terciary` : `text-${theme}-quaternary`)}><strong>Contactame</strong></h1>
                    <div className="w-full flex sm:flex-row flex-col items-start my-2 h-full">
                        <div className="w-full sm:basis-1/3">
                            <h2 className="paragraph">Podes encontrarme en las siguientes redes sociales, dejame un mensaje en el formulario o contactarme vía mail.</h2>
                            <div className="grid grid-cols-2 justify-items-center my-2">
                                <a href="https://github.com/asorbellini">
                                    <GitHubIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/ayel%C3%A9n-sorbellini/">
                                    <LinkedinIcon />
                                </a>
                            </div>
                            <div className="cursor-pointer flex justify-center items-center gap-2 my-2" onClick={handleCopy}>
                                {hasCopied ? <Tick /> : <Copy />}
                                <p className={clsx("lg:text-xl md:text-medium font-base", darkMode ? "text-white" : "text-black")}>ayesorbellini@gmail.com</p>
                            </div>
                        </div>

                        <div className="w-full sm:basis-2/3">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                                <input
                                type="hidden"
                                value="c3a2a264-bd1b-4420-89d9-e0e4101a4eb8"
                                {...register("access_key")}
                                />
                                <div className="sm:my-2 my-1 space-y-1">
                                    <input 
                                    type="text"
                                    {...register("name", {
                                        required: "El campo es obligatorio.",
                                        maxLength: 80,
                                      })}
                                    className={clsx("w-full px-5 py-2 min-h-10 rounded-lg focus:outline-none", 
                                        darkMode
                                        ? errors.name 
                                            ? `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg border-2 border-red-500 focus:border-red-500 ring-red-100` 
                                            : `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg border-2 border-gray-300 focus:border-indigo-600 ring-indigo-100`
                                        :  errors.name 
                                            ? `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg border-2 border-red-600 focus:border-red-600 ring-red-100` 
                                            : `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg border-2 border-gray-300 focus:border-indigo-600 ring-indigo-100`
                                        )}
                                    placeholder="Ingresa tu nombre" />
                                    {errors.name && (
                                        <div className="mt-1 text-red-600">
                                        <small>{errors.name.message}</small>
                                        </div>
                                    )}
                                </div>
                                <div className="sm:my-2 my-1 space-y-1">
                                    <input 
                                    type="email"
                                    {...register("email", {
                                        required: "El campo es obligatorio.",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Favor de ingresar un email válido.",
                                          },
                                        })}
                                    className={clsx("w-full px-5 py-2 min-h-10 rounded-lg focus:outline-none", 
                                        darkMode
                                        ? errors.email 
                                            ? `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg border border-red-500 focus:border-red-500 ring-red-100` 
                                            : `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg border border-gray-300 focus:border-indigo-600 ring-indigo-100`
                                        :  errors.email 
                                            ? `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg border border-red-600 focus:border-red-600 ring-red-100` 
                                            : `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg border border-gray-300 focus:border-indigo-600 ring-indigo-100`
                                        )}                                    
                                    placeholder="Ingresa tu email" />
                                    {errors.email && (
                                    <div className="mt-1 text-red-600">
                                        <small>{errors.email.message}</small>
                                    </div>
                                    )}
                                </div>
                                <div className="sm:my-2 my-1 space-y-1">
                                    <textarea
                                    {...register("message", { required: "El campo es obligatorio."})}
                                    rows={5}
                                    className={clsx("w-full px-5 py-2 min-h-10 rounded-lg focus:outline-none", 
                                        darkMode
                                        ? errors.message 
                                            ? `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg border border-red-500 focus:border-red-500 ring-red-100` 
                                            : `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg border border-gray-300 focus:border-indigo-600 ring-indigo-100`
                                        :  errors.message 
                                            ? `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg border border-red-600 focus:border-red-600 ring-red-100` 
                                            : `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg border border-gray-300 focus:border-indigo-600 ring-indigo-100`
                                        )}
                                    placeholder="Escribí tu mensaje" />
                                    {errors.message && (
                                    <div className="mt-1 text-red-600">
                                        <small>{errors.message.message}</small>
                                    </div>
                                    )}
                                </div>
                                <HCaptcha
                                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                    reCaptchaCompat={false}
                                    onVerify={onHCaptchaChange}
                                    languageOverride={"es"}
                                    size={(width<640) ? "compact" : "normal"}
                                    theme={
                                        darkMode 
                                            ? "dark"
                                            : "light"}
                                    ref={captchaRef}
                                /> 
                                <button className="px-5 py-2 min-h-12 rounded-lg flex justify-center items-center gap-3 transition-all bg-[#4D4D4D] text-lg text-white hover:bg-opacity-50" type="submit" disabled={loading}>
                                    {loading ? 'Enviando mensaje...' : 'Enviar'}
                                </button> 
                            </form>
                            {message.status === "success" && (<div 
                                        className={clsx(`flex items-center p-4 mb-4 rounded-lg`, darkMode ? "bg-gray-800 text-green-400" : "bg-green-50 text-green-800")}
                                    >
                                        <div className="ms-3 text-sm font-medium">
                                            {message.message}
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={() => setMessage({ status: null, message: "" })} 
                                            className={clsx("ms-auto p-1.5 rounded-lg hover:bg-opacity-50", darkMode ? "hover:bg-opacity-50 " : "")}
                                        ><CloseIcon /></button>
                                    </div>
                                )}
                            {message.status === "error" && (<div 
                                        className={clsx("flex items-center p-4 mb-4 rounded-lg", darkMode ? "bg-gray-800 text-red-400" : "bg-red-50 text-red-800")} >
                                        <div className="ms-3 text-sm font-medium">
                                            {message.message}
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={() => setMessage({ status: null, message: "" })} 
                                            className={clsx("ms-auto p-1.5 rounded-lg hover:bg-opacity-50", darkMode ? "hover:bg-opacity-50 " : "")}
                                        ><CloseIcon /></button>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

