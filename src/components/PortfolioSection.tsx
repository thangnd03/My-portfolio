import React, { useState } from 'react'
import type { PortfolioData } from '../types'

interface PortfolioSectionProps {
  portfolioData: PortfolioData
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolioData }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const categories = ['all', ...new Set(portfolioData.projects.map(project => project.category))]

  const filteredProjects = activeFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === activeFilter)

  return (
    <section className="mb-16" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio</h2>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeFilter === category
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">{project.title}</span>
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
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <a 
                href={project.link || '#'} 
                className="text-gray-900 hover:text-gray-700 font-medium text-sm"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection

