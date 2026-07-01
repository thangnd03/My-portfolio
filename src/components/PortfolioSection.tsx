import { useState } from 'react'
import type { PortfolioData } from '../types'
import Reveal from './Reveal'

interface PortfolioSectionProps {
  portfolioData: PortfolioData
}

const PortfolioSection = ({ portfolioData }: PortfolioSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const categories = ['all', ...new Set(portfolioData.projects.map(project => project.category))]

  const filteredProjects = activeFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === activeFilter)

  return (
    <section className="mb-16 scroll-mt-8" id="portfolio">
      <Reveal>
        <h2 className="group text-3xl font-bold text-gray-900 mb-6 inline-block">
          Portfolio
          <span className="block h-1 w-12 mt-2 rounded-full bg-gray-900 transition-all duration-500 group-hover:w-24" />
        </h2>
      </Reveal>

      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                activeFilter === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          // key includes the filter so cards re-animate in when the filter changes
          <Reveal key={`${activeFilter}-${project.title}`} delay={index * 90}>
            <div className="group h-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm font-medium transition-transform duration-500 group-hover:scale-110">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  {project.period && (
                    <span className="text-gray-500 text-xs whitespace-nowrap ml-2">{project.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-2 text-sm">{project.category}</p>
                {project.description && (
                  <p className="text-gray-700 mb-4 text-sm line-clamp-3">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded transition-colors duration-200 hover:bg-gray-900 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.links && project.links.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-800 transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                      >
                        {link.label}
                        <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={project.link || '#'}
                    target={project.link && project.link !== '#' ? '_blank' : undefined}
                    rel={project.link && project.link !== '#' ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 font-medium text-sm"
                  >
                    View Project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
