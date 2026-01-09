import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certifications from './components/Certifications'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Skills/>
      <Projects/>
      <Certifications/>
      <Contact/>
      <Footer/>
      
      <div className="pt-20">
        {/* other sections go here */}
      </div>
    </>
  )
}

export default App