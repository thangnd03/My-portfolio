import React from 'react'
import type { ResumeData } from '../types'

interface ResumeSectionProps {
  resumeData: ResumeData
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ resumeData }) => {
  return (
    <section className="mb-16" id="resume">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Resume</h2>

      {/* Education Timeline */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
        <ol className="relative border-s-2 border-gray-200 dark:border-gray-200">
          {resumeData.education.map((edu, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 ring-8 ring-white">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">{edu.school}</h4>
                <time className="text-xs md:text-sm text-gray-600 whitespace-nowrap">{edu.period}</time>
              </div>
              <p className="mt-2 text-gray-700">{edu.description}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Experience Timeline */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
        <ol className="relative border-s-2 border-gray-200 dark:border-gray-200">
          {resumeData.experience.map((exp, index) => (
            <li key={index} className="mb-10 ms-6">
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
          ))}
        </ol>
      </div>

      {/* Skills Grid */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">My skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {resumeData.skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow flex flex-col items-center justify-center gap-2 text-center"
            >
              {skill.icon && (
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              )}
              <span className="font-semibold text-gray-900 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResumeSection

