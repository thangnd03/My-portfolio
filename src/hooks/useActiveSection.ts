import { useState } from 'react'

type SectionId = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact'

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('about')

  const handleNavClick = (sectionId: string): void => {
    setActiveSection(sectionId as SectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return { activeSection, handleNavClick }
}

export default useActiveSection

