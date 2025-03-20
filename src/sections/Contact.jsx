import clsx from "clsx"
import { useState, useRef, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import emailjs from "@emailjs/browser"
import { GitHubIcon, LinkedinIcon } from "../components/Icons.jsx";

export const Contact = () => {

    emailjs.init({
        publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY,
        // Do not allow headless browsers
        blockHeadless: true,
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      });

    const {theme, darkMode} = useContext(ThemeContext)
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email:"",
        message:"",
    })
/*     let [alerta, setAlerta] = useState({}) */
    const handleChange = ({target: {name, value}}) => {
        setForm({... form, [name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, /* emailjs service id */
                import.meta.env.VITE_EMAILJS_TEMPLATEID, /* emailjs template */
                {
                    from_name:form.name,
                    to_name:'S.A.M.',
                    from_email: form.email,
                    to_email: 'ayesorbellini@gmail.com',
                    message: form.message
                },
                import.meta.env.VITE_EMAILJS_PUBLICKEY, /* emailjs publickey account */
            )
            .then((response) => {
                setLoading(false)
                /* setAlerta({status: response.status, message: "Su mensaje ha sido enviado."}) */
                setForm({
                    name: "",
                    email:"",
                    message:"",
                })
            })
        } catch (error) {
            setLoading(false)
            /* setAlerta({status : error.status, message: "Ha ocurrido un error, vuelva a intentarlo."}) */
        }
    }
        return (
            <section className="h-screen w-full relative flex flex-col justify-between" id="contact">
                <div className="flex sm:flex-row flex-col items-center sm:mt-40 mt-20 sm:mx-10 mx-5">
                    <div className="w-full">
                        <h1 className="title-section"><strong>Contactame</strong></h1>
                        <div className="w-full flex sm:flex-row flex-col items-start mt-2 h-full">
                            <div className="w-full sm:basis-1/3">
                                <h2 className="paragraph">Podes encontrarme en las siguientes redes o dejame un mensaje.</h2>
                                <div className="grid grid-cols-2 justify-items-center my-2">
                                    <a href="https://github.com/asorbellini">
                                        <GitHubIcon />
                                    </a>
                                    <a href="https://www.linkedin.com/in/ayel%C3%A9n-sorbellini/">
                                        <LinkedinIcon />
                                    </a>
                                </div>
                            </div>
                            <div className="w-full sm:basis-2/3">
                                <div className="">
                                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
                                        <label className="sm:my-2 my-1 space-y-1">
                                            <input 
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className={clsx("w-full px-5 py-2 min-h-14 rounded-lg focus:outline-none", darkMode ? `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg` : `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg`)}
                                            placeholder="Tu nombre" />
                                        </label>
                                        <label className="sm:my-2 my-1 space-y-1">
                                            <input 
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className={clsx("w-full px-5 py-2 min-h-14 rounded-lg focus:outline-none", darkMode ? `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg` : `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg`)}
                                            placeholder="Tu email" />
                                        </label>
                                        <label className="sm:my-2 my-1 space-y-1">
                                            <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className={clsx("w-full px-5 py-2 min-h-14 rounded-lg focus:outline-none", darkMode ? `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg` : `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg `)}
                                            placeholder="Tu mensaje" />
                                        </label>
                                        <button className={clsx("px-5 py-2 min-h-12 rounded-lg flex justify-center items-center gap-3", darkMode ? "bg-[#B3B3B3] text-lg text-black" : "bg-black text-lg text-white")} type="submit" disabled={loading}>
                                            {loading ? 'Enviando mensaje...' : 'Enviar'}
                                        </button>
                                    </form>
                                {/* {   
                                alerta.length === 0 
                                ?   <div className="hidden"></div> 
                                :   (alerta.length > 0 && alerta.status === 200
                                    ?   <div className={clsx("flex flex-col gap-2 p-4 text-sm border-green-500 runded z-50", darkMode ? "bg-green-200 text-green-800" :  "bg-green-100 text-green-700" )} >
                                            <p>{alerta.message}</p>
                                        </div>
                                    :   <div className={clsx("flex flex-col gap-2 p-4 text-sm border-red-500 rounded z-50", darkMode ? "bg-red-200 text-red-800" :  "bg-red-100 text-red-700" )} >
                                            <p>{alerta.message}</p>
                                        </div>)
                                }*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

