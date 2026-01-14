import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const Experience = () => {
  const technologies = [
    'Flutter',
    'Dart',
    'Firebase',
    'Firestore',
    'Cloud Storage',
    'REST APIs',
    'React',
    'TypeScript',
    'Git/GitHub',
  ]

  const bullets = [
    'Assisted in developing and maintaining Flutter applications by implementing clean UI screens and reusable components following Material Design principles.',
    'Collaborated with the development team to debug issues, improve user experience, and ensure smooth navigation across multiple app modules.',
    'Integrated Firebase Authentication and Firestore to support secure login, real-time data handling, and efficient record management.',
    'Worked with REST APIs to fetch and display dynamic data, validating responses and handling edge cases such as empty states and network errors.',
    'Used Git/GitHub for version control and followed team workflow practices to track changes and support structured development.',
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-16 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
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
            A timeline of my professional journey and real-world development experience.
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative pl-8 sm:pl-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-10 sm:-left-14 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
            <div className="absolute -left-[52px] sm:-left-[70px] top-7 w-8 h-8 rounded-full bg-blue-600/15 blur-md" />

            {/* Top content */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-blue-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                    Flutter Developer Intern
                  </h3>
                  <p className="text-base text-slate-600">
                    Auribises Technologies Pvt. Ltd.
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Ludhiana, Punjab</p>
                </div>
              </div>

              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap self-start">
                August 2025 - Present
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Technologies
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

            {/* Bullet points */}
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
