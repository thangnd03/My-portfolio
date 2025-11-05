import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import AboutSection from './components/AboutSection'
import ResumeSection from './components/ResumeSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import { contactInfo, aboutData, resumeData, portfolioData } from './data/portfolioData'
import useActiveSection from './hooks/useActiveSection'
import useMobileMenu from './hooks/useMobileMenu'

const App = () => {
  const { activeSection, handleNavClick } = useActiveSection()
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu()

  return (
    <div className="flex min-h-screen bg-gray-50">
      <MobileHeader 
        contactInfo={contactInfo}
        onMenuToggle={toggleMenu}
      />
      <Sidebar 
        contactInfo={contactInfo}
        onNavClick={handleNavClick}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onCloseMenu={closeMenu}
      />
      <main className="lg:ml-80 flex-1 p-4 lg:p-8 pt-24 lg:pt-8">
        <AboutSection aboutData={aboutData} />
        <ResumeSection resumeData={resumeData} />
        <PortfolioSection portfolioData={portfolioData} />
        {/* <BlogSection blogData={blogData} /> */}
        <ContactSection />
      </main>
    </div>
  )
}

export default App

