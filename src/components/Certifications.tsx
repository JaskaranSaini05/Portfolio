import { useEffect, useState } from 'react'
import { Award, ExternalLink, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Certification = {
  title: string
  organization: string
  year: string
  image: string
  certificateLink: string
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: 'Agentic AI With Python',
      organization: 'Auribises Technologies Pvt Ltd',
      year: '2025',
      image: '/certificates/auribises.png',
      certificateLink: '/certificates/auribises.pdf',
    },
    {
      title: 'Introduction to Frontend Development',
      organization: 'Simplilearn SkillUp',
      year: '2025',
      image: '/certificates/image1.png',
      certificateLink: '/certificates/introtofrontend.pdf',
    },
    {
      title: 'Certificate Course in Basic Computing',
      organization: 'Gujranwala Guru Nanak Khalsa College',
      year: '2023',
      image: '/certificates/image.png',
      certificateLink: '/certificates/basicincomputingcourse.pdf',
    },
    {
      title: 'Software Testing Certification',
      organization: 'Simplilearn',
      year: '2025',
      image: '/certificates/software-testing.png',
      certificateLink: '/certificates/software-testing-simplilearn.pdf',
    },
    {
      title: 'Project Management',
      organization: 'Simplilearn',
      year: '2025',
      image: '/certificates/project-management-simplilearn.png',
      certificateLink: '/certificates/project-management-simplilearn.pdf',
    },
    {
      title: 'Search Engine Optimization (SEO)',
      organization: 'Simplilearn',
      year: '2025',
      image: '/certificates/seo-simplilearn.png',
      certificateLink: '/certificates/seo-simplilearn.pdf',
    },
  ]

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="certifications" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-16 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full mb-5" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Professional certifications and achievements that validate my skills and learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                className="relative bg-slate-100 p-4 cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-xl"
                  whileHover={{ scale: 1.03 }}
                />

                <div className="absolute inset-0 p-4">
                  <div className="h-full w-full rounded-xl bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-lg bg-white/90 text-sm font-semibold shadow">
                      Click to Preview
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{cert.organization}</p>
                    <p className="text-slate-500 text-sm mt-1">{cert.year}</p>
                  </div>
                </div>

                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl max-w-3xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-white shadow"
              >
                <X size={18} />
              </button>

              <div className="bg-slate-100 p-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[70vh] object-contain rounded-xl"
                />
              </div>

              <div className="p-5 border-t">
                <h3 className="font-bold">{selectedCert.title}</h3>
                <p className="text-sm text-slate-600">
                  {selectedCert.organization} • {selectedCert.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications
