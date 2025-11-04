import React from 'react'
import type { AboutData } from '../types'

interface AboutSectionProps {
  aboutData: AboutData
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutData }) => {
  return (
    <section className="mb-16" id="about">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">About me</h2>
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          {aboutData.description}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {aboutData.additionalInfo}
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">What I'm doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{service.icon}</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {aboutData.testimonials && aboutData.testimonials.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {aboutData.clients && aboutData.clients.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {aboutData.clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-400 text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutSection

