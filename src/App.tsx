import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <div className="pt-20">
        {/* other sections go here */}
      </div>
    </>
  )
}

export default App