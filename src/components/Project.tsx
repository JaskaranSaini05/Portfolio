import { useState } from 'react'
import { Shield, MapPin, ExternalLink, Github, X } from 'lucide-react'

const Projects = () => {
  const [showModal, setShowModal] = useState(false)

  const projects = [
    {
      title: 'NewsShield – Fake News Detection System',
      icon: Shield,
      iconBg: 'bg-blue-600',
      useImageIcon: false,
      description:
        'An intelligent web application leveraging machine learning algorithms and real-time verification to identify and flag misinformation with high accuracy.',
      features: [
        'Intuitive interface enabling seamless news content analysis',
        'Machine learning classifier achieving 94% accuracy on test datasets',
        'Real-time fact-checking through SERP API integration',
        'Confidence score visualization with detailed result breakdown',
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
      type: 'image',
    },
    {
      title: 'Civic Bridge – Public Issue Reporting System',
      icon: MapPin,
      iconBg: 'bg-purple-600',
      useImageIcon: false,
      description:
        'A comprehensive civic complaint management system featuring a Flutter mobile application for citizens and a React.js admin dashboard for efficient complaint resolution and technician assignment.',
      features: [
        'Mobile app enabling users to register civic complaints with unique tracking IDs',
        'Secure Firebase Authentication for user login and signup functionality',
        'Real-time complaint updates using Cloud Firestore database',
        'React.js admin panel with TypeScript for complaint management and technician assignment',
        'Responsive UI design with Flutter Material widgets and Tailwind CSS',
        'Modular architecture following best practices for scalability and maintenance',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'React.js',
        'TypeScript',
        'Firebase Authentication',
        'Cloud Firestore',
        'Tailwind CSS',
        'Material Design',
      ],
      image: '/project3.png',
      githubLink: 'https://github.com/JaskaranSaini05/Civic_Bridge',
      type: 'image',
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
            const isEven = index % 2 === 0
            const IconComponent = project.icon as any

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
                      {/* ICON / IMAGE ICON */}
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden ${
                          project.useImageIcon
                            ? 'bg-transparent'
                            : `${project.iconBg}`
                        }`}
                      >
                        {project.useImageIcon ? (
                          <img
                            src={project.image}
                            alt="Project Logo"
                            className="w-14 h-14 object-contain"
                          />
                        ) : (
                          IconComponent && (
                            <IconComponent className="w-7 h-7 text-white" />
                          )
                        )}
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

                  {/* MEDIA SECTION */}
                  <div
                    className={`bg-slate-100 p-6 sm:p-8 flex items-center justify-center ${
                      isEven ? 'order-2' : 'order-1'
                    }`}
                  >
                    <div className="w-full max-w-xl bg-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-inner flex items-center justify-center">
                      {/* IMAGE FOR PROJECTS */}
                      {project.type === 'video' ? (
                        <div className="mx-auto w-[260px] sm:w-[300px] rounded-[30px] border-4 border-black p-2 bg-black shadow-lg">
                          <video
                            src={project.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            className="w-full rounded-[25px] aspect-[9/16] object-cover bg-black"
                          />
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto rounded-xl shadow-lg border border-slate-200 bg-white"
                        />
                      )}
                    </div>
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