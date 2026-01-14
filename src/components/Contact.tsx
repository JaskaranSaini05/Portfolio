import { useEffect, useMemo, useState } from 'react'
import { Send, X, CheckCircle, AlertTriangle, Loader2, RotateCcw } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'

type FormState = {
  fullName: string
  email: string
  subject: string
  message: string
}

const initialState: FormState = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Contact = () => {
  const [formData, setFormData] = useState<FormState>(initialState)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    fullName: false,
    email: false,
    subject: false,
    message: false,
  })

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {}

    if (!formData.fullName.trim()) e.fullName = 'Full name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!emailRegex.test(formData.email)) e.email = 'Enter a valid email'

    if (!formData.subject.trim()) e.subject = 'Subject is required'
    if (!formData.message.trim()) e.message = 'Message is required'
    else if (formData.message.trim().length < 10)
      e.message = 'Message should be at least 10 characters'

    return e
  }, [formData])

  const isValid = Object.keys(errors).length === 0

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const closeAll = () => {
    setShowSuccess(false)
    setShowError(false)
  }

  const handleSubmit = async () => {
    // mark all as touched
    setTouched({
      fullName: true,
      email: true,
      subject: true,
      message: true,
    })

    if (!isValid) {
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

      setFormData(initialState)
      setTouched({
        fullName: false,
        email: false,
        subject: false,
        message: false,
      })

      setShowSuccess(true)
      setShowError(false)
    } catch (error) {
      console.error(error)
      setShowError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ESC close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // auto close success after 3 sec
  useEffect(() => {
    if (!showSuccess) return
    const t = setTimeout(() => setShowSuccess(false), 3000)
    return () => clearTimeout(t)
  }, [showSuccess])

  const fieldClass = (field: keyof FormState) => {
    const hasError = touched[field] && !!errors[field]
    return `w-full px-4 py-3 rounded-lg border outline-none transition-all
    ${hasError ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:ring-2 focus:ring-blue-200'}
    ${isSubmitting ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'}
    `
  }

  const labelClass = 'block font-medium mb-2 text-slate-800'

  return (
    <section id="contact" className="py-20 pb-0 bg-slate-100 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s Connect
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded-full mb-5" />

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Got a question, internship offer, or project idea? <br />
            Drop a message and I’ll get back to you soon.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-20"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={() => handleBlur('fullName')}
                  disabled={isSubmitting}
                  placeholder="Your full name"
                  className={fieldClass('fullName')}
                />
                {touched.fullName && errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  disabled={isSubmitting}
                  placeholder="your.email@example.com"
                  className={fieldClass('email')}
                />
                {touched.email && errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className={labelClass}>Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={() => handleBlur('subject')}
                disabled={isSubmitting}
                placeholder="What's this about?"
                className={fieldClass('subject')}
              />
              {touched.subject && errors.subject && (
                <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <div className="flex items-center justify-between">
                <label className={labelClass}>Message</label>
                <p className="text-sm text-slate-500">
                  {formData.message.length}/600
                </p>
              </div>

              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={(e) => {
                  if (e.target.value.length <= 600) handleChange(e)
                }}
                onBlur={() => handleBlur('message')}
                disabled={isSubmitting}
                placeholder="Tell me about your idea or opportunity..."
                className={`${fieldClass('message')} resize-none`}
              />

              {touched.message && errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all
                ${isSubmitting ? 'bg-blue-500/70 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
                text-white`}
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <button
                type="button"
                onClick={() => setFormData(initialState)}
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 transition-all"
              >
                <RotateCcw size={18} />
                Clear
              </button>
            </div>

            {/* Hint */}
            <p className="text-sm text-slate-500 text-center">
              Tip: Press <span className="font-semibold">ESC</span> to close popup.
            </p>
          </div>
        </motion.div>
      </div>

      {/* MODALS */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
              >
                <X />
              </button>

              <CheckCircle className="mx-auto text-green-600" size={52} />
              <h3 className="text-xl font-bold mt-4 text-slate-900">
                Message Sent Successfully!
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Thanks for reaching out. I’ve received your message and will get back
                to you as soon as possible.
              </p>

              <div className="mt-5 text-sm text-slate-500">
                This popup will close automatically.
              </div>
            </motion.div>
          </motion.div>
        )}

        {showError && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
            onClick={() => setShowError(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowError(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
              >
                <X />
              </button>

              <AlertTriangle className="mx-auto text-red-600" size={52} />
              <h3 className="text-xl font-bold mt-4 text-slate-900">
                Message Failed
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Something went wrong. Please try again or email me directly at:
                <br />
                <strong>jaskaransaini375@gmail.com</strong>
              </p>

              <button
                onClick={() => setShowError(false)}
                className="mt-5 w-full px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all"
              >
                Okay
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact
