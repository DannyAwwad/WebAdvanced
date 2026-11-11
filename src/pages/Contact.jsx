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
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'Phone Number',
    value: '+961 XX XXX XXX',
    description: 'Available during working hours',
    icon: Phone,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'Location',
    value: 'Beirut, Lebanon',
    description: 'Lebanese International University',
    icon: MapPin,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
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

  return (
    <div className="min-h-screen bg-[#151521] text-gray-100 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
            <MessageSquare size={16} />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Contact Us
          </h1>

          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Have a question, need assistance, or want to learn more about
            LIU? We'd love to hear from you. Reach out to us using the
            information below or send us a message.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">

            <div>
              <h2 className="text-xl font-semibold mb-2">
                Contact Information
              </h2>
              <p className="text-gray-400 text-sm">
                Here are the different ways you can reach us.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-[#1e1e2d] border border-gray-700/40 hover:border-gray-600/70 transition-colors"
                  >
                    <div className={`${item.bg} p-3 rounded-xl shrink-0`}>
                      <Icon className={item.color} size={22} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-100">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1 break-words">
                        {item.value}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Additional Information */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Globe size={20} className="text-blue-400" />
                </div>
                <h3 className="font-semibold">
                  Stay Connected
                </h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Explore university resources and stay updated with the
                latest announcements, academic information, and campus news.
              </p>

              <a
                href="https://liu.edu.lb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Visit LIU Website
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="h-full p-6 md:p-8 rounded-2xl bg-[#1e1e2d] border border-gray-700/40">

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-400 text-sm">
                  Fill out the form below and we'll get back to you.
                </p>
              </div>

              {submitted && (
                <div className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <CheckCircle2 size={20} />
                  <p className="text-sm">
                    Your message has been submitted successfully!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
                      className="w-full px-4 py-3 rounded-xl bg-[#151521] border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Student ID
                    </label>
                    <input
                      type="text"
                      name="StudentID"
                      value={formData.studentID}
                      onChange={handleChange}
                      placeholder="Enter your Student ID"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#151521] border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#151521] border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#151521] border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
                >
                  <Send size={17} />
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center border-t border-gray-700/40 pt-6">
          <p className="text-gray-500 text-sm">
            Lebanese International University · Contact & Support
          </p>
        </div>

      </div>
    </div>
  )
}

export default Contact