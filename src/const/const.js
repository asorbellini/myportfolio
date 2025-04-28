
import p1Inicio from "../assets/proyectos/blog/1Inicio.png"
import p1Registro from "../assets/proyectos/blog/2Registro.png"
import p1Login from "../assets/proyectos/blog/3Login.png"
import p1FiltradoCategoria from "../assets/proyectos/blog/4Sección por categoria.png"
import p1FiltradoFecha from "../assets/proyectos/blog/5Sección por fecha.png"
import p1FiltradoAutor from "../assets/proyectos/blog/6Sección por autor.png"
import p1FiltradoSinPosteos from "../assets/proyectos/blog/7 Sección sin posteos.png"
import p1Posteos from "../assets/proyectos/blog/8Posteos.png"
import p1InicioUsuarioLogeado from "../assets/proyectos/blog/9Inicio usuario logueado.png"
import p1PerfilUsuario from "../assets/proyectos/blog/10Perfil de usuario.png"
import p1PerfilUsuarioEdicion from "../assets/proyectos/blog/11Perfil de usuario edicion info.png"
import p2Login from "../assets/proyectos/AIBlogTranscription/Login.png"
import p2Registro from "../assets/proyectos/AIBlogTranscription/Registro.png"
import p2Inicio from "../assets/proyectos/AIBlogTranscription/Inicio.png"
import p2LoadigTranscription from "../assets/proyectos/AIBlogTranscription/Transcribiendo.png"
import p2Transcription from "../assets/proyectos/AIBlogTranscription/Blog.png"
import p2SavedPosts from "../assets/proyectos/AIBlogTranscription/SavedBlogs.png"
import p2SavedPost from "../assets/proyectos/AIBlogTranscription/SavedBlog.png"
// FALTA p2LoadingTranscription, p2TrancripciónExitosa, p2SavedBlogs y p2Blog
import p3Home from "../assets/proyectos/ThreeJSPortfolio/Inicio.png"
import p3About from "../assets/proyectos/ThreeJSPortfolio/About.png"
import p3Work from "../assets/proyectos/ThreeJSPortfolio/Work.png"
import p3Contact from "../assets/proyectos/ThreeJSPortfolio/Contact.png"
import p4Proximamente from "../assets/proyectos/UMA/Proximamente.png"

export const themes = ['autumn','winter', 'spring', 'summer']

export const NavItems = [
    {
        id:'home',
        title: 'Inicio',
        href:'#home'
    },
    {
        id:'about',
        title: 'Sobre mi',
        href:'#about'
    },
    {
        id:'skills',
        title: 'Habilidades',
        href:'#skills'
    },
    {
        id:'projects',
        title: 'Proyectos',
        href:'#projects'
    },
    {
        id:'contact',
        title: 'Contacto',
        href:'#contact'
    }
]

