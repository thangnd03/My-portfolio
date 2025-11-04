import React from 'react'
import type { ContactInfo } from '../types'

interface MobileHeaderProps {
  contactInfo: Pick<ContactInfo, 'name' | 'title'>
  onMenuToggle: () => void
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ contactInfo, onMenuToggle }) => {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">{contactInfo.name}</h1>
          <p className="text-sm text-gray-400">{contactInfo.title}</p>
        </div>
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default MobileHeader

