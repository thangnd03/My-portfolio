import type { ResumeData } from '../types'
import Reveal from './Reveal'

interface ResumeSectionProps {
  resumeData: ResumeData
}

const ResumeSection = ({ resumeData }: ResumeSectionProps) => {
  return (
    <section className="mb-16 scroll-mt-8" id="resume">
      <Reveal>
        <h2 className="group text-3xl font-bold text-gray-900 mb-12 inline-block">
          Resume
          <span className="block h-1 w-12 mt-2 rounded-full bg-gray-900 transition-all duration-500 group-hover:w-24" />
        </h2>
      </Reveal>

      {/* Education Timeline */}
      <div className="mb-12">
        <Reveal>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
        </Reveal>
        <ol className="relative border-s-2 border-gray-200 dark:border-gray-200">
          {resumeData.education.map((edu, index) => (
            <Reveal key={index} delay={index * 120}>
              <li className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 ring-8 ring-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900">{edu.school}</h4>
                  <time className="text-xs md:text-sm text-gray-600 whitespace-nowrap">{edu.period}</time>
                </div>
                <p className="mt-2 text-gray-700">{edu.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Experience Timeline */}
      <div className="mb-12">
        <Reveal>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
        </Reveal>
        <ol className="relative border-s-2 border-gray-200 dark:border-gray-200">
          {resumeData.experience.map((exp, index) => (
            <Reveal key={index} delay={index * 120}>
              <li className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 ring-8 ring-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">{exp.position}</h4>
                    {exp.company && (
                      <p className="mt-1 text-sm text-gray-600">{exp.company}</p>
                    )}
                  </div>
                  <time className="text-xs md:text-sm text-gray-600 whitespace-nowrap">{exp.period}</time>
                </div>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Skills Grid */}
      <div>
        <Reveal>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">My skills</h3>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {resumeData.skills.map((skill, index) => (
            <Reveal key={index} delay={index * 60}>
              <div className="group h-full bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center gap-2 text-center">
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-125"
                  />
                )}
                <span className="font-semibold text-gray-900 text-sm">{skill.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
