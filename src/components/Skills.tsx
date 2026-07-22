import {
  Code2,
  Layers,
  Database,
  Wrench,
  Palette,
  Brain,
  CheckCircle,
  Briefcase,
  TrendingUp,
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
      title: 'Design & UI/UX',
      icon: Palette,
      color: 'bg-pink-500',
      items: ['Figma', 'Canva', 'Responsive Design', 'Wireframing'],
    },
    {
      title: 'Testing & QA',
      icon: CheckCircle,
      color: 'bg-teal-500',
      items: [
        'Manual Testing',
        'Functional Testing',
        'Smoke Testing',
        'Sanity Testing',
        'Regression Testing',
        'UI Testing',
        'Bug Tracking (Jira)',
        'Test Case Writing',
      ],
    },
    {
      title: 'Product Management',
      icon: Briefcase,
      color: 'bg-yellow-500',
      items: [
        'PRD Documentation',
        'User Personas',
        'User Stories',
        'MVP Definition',
        'Wireframing',
        'Success Metrics (KPIs)',
        'Feature Prioritization (Basics)',
      ],
    },
    {
      title: 'SEO & Growth (Basics)',
      icon: TrendingUp,
      color: 'bg-red-500',
      items: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO (Basics)',
        'Content Optimization',
        'Google Search Console (Basics)',
      ],
    },
    {
      title: 'Other',
      icon: Brain,
      color: 'bg-orange-500',
      items: [
        'Machine Learning',
        'REST APIs',
        'Agentic AI',
        'ChatGPT',
        'Cursor AI Tools',
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
            Technologies, tools, and skills I use to build, test, and manage products
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
