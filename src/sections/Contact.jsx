import clsx from "clsx"
import { useState, useRef, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { GitHubIcon, LinkedinIcon } from "../components/Icons.jsx";

export const Contact = () => {
    const {theme, darkMode} = useContext(ThemeContext)
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email:"",
        message:"",
    })
    const [result, setResult] = useState("");
    const handleChange = ({target: {name, value}}) => {
        setForm({... form, [name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c3a2a264-bd1b-4420-89d9-e0e4101a4eb8");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            setLoading(false)
            setResult("Form Submitted Successfully");
            setForm({
                name: "",
                email:"",
                message:"",
            })
            event.target.reset();
        } else {
            setLoading(false)
            console.log("Error", data);
            setResult(data.message);
        }
    };
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
                                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
                                    <div className="sm:my-2 my-1 space-y-1">
                                        <input 
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className={clsx("w-full px-5 py-2 min-h-10 rounded-lg focus:outline-none", darkMode ? `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg` : `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg`)}
                                        placeholder="Ingresa tu nombre" />
                                    </div>
                                    <div className="sm:my-2 my-1 space-y-1">
                                        <input 
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className={clsx("w-full px-5 py-2 min-h-10 rounded-lg focus:outline-none", darkMode ? `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg` : `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg`)}
                                        placeholder="Ingresa tu email" />
                                    </div>
                                    <div className="sm:my-2 my-1 space-y-1">
                                        <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className={clsx("w-full px-5 py-2 min-h-10 rounded-lg focus:outline-none", darkMode ? `bg-[#1E1E1E] placeholder:text-[#B3B3B3] text-lg text-white shadow-dark${theme}-terciary shadow-lg` : `bg-white placeholder:text-[#4D4D4D] text-lg text-black  shadow-${theme}-quaternary shadow-lg `)}
                                        placeholder="Escribí tu mensaje" />
                                    </div>
                                    <button className={clsx("px-5 py-2 min-h-12 rounded-lg flex justify-center items-center gap-3 transition-all", darkMode ? `bg-[#4D4D4D] text-lg text-white hover:bg-[#B3B3B3]` : `bg-[#4D4D4D] text-lg text-white hover:bg-[#B3B3B3]`)} type="submit" disabled={loading}>
                                        {loading ? 'Enviando mensaje...' : 'Enviar'}
                                    </button> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

