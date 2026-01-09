import { Code2, Layers, Database, Wrench, Palette, Brain } from 'lucide-react'

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
        'Numpy',
        'MatplotLib',
        'Flask',
        'Tailwind CSS',
        'Node.js',
        'Flutter',
        'Pandas',
        'Streamlit',
        'FastAPI',
        'Scikit-Learn',
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'bg-indigo-500',
      items: ['MySQL', 'MongoDB', 'Firebase'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'bg-purple-500',
      items: ['AWS', 'Firebase', 'Git', 'GitHub', 'Render', 'Vercel', 'Postman'],
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      color: 'bg-pink-500',
      items: ['Figma', 'Canva', 'Responsive Web Design'],
    },
    {
      title: 'Other',
      icon: Brain,
      color: 'bg-orange-500',
      items: ['Machine Learning', 'REST APIs', 'ChatGPT', 'Agentic AI', 'Cursor AI Tools'],
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
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${category.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <span className={`w-2 h-2 ${category.color} rounded-full flex-shrink-0`}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills