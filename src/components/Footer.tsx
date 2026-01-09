import { Mail, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'jaskaransaini375@gmail.com',
      href: 'mailto:jaskaransaini375@gmail.com',
    },
    {
      icon: Github,
      text: 'github.com/JaskaranSaini05',
      href: 'https://github.com/JaskaranSaini05',
    },
    {
      icon: Linkedin,
      text: 'linkedin.com/in/jaskaran-singh',
      href: 'https://www.linkedin.com/in/jaskaran-singh-1507592a7',
    },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href) as HTMLElement | null
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Jaskaran Singh Saini
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Building intelligent systems that create real-world impact through
              innovative technology and thoughtful design.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-slate-400 hover:text-blue-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
                    >
                      <IconComponent size={18} />
                      <span className="text-sm">{item.text}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 Jaskaran Singh Saini
          </p>
          <p className="text-slate-400 text-sm">
            Open to opportunities • Internships • Jobs
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer