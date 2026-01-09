import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const el = document.querySelector(href) as HTMLElement | null
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* NAME ONLY */}
          <span className="text-xl sm:text-2xl font-bold text-slate-900">
            Jaskaran Singh Saini
          </span>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-slate-700 font-medium hover:text-blue-600 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            >
              <Download size={16} />
              Resume
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-200"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-slate-100 rounded-xl p-4 space-y-4 mb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="block text-slate-700 font-medium hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
