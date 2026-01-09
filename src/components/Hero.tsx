import { Code, Database, Brain } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-2">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Jaskaran Singh Saini
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 text-slate-700">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                <span className="text-lg font-medium">Flutter Developer</span>
              </div>
              <span className="text-slate-400">|</span>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                <span className="text-lg font-medium">Frontend Developer</span>
              </div>
              <span className="text-slate-400">|</span>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-green-600" />
                <span className="text-lg font-medium">AI Enthusiast</span>
              </div>
            </div>

            <div className="text-slate-600 text-lg">
              <p className="font-medium">
                Bachelor of Computer Application (2022–2025)
              </p>
            </div>

            <div>
              <p className="text-xl text-slate-700 font-medium">
                Turning ideas into interactive, data-driven solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white hover:bg-slate-50 text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:border-blue-700 transition-all"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-blue-500 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-6xl font-bold text-blue-600">JS</span>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <Code className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
