import { useState } from 'react'
import { Send, X, CheckCircle, AlertTriangle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',//////
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }))
}


  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setShowError(true)
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_8inzmsi',
        'template_hly61qm',
        {
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'mvzRhVDjRTmvSNh_E'
      )

      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      })

      setShowSuccess(true)
    } catch (error) {
      console.error(error)
      setShowError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 pb-0 bg-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full mb-5"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Got a question, internship offer, or project idea?  
            Drop a message and I’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-20">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2">Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="What's this about?"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Tell me about your idea or opportunity..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
            >
              <Send size={20} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-lg relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-slate-500"
            >
              <X />
            </button>

            <CheckCircle className="mx-auto text-green-600" size={48} />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Message Sent Successfully!
            </h3>
            <p className="text-slate-600 mt-2">
              Thanks for reaching out. I’ve received your message and will get back
              to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      {/* ERROR MODAL */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-lg relative">
            <button
              onClick={() => setShowError(false)}
              className="absolute top-4 right-4 text-slate-500"
            >
              <X />
            </button>

            <AlertTriangle className="mx-auto text-red-600" size={48} />
            <h3 className="text-xl font-bold mt-4 text-slate-900">
              Message Failed
            </h3>
            <p className="text-slate-600 mt-2">
              Something went wrong. Please try again or email me directly at  
              <br />
              <strong>jaskaransaini375@gmail.com</strong>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact
