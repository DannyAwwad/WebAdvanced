
import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  MessageSquare,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react'

// Static Contact Info
const contactInfo = [
  {
    title: 'Email Address',
    value: 'info@liu.edu.lb',
    description: 'Send us an email anytime',
    icon: Mail,
  },
  {
    title: 'Phone Number',
    value: '+961 XX XXX XXX',
    description: 'Available during working hours',
    icon: Phone,
  },
  {
    title: 'Location',
    value: 'Beirut, Lebanon',
    description: 'Lebanese International University',
    icon: MapPin,
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    studentID: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Frontend demonstration only.
    setSubmitted(true)

    setFormData({
      name: '',
      studentID: '',
      subject: '',
      message: '',
    })
  }

  const inputStyle = `
    w-full px-4 py-3 rounded-lg
    bg-[#151521] border border-white/5
    text-gray-100 placeholder:text-muted
    focus:outline-none focus:border-accent/50
    transition-colors
  `

  return (
    <div className="p-6 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-100">
          Contact Us
        </h1>

        <p className="text-sm text-muted mt-1">
          Have a question or need assistance? Get in touch with us.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-5">

          <div>
            <h2 className="text-lg font-semibold text-gray-100">
              Contact Information
            </h2>

            <p className="text-sm text-muted mt-1">
              Different ways to reach the university.
            </p>
          </div>

          <div className="space-y-3">
            {contactInfo.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5"
                >
                  <div className="p-3 rounded-lg bg-accent/10 shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-gray-100">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-300 mt-1 break-words">
                      {item.value}
                    </p>

                    <p className="text-xs text-muted mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Information */}
          <div className="p-5 rounded-xl bg-surface border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <Globe size={19} className="text-accent" />

              <h3 className="text-sm font-semibold text-gray-100">
                Stay Connected
              </h3>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-4">
              Explore university resources and stay updated with the latest
              announcements, academic information, and campus news.
            </p>

            <a
              href="https://liu.edu.lb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:opacity-80 transition-opacity"
            >
              Visit LIU Website
              <ArrowUpRight size={15} />
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="h-full p-5 md:p-6 rounded-xl bg-surface border border-white/5">

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-100">
                Send Us a Message
              </h2>

              <p className="text-sm text-muted mt-1">
                Fill out the form below and we'll get back to you.
              </p>
            </div>

            {submitted && (
              <div className="flex items-center gap-3 p-3 mb-5 rounded-lg bg-emerald-500/10 border border-emerald-500/10 text-emerald-400">
                <CheckCircle2 size={18} />

                <p className="text-sm">
                  Your message has been submitted successfully!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Student ID
                  </label>

                  <input
                    type="text"
                    name="studentID"
                    value={formData.studentID}
                    onChange={handleChange}
                    placeholder="Enter your Student ID"
                    required
                    className={inputStyle}
                  />
                </div>

              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={6}
                  required
                  className={`${inputStyle} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent/15 text-accent border border-accent/20 text-sm font-medium hover:bg-accent/25 transition-colors"
              >
                <Send size={16} />
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>

      {/* Footer Note */}
      <div className="text-center border-t border-white/5 pt-5">
        <p className="text-xs text-muted">
          Lebanese International University · Contact & Support
        </p>
      </div>

    </div>
  )
}

export default Contact
