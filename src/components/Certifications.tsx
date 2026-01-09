import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Agentic AI With Python',
      organization: 'Auribises Technologies Pvt Ltd',
      year: '2025',
      image: '/certificates/auribises.png',
      certificateLink: '/certificates/ATPL_CC_20250609-PWD-2038.pdf',
    },
     {
    title: 'Introduction to Frontend Development',        
    organization: 'Simplilearn SkillUp',       
    year: '2025',                            
    image: '/certificates/image1.png',  
    certificateLink: '/certificates/introtofrontend.pdf', 
  },
   {
    title: 'Certificate Course in Basic Computing',        
    organization: 'Gujranwala Guru Nanak Khalsa College ',       
    year: '2023',                            
    image: '/certificates/image.png',  
    certificateLink: '/certificates/basicincomputingcourse.pdf', 
  },
  ]

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full mb-5"></div>
          <p className="text-lg text-slate-600">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative bg-slate-100 p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{cert.organization}</p>
                    <p className="text-slate-500 text-sm mt-1">{cert.year}</p>
                  </div>
                </div>

                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications