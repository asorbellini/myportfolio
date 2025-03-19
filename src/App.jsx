
import { Navbar } from './sections/Navbar.jsx'
import { Footer } from './sections/Footer.jsx'
import { About } from './sections/About.jsx'
import { Skills } from './sections/Skills.jsx'
import {Projects } from './sections/Projects.jsx'
import { Contact } from './sections/Contact.jsx'
import { ThemeSwitcher } from './components/ThemeSwitcher.jsx'
import { Hi } from './sections/Hi.jsx'
import ScrollToTop from './components/ScrollTop.jsx'
import { LanguageSelect } from './components/LanguageSelect.jsx'

function App() {

  return (
    <main>
      <LanguageSelect />
      <ThemeSwitcher />
      <ScrollToTop />
      <Navbar />
      <Hi />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