export const Proyectos = [
    {
        id: 1,
        title: "Blog de noticias",
        smallDescription:"El presente proyecto fue desarrollado mediante un tutorial de Youtube de Código para Principiantes donde enseñaban a construir un blog de noticias utilizando Django.",
        description: "El proyecto consiste en un Blog de noticias donde los usuarios redactores pueden ingresar distintas noticias dentro del panel del administrador.\n\n La página principal cuenta con una barra de navegación donde se puede seleccionar la categoría de las noticias que se deseen leer y botones de ingreso y registro para usuarios lectores. Las noticias se encuentran ordenados por últimas creadas, y todas las secciones, tanto la principal como los filtros por categorías y por fechas, tiene un selector de cantidad de noticias disponibles por página para comodidad de los usuarios lectores.\n\n Los usuarios habilitados para ser redactores deberán estar registrados y su usuario deberá ser validado por el usuario administrador del sitio para que pueda realizar dicha actividad. Cualquier usuario nuevo que se registre podrá indicar las noticias que le gustan y luego se mostrarán en su perfil junto con la información personal.",
        technologies:["HTML", "Boostrap", "Django"],
        repository:"https://github.com/asorbellini/first-blog",
        urlImages:[{
            id:1,
            name: "Inicio",
            image: p1Inicio,
            description: "imageN°1",
        },
        {
            id:2, 
            name: "Registro",
            image: p1Registro,
            description: "imageN°2",
        },
        {
            id:3, 
            name: "Login",
            image: p1Login,
            description: "imageN°3",
        },
        {
            id:4, 
            name: "Filtrado por categoría",
            image: p1FiltradoCategoria,
            description: "imageN°4",
        },
        {
            id:5, 
            name: "Filtrado por fecha",
            image: p1FiltradoFecha,
            description: "imageN°5",
        },
        {
            id:6, 
            name: "Filtrado por autor",
            image: p1FiltradoAutor,
            description: "imageN°6",
        },
        {
            id:7, 
            name: "Categoria sin posteos",
            image: p1FiltradoSinPosteos,
            description: "imageN°7",
        },
        {
            id:8, 
            name: "Vista de posteos",
            image: p1Posteos,
            description: "imageN°8",
        },
        {
            id:9, 
            name: "Vista inicio usuario logueado",
            image: p1InicioUsuarioLogeado,
            description: "imageN°9",
        },
        {
            id:10, 
            name: "Perfil de usuario",
            image: p1PerfilUsuario,
            description: "imageN°10",
        },
        {
            id:10, 
            name: "Perfil de usuario modo edicion",
            image: p1PerfilUsuarioEdicion,
            description: "imageN°11",
        },
    ]},
    {
        id: 2,
        title: "AI Generador de Blogs",
        smallDescription:"El presente proyecto fue desarrollado mediante un tutorial de Free Code Camp donde enseñaban a implementar inteligencia artificial con el fin de obtener un resumen tipo blog a partir de un link de Youtube. El problema surgió cuando OpenAI decidió rescindir su versión gratuita para usuarios y requería de pagos para su implementación, por lo que se buscaron alternativas a esta y se implementaron en mi código para obtener un resultado similar al esperado.",
        description: "El proyecto consiste en que el usuario pueda ingresar un link de video de Youtube con el fin de obtener un texto resumen del audio brindado. El programa recibe el link, lo transcribe e identifica el lenguaje del idioma original, luego armar un resumen explicativo de la misma. Una vez generado el resumen, se archiva directamente en una sección de blogs guardados donde se incluyen todos los resúmenes solicitados por el usuario. Cabe destacar que los usuarios solo pueden utilizar estos facilitadores de texto solo si se encuentran registrados.",
        technologies:["HTML", "CSS", "JavaScript", "Django", "OpenAI-Whisper"],
        repository:"https://github.com/asorbellini/AI-Transcriptions/",
        urlImages:[{
            id:1,
            name: "Login",
            image: p2Login,
            description: "imageN°1",
        },
        {
            id:2,
            name: "Registro",
            image: p2Registro,
            description: "imageN°2",
        },
        {
            id:3,
            name: "Inicio",
            image: p2Inicio,
            description: "imageN°3",
        },
        {
            id:4,
            name: "LoadingTranscription",
            image: p2LoadigTranscription,
            description: "imageN°4",
        },
        {
            id:5,
            name: "Transcription",
            image: p2Transcription,
            description: "imageN°5",
        },
        {
            id:6,
            name: "SavedBlogs",
            image: p2SavedPosts,
            description: "imageN°6",
        },
        {
            id:7,
            name: "SavedPost",
            image: p2SavedPost,
            description: "imageN°7",
        },


    ]},
    {
        id: 3,
        title: "Three JS Portafolio",
        smallDescription:"El presente proyecto fue desarrollado mediante un tutorial de  Youtube de JavaScript Mastery donde enseñaban a implementar React.js y Three.js con el fin de crear una landing page incluyendo elementos 3D.",
        description: "El presente proyecto fue desarrollado mediante un tutorial de  Youtube de JavaScript Mastery donde enseñaban a implementar React.js y Three.js con el fin de crear una landing page incluyendo elementos 3D. A partir del conocimiento adquirido en el mismo se logró incluir dicha tecnología en el presente portafolio.",
        technologies:["HTML","JavaScript", "TailwindCSS", "React", "ThreeJS"],
        repository:"https://github.com/asorbellini/3D-portfolio-tutorial",
        urlImages:[{
            id:1,
            name: "Inicio",
            image: p3Home,
            description: "imageN°1",
        },{
            id:2,
            name: "About",
            image: p3About,
            description: "imageN°2",
        },{
            id:3,
            name: "Work",
            image: p3Work,
            description: "imageN°3",
        },{
            id:4,
            name: "Contact",
            image: p3Contact,
            description: "imageN°4",
        },
    ]},
    {
        id: 4,
        title: "UMA",
        smallDescription:"El presente proyecto se encuentra en etapa de desarrollo, el mismo consiste en diseñar y desarrollar una web para vender cursos online de prácticas de Yoga, Meditación y bienestar general.",
        description: "El presente proyecto se encuentra en etapa de desarrollo, el mismo consiste en diseñar y desarrollar una web para vender cursos online de prácticas de Yoga, Meditación y bienestar general.",
        technologies:["React"],
        repository:"",
        urlImages:[{
            id:1,
            name: "Proximamente",
            image: p4Proximamente,
            description: "imageN°1",
        },
    ]},
]
