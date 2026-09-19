import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const Experience = () => {
  const technologies = [
    'Flutter',
    'Dart',
    'React.js',
    'REST APIs',
    'Firebase',
    'MongoDB',
    'Git',
    'Jira',
    'Agile Methodology',
    'Debugging',
  ]

  const bullets = [
    'Contributed to multiple real-world software projects spanning both mobile and web applications, working across the full development cycle from UI to backend integration.',
    'Built Flutter-based user interfaces and developed React.js admin panels, focusing on clean, responsive, and functional design.',
    'Integrated REST APIs and worked with Firebase and MongoDB to enable reliable backend connectivity and data handling.',
    'Played a key role in developing the Gurbani Made Easy application, implementing core frontend features using Flutter.',
    'Collaborated with cross-functional teams using Jira and Agile methodologies, gaining practical experience in sprint planning and task tracking.',
    'Strengthened debugging and problem-solving skills by resolving real production issues and delivering stable, release-ready software.',
    'Gained hands-on exposure to the complete software development lifecycle — an experience that later shaped my transition toward cybersecurity, as understanding how applications are built gave me deeper insight into how they can be secured.',
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50 relative overflow-hidden">
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
            Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full mb-5" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Professional software development experience that laid the foundation for my move into cybersecurity.
          </p>
        </motion.div>

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute -left-10 sm:-left-14 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
            <div className="absolute -left-[52px] sm:-left-[70px] top-7 w-8 h-8 rounded-full bg-blue-600/15 blur-md" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-blue-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                    Software Engineer Intern
                  </h3>
                  <p className="text-base text-slate-600">
                    Auribises Technologies Pvt. Ltd. · Internship
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Ludhiana, Punjab, India · On-site
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap self-start">
                Aug 2025 - Mar 2026 · 8 mos
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <ul className="space-y-4">
              {bullets.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
  
}

export default Experience