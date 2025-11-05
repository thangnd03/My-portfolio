import type { ContactInfo } from '../types'

interface SidebarProps {
  contactInfo: ContactInfo
  onNavClick: (sectionId: string) => void
  activeSection: string
  isMenuOpen: boolean
  onCloseMenu: () => void
}

const Sidebar = ({ contactInfo, onNavClick, activeSection, isMenuOpen, onCloseMenu }: SidebarProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId: string): void => {
    onNavClick(sectionId)
    onCloseMenu()
  }

  return (
    <>
      <aside className={`fixed left-0 top-0 h-full w-80 bg-gray-900 text-white p-8 overflow-y-auto sidebar-scroll z-50 transform transition-transform duration-300 lg:translate-x-0 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{contactInfo.name}</h1>
        <p className="text-gray-400">{contactInfo.title}</p>
      </div>

      <nav className="mb-8" aria-label="Main navigation">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-gray-800 pt-8">
        <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
          Contact Info
        </h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-gray-500">Email:</span>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {contactInfo.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500">Phone:</span>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {contactInfo.phone}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500">Birthday:</span>
            <span className="text-gray-300">{contactInfo.birthday}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500">Location:</span>
            <span className="text-gray-300">{contactInfo.location}</span>
          </li>
        </ul>
      </div>
    </aside>
    {isMenuOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onCloseMenu}
        aria-hidden="true"
      />
    )}
    </>
  )
}

export default Sidebar

