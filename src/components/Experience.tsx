import { Briefcase } from 'lucide-react'

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full mb-5"></div>
          <p className="text-lg text-slate-600">
            A timeline of my professional journey
          </p>
        </div>

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></div>

          <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="absolute -left-10 sm:-left-14 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-1">
                    Flutter Developer Intern
                  </h3>
                  <p className="text-base text-slate-600">
                    Auribises Technologies Pvt. Ltd.
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    Ludhiana, Punjab
                  </p>
                </div>
              </div>
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap self-start">
                August 2025 - Present
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Flutter',
                  'Dart',
                  'Firebase',
                  'Cloud Storage',
                  'REST APIs',
                  'React',
                  'TypeScript',
                  'Payment Integration',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <ul className="space-y-4">
              {[
                'Collaborated with cross-functional teams to design and develop scalable Flutter mobile applications, improving overall app performance by implementing efficient state management solutions.',
                'Built reusable, modular UI components following Flutter best practices and Material Design guidelines, enhancing code maintainability and reducing development time by 30%.',
                'Integrated Firebase Authentication, Firestore database, and Cloud Storage to enable secure user authentication, real-time data synchronization, and efficient media management.',
                'Implemented RESTful API integration and payment gateway solutions to facilitate seamless user transactions.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience