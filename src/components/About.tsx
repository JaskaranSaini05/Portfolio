import { useState } from 'react'
import {
  Target,
  Code,
  Heart,
  Sparkles,
  Lightbulb,
} from 'lucide-react'

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const aboutCards = [
    {
      id: 0,
      icon: Target,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'From Software to Security',
      content: `I completed my Bachelor of Computer Applications (BCA) from Gujranwala Guru Nanak Khalsa College, Ludhiana.

I am currently pursuing my Master of Computer Applications (MCA) from 2026–2028, with a growing focus on cybersecurity, networking, Linux, and ethical hacking.

My goal is to build strong technical skills and become a cybersecurity professional.`,
    },

    {
      id: 1,
      icon: Lightbulb,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: 'Software & Project Experience',
      content: `I worked as a Software Engineer Intern at Auribises Technologies Pvt. Ltd. from August 2025 to March 2026.

I worked on real-world mobile and web projects using Flutter, React.js, Firebase, MongoDB, and REST APIs.

I also contributed to projects such as Gurbani Made Easy, building Flutter features and working with a team using Jira and Agile practices.`,
    },

    {
      id: 2,
      icon: Code,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Cybersecurity & Technical Skills',
      content: `My current focus is cybersecurity, with an interest in network security, vulnerability assessment, web security, Linux, penetration testing, and security scripting with Python.

My development background includes Flutter, Dart, React.js, Next.js, Tailwind CSS, Node.js, Express.js, Firebase, and MongoDB.

This development experience helps me understand how applications are built and where security weaknesses can occur.`,
    },

    {
      id: 3,
      icon: Heart,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Learning & Beyond Code',
      content: `I spend my free time improving my cybersecurity skills through CTFs, ethical hacking labs, Linux practice, networking, and security research.

I also build small Python scripts to practice automation and security concepts.

Outside technology, I enjoy sports and music, which help me stay focused, consistent, and refreshed.`,
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>

        <div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>

        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold animate-fadeIn">
            <Sparkles size={16} className="animate-pulse" />
            <span>Get To Know Me</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 animate-fadeIn"
            style={{ animationDelay: '0.1s' }}
          >
            About Me
          </h2>

          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full transition-all duration-500 hover:w-40 animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          ></div>

          <p
            className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto animate-fadeIn"
            style={{ animationDelay: '0.3s' }}
          >
            Aspiring cybersecurity professional building a strong foundation
            in security, networking, and software development.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '1+', label: 'Years Experience', delay: '0s' },
            { number: '5+', label: 'Projects Completed', delay: '0.1s' },
            { number: '10+', label: 'Technologies', delay: '0.2s' },
            { number: '100%', label: 'Commitment', delay: '0.3s' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${stat.delay} both`,
              }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>

              <div className="text-slate-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {aboutCards.map((card, index) => {
            const IconComponent = card.icon
            const isHovered = hoveredCard === card.id

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isHovered
                        ? 'scale-110 rotate-6 shadow-lg'
                        : ''
                    }`}
                  >
                    <IconComponent
                      className={`w-7 h-7 ${card.iconColor} transition-transform duration-500 ${
                        isHovered ? 'scale-110' : ''
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="relative">
                  <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                    {card.content}
                  </p>

                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>

                {/* Decorative Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-700"></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>
    </section>
  )
}

export default About