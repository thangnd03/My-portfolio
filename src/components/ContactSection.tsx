import { useState, FormEvent, ChangeEvent, ReactNode } from 'react'
import type { ContactInfo } from '../types'
import Reveal from './Reveal'

interface ContactSectionProps {
  contactInfo: ContactInfo
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'sending' | 'sent'

const emptyForm: FormData = { name: '', email: '', subject: '', message: '' }

const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    // Simulate an async send so the UI can show its states
    window.setTimeout(() => {
      setStatus('sent')
      setFormData(emptyForm)
      window.setTimeout(() => setStatus('idle'), 3500)
    }, 1100)
  }

  const infoItems: { label: string; value: string; href?: string; icon: ReactNode }[] = [
    {
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.75 6.75 9.75-6.75M3.75 5.25h16.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5z" />
      ),
    },
    {
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a11.25 11.25 0 01-5.09-5.09l1.293-.97a1.125 1.125 0 00.417-1.173L9.865 5.498A1.125 1.125 0 008.774 4.5H7.5A2.25 2.25 0 005.25 6.75z" />
      ),
    },
    {
      label: 'Location',
      value: contactInfo.location,
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </>
      ),
    },
  ]

  const inputClass =
    'peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg bg-transparent outline-none transition-all duration-200 placeholder-transparent focus:ring-2 focus:ring-gray-900 focus:border-transparent hover:border-gray-400'
  const labelClass =
    'pointer-events-none absolute left-4 top-3.5 text-gray-500 transition-all duration-200 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gray-900 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs'

  return (
    <section className="mb-16 scroll-mt-8" id="contact">
      <Reveal>
        <h2 className="group text-3xl font-bold text-gray-900 mb-2 inline-block">
          Contact
          <span className="block h-1 w-12 mt-2 rounded-full bg-gray-900 transition-all duration-500 group-hover:w-24" />
        </h2>
      </Reveal>
      <Reveal delay={60}>
        <p className="text-gray-600 mb-8 max-w-xl">
          Have a project in mind or just want to say hi? Drop me a message and I'll get back to you.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact info cards */}
        <div className="lg:col-span-2 space-y-4">
          {infoItems.map((item, index) => {
            const CardTag = item.href ? 'a' : 'div'
            return (
              <Reveal key={item.label} delay={index * 100}>
                <CardTag
                  {...(item.href ? { href: item.href } : {})}
                  className="group flex items-center gap-4 bg-white rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                      {item.icon}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {item.label}
                    </span>
                    <span className="block truncate font-medium text-gray-900">{item.value}</span>
                  </span>
                </CardTag>
              </Reveal>
            )
          })}
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <Reveal delay={120}>
            <div className="relative overflow-hidden bg-white rounded-xl shadow-md p-8 transition-shadow duration-300 hover:shadow-xl">
              {/* Decorative animated blob */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 opacity-70 blur-2xl animate-blob-drift"
              />

              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className={inputClass} />
                    <label htmlFor="name" className={labelClass}>Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className={inputClass} />
                    <label htmlFor="email" className={labelClass}>Email</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className={inputClass} />
                    <label htmlFor="subject" className={labelClass}>Subject</label>
                  </div>
                  <div className="relative">
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Message" className={`${inputClass} resize-none`} />
                    <label htmlFor="message" className={labelClass}>Message</label>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={status !== 'idle'}
                      className="group inline-flex min-w-[10rem] items-center justify-center gap-2 rounded-lg bg-gray-900 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-90 disabled:hover:translate-y-0"
                    >
                      {status === 'sending' && (
                        <>
                          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                          Sending...
                        </>
                      )}
                      {status === 'sent' && (
                        <>
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                            <path
                              className="animate-draw-check"
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ strokeDasharray: 28 }}
                            />
                          </svg>
                          Sent!
                        </>
                      )}
                      {status === 'idle' && (
                        <>
                          Send Message
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </>
                      )}
                    </button>

                    {status === 'sent' && (
                      <p className="animate-scale-in text-sm font-medium text-green-600">
                        Thanks! I'll be in touch soon.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
