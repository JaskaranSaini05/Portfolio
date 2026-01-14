import { useState } from 'react'
import { Target, Code, Heart, Sparkles, Lightbulb } from 'lucide-react'

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const aboutCards = [
    {
      id: 0,
      icon: Target,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Mission-Driven Developer',
      content: `I have completed my Bachelor of Computer Applications (BCA) from Gujranwala Guru Nanak Khalsa College, Ludhiana, affiliated with Panjab University. I am passionate about building technology that solves real-world problems and delivers meaningful impact.

I enjoy working with React for frontend development and currently, I am working as a Flutter Developer Intern at Auribises Technologies Pvt. Ltd. I have strong experience in building clean, responsive, and user-friendly applications.

I am skilled in Flutter development, frontend technologies, and UI/UX design, with a focus on creating scalable and user-centric solutions. I aim to combine good design with solid functionality to build products that are practical, modern, and easy to use.`,
    },
    {
      id: 1,
      icon: Lightbulb,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: 'Project Experience',
      content: `I have collaboratively contributed to impactful projects that merge innovation, usability, and data-driven intelligence to address real-world challenges. My work includes developing cross-platform mobile applications, building responsive web interfaces, and creating AI-powered solutions that provide intelligent insights and personalized experiences. These projects reflect my ability to integrate frontend engineering, intuitive design, and applied machine learning into cohesive, impactful digital solutions.`,
    },
    {
      id: 2,
      icon: Code,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Technical Expertise',
      content: `I'm proficient in mobile app development with Flutter and Dart, frontend development using React, Next.js, and Tailwind CSS, and backend technologies including Node.js, Express.js, and Firebase. I have hands-on experience with building responsive, user-focused interfaces and managing scalable databases with Firebase and MongoDB. Additionally, I leverage TensorFlow, Scikit-Learn, and Python to develop and deploy intelligent models that transform data into actionable insights. My experience across multiple programming languages and frameworks enables me to bridge frontend design, backend logic, and AI-driven functionality into cohesive, high-performing digital solutions.`,
    },
    {
      id: 3,
      icon: Heart,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Beyond Code',
      content: `When I'm not immersed in code, I love challenging myself through data structures and algorithms on platforms like LeetCode and HackerRank, constantly refining my problem-solving mindset. I enjoy exploring UI/UX design principles, contributing to open-source projects, and staying ahead of emerging technologies through hackathons, tech communities, and collaborative learning experiences. Outside of tech, you'll often find me exploring creative hobbies, staying active with sports, or discovering new music—activities that keep me energized and inspired.`,
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
            A passionate developer crafting meaningful digital experiences
          </p>
        </div>

        {/* ✅ STATS MOVED HERE (JUST BELOW THE LINE) */}
        <div className="mb-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '1+', label: 'Years Experience', delay: '0s' },
            { number: '5+', label: 'Projects Completed', delay: '0.1s' },
            { number: '5+', label: 'Technologies', delay: '0.2s' },
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
              <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
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
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isHovered ? 'scale-110 rotate-6 shadow-lg' : ''
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

                <div className="relative">
                  <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                    {card.content}
                  </p>

                  {/* Animated Gradient Overlay on Hover */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>

                {/* Decorative Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-700"></div>
              </div>
            )
          })}
        </div>
      </div>

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
