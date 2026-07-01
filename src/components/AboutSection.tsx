import type { AboutData } from '../types'
import Reveal from './Reveal'

interface AboutSectionProps {
  aboutData: AboutData
}

const AboutSection = ({ aboutData }: AboutSectionProps) => {
  return (
    <section className="mb-16 scroll-mt-8" id="about">
      <Reveal>
        <h2 className="group text-3xl font-bold text-gray-900 mb-6 inline-block">
          About me
          <span className="block h-1 w-12 mt-2 rounded-full bg-gray-900 transition-all duration-500 group-hover:w-24" />
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            {aboutData.description}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {aboutData.additionalInfo}
          </p>
        </div>
      </Reveal>

      <div className="mb-12">
        <Reveal>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What I'm doing</h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutData.services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group h-full bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <span className="text-white text-xl">{service.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {aboutData.testimonials && aboutData.testimonials.length > 0 && (
        <div className="mb-12">
          <Reveal>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Testimonials</h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.testimonials.map((testimonial, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="h-full bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {aboutData.clients && aboutData.clients.length > 0 && (
        <div>
          <Reveal>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Clients</h3>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {aboutData.clients.map((client, index) => (
              <Reveal key={index} delay={index * 70}>
                <div className="group h-full min-h-[72px] bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-900">
                  <span className="text-gray-400 text-sm font-medium transition-colors duration-300 group-hover:text-white">
                    {client}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutSection
