import { ShieldCheck, Lock, Terminal } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600">Jaskaran</span>{' '}
              <span className="text-blue-600">Singh Saini</span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-slate-700 font-medium mb-6">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-600" />
                Aspiring Cybersecurity Professional
              </span>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-2">
                <Lock size={18} className="text-blue-600" />
                Security-Minded Developer
              </span>
            </div>

            <p className="text-slate-600 mb-6">
              Bachelor of Computer Application (2022–2025)
            </p>

            <p className="text-xl text-slate-800 font-medium mb-10">
              Defending systems, breaking down threats, and building software with security at its core.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-sm
                           transition-all duration-200 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-7 py-3.5 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200
                           transition-all duration-200 hover:bg-blue-50 hover:-translate-y-0.5"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* soft ambient glow behind the photo instead of a hard ring */}
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-200/40 via-transparent to-blue-200/30 rounded-full blur-2xl" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-br from-emerald-200 to-white shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Jaskaran Singh Saini"
                  className="w-full h-full object-cover rounded-full ring-1 ring-black/5"
                />
              </div>

              {/* Floating badges themed to cybersecurity */}
              <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-emerald-500 shadow-lg flex items-center justify-center">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full bg-blue-500 shadow-lg flex items-center justify-center">
                <Lock size={24} className="text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800 shadow-lg items-center justify-center hidden sm:flex">
                <Terminal size={20} className="text-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero