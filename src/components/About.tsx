import React from 'react'
import { Target, Code, Heart } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission-Driven Developer */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Mission-Driven Developer
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-justify">
              I have completed my Bachelor of Computer Applications (BCA) from Gujranwala Guru Nanak Khalsa College, Ludhiana, affiliated with Panjab University. I am passionate about building technology that solves real-world problems and delivers meaningful impact.

I enjoy working with React for frontend development and currently, I am working as a Flutter Developer Intern at Auribises Technologies Pvt. Ltd. I have strong experience in building clean, responsive, and user-friendly applications.

I am skilled in Flutter development, frontend technologies, and UI/UX design, with a focus on creating scalable and user-centric solutions. I aim to combine good design with solid functionality to build products that are practical, modern, and easy to use.
            </p>
          </div>

          {/* Project Experience */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Project Experience
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-justify">
              I have collaboratively contributed to impactful projects that merge innovation, usability, and data-driven intelligence to address real-world challenges. My work includes developing cross-platform mobile applications, building responsive web interfaces, and creating AI-powered solutions that provide intelligent insights and personalized experiences. These projects reflect my ability to integrate frontend engineering, intuitive design, and applied machine learning into cohesive, impactful digital solutions.
            </p>
          </div>

          {/* Technical Expertise */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Code className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Technical Expertise
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-justify">
              I'm proficient in mobile app development with Flutter and Dart, frontend development using React, Next.js, and Tailwind CSS, and backend technologies including Node.js, Express.js, and Firebase. I have hands-on experience with building responsive, user-focused interfaces and managing scalable databases with Firebase and MongoDB. Additionally, I leverage TensorFlow, Scikit-Learn, and Python to develop and deploy intelligent models that transform data into actionable insights. My experience across multiple programming languages and frameworks enables me to bridge frontend design, backend logic, and AI-driven functionality into cohesive, high-performing digital solutions.
            </p>
          </div>

          {/* Beyond Code */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Beyond Code
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-justify">
              When I'm not immersed in code, I love challenging myself through data structures and algorithms on platforms like LeetCode and HackerRank, constantly refining my problem-solving mindset. I enjoy exploring UI/UX design principles, contributing to open-source projects, and staying ahead of emerging technologies through hackathons, tech communities, and collaborative learning experiences. Outside of tech, you'll often find me exploring creative hobbies, staying active with sports, or discovering new music—activities that keep me energized and inspired.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About