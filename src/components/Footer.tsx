import { Mail, Github, Linkedin, ArrowUpRight, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'

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
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-slate-300 w-full relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute -top-20 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top gradient line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Jaskaran Singh Saini
            </h3>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Building practical and modern digital solutions using Flutter, frontend
              technologies, and problem-solving skills.
            </p>

            {/* Social buttons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="mailto:jaskaransaini375@gmail.com"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition"
              >
                <Mail size={18} className="text-slate-200" />
              </a>

              <a
                href="https://github.com/JaskaranSaini05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition"
              >
                <Github size={18} className="text-slate-200" />
              </a>

              <a
                href="https://www.linkedin.com/in/jaskaran-singh-1507592a7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition"
              >
                <Linkedin size={18} className="text-slate-200" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="group inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Let&apos;s Connect
            </h4>

            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
                    >
                      <span className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-slate-800 transition">
                        <Icon size={18} />
                      </span>
                      <span className="text-sm">{item.text}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-400 text-sm">© 2025 Jaskaran Singh Saini</p>
          <p className="text-slate-400 text-sm">
            Open to opportunities • Internships • Jobs
          </p>
        </div>

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 w-12 h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center text-white transition"
        >
          <ChevronUp size={20} />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
