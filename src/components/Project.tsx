import { useState } from 'react'
import { Shield, Calendar, ExternalLink, Github, X } from 'lucide-react'

const Projects = () => {
  const [showModal, setShowModal] = useState(false)

  const projects = [
    {
      title: 'NewsShield – Fake News Detection System',
      icon: Shield,
      iconBg: 'bg-blue-600',
      description:
        'A web application that detects fake news using machine learning and real-time web verification.',
      features: [
        'User-friendly interface for news analysis',
        'Machine learning model trained with high accuracy',
        'Real-time fact verification using SERP API',
        'Instant result display with confidence score',
      ],
      technologies: [
        'Python',
        'Flask',
        'Machine Learning',
        'Scikit-Learn',
        'Pandas',
        'Tailwind CSS',
        'SERP API',
      ],
      image: '/project1.png',
      githubLink: 'https://github.com/JaskaranSaini05/News_Shield',
    },
    {
      title: 'Eventify – Event Booking Application',
      icon: Calendar,
      iconBg: 'bg-green-600',
      description:
        'A modern event booking platform where users can explore, book, and manage events easily.',
      features: [
        'Browse upcoming events with details',
        'User authentication and secure booking',
        'Event booking and ticket management',
        'Responsive UI for mobile and web',
        'Admin can add and manage events',
      ],
      technologies: [
        'Flutter',
        'Firebase Authentication',
        'Cloud Firestore',
        'REST API',
        'Provider / State Management',
        'Material UI',
      ],
      image: '/eventify.jpg',
      githubLink: 'https://github.com/JaskaranSaini05/Eventify',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full mb-5"></div>
          <p className="text-lg text-slate-600">
            Real-world projects built using modern technologies
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* CONTENT */}
                  <div
                    className={`p-6 sm:p-8 ${
                      isEven ? 'order-1' : 'order-2'
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`${project.iconBg} w-14 h-14 rounded-xl flex items-center justify-center`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-700 mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-700"
                          >
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </button>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-semibold"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div
                    className={`bg-slate-100 p-6 flex items-center justify-center ${
                      isEven ? 'order-2' : 'order-1'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl max-w-xl w-full p-6 relative shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              🎉 Live Demo Coming Soon!
            </h3>
            <p className="text-slate-700">
              This project is currently under deployment and will be available shortly.
            </p>
            <p className="text-orange-600 font-medium mt-2">
              Stay tuned — the live experience will be worth the wait!
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
