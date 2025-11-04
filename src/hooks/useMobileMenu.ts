import { useState } from 'react'

const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  return { isMenuOpen, toggleMenu, closeMenu }
}

export default useMobileMenu

