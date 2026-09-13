import { useState, useEffect } from 'react'
import type { MouseEvent } from 'react'
import { Menu, X, Download, Linkedin, Github, Mail } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const socials = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jaskaran-singh-saini-924515423/',
      label: 'LinkedIn',
      hover: 'hover:text-blue-600',
    },
    {
      icon: Github,
      href: 'https://github.com/JaskaranSaini05',
      label: 'GitHub',
      hover: 'hover:text-gray-900',
    },
    {
      icon: Mail,
      href: 'mailto:your.email@example.com',
      label: 'Email',
      hover: 'hover:text-red-600',
    },
  ]

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const el = document.querySelector(href)

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-50/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-slate-50 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <a
              href="#top"
              onClick={(e) => handleClick(e, '#top')}
              className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight hover:text-blue-600 transition-colors"
            >
              Jaskaran Singh Saini
            </a>

            <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-slate-300">
              {socials.map(({ icon: Icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-slate-600 ${hover} transition-all duration-200 hover:scale-110`}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="relative text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                           after:bg-blue-600 after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm 
                         font-semibold rounded-lg shadow-sm transition-all duration-200 
                         hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5"
            >
              <Download size={16} />
              Resume
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-200 transition-colors"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-slate-100 rounded-xl p-4 space-y-4 mb-4 border border-slate-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="block text-slate-700 font-medium transition-colors hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center justify-center gap-6 pt-2 border-t border-slate-200">
              {socials.map(({ icon: Icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-slate-600 ${hover} transition-all duration-200 hover:scale-110 pt-2`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 
                         bg-blue-600 text-white font-semibold rounded-lg 
                         transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
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