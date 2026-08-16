import {
  Code2,
  Layers,
  Database,
  Wrench,
  ShieldCheck,
} from 'lucide-react'

const Skills = () => {
  const skillsData = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'bg-blue-500',
      items: ['C', 'C++', 'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'TypeScript', 'Dart'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      color: 'bg-green-500',
      items: [
        'React.js',
        'Next.js',
        'Express.js',
        'Flask',
        'FastAPI',
        'Node.js',
        'Flutter',
        'Tailwind CSS',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Scikit-Learn',
        'Streamlit',
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'bg-indigo-500',
      items: ['MySQL', 'MongoDB', 'Firebase Firestore'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'bg-purple-500',
      items: ['Git', 'GitHub', 'Postman', 'AWS (Basics)', 'Firebase', 'Render', 'Vercel'],
    },
    {
      title: 'Cybersecurity',
      icon: ShieldCheck,
      color: 'bg-rose-500',
      items: [
        'Kali Linux',
        'Nmap',
        'Wireshark',
        'Burp Suite',
        'OWASP Top 10',
        'Network Security (Basics)',
        'Cryptography (Basics)',
        'Linux / CLI',
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full mb-5"></div>
          <p className="text-lg text-slate-600">
            Technologies, tools, and skills I use to build, secure, and manage products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`${category.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <span
                        className={`w-2 h-2 ${category.color} rounded-full flex-shrink-0`}
                      ></span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills