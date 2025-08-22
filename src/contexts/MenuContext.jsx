import React, { createContext, useContext, useState, useEffect } from 'react'

const MenuContext = createContext()

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    const preventBodyScroll = (e) => {
      // Permitir scroll solo si el evento viene del menú móvil
      const isFromMenu = e.target.closest('.nav-mobile')
      if (!isFromMenu) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    if (isMenuOpen) {
      // Múltiples técnicas para bloquear scroll del body
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
      document.documentElement.style.overflow = 'hidden'
      
      // Prevenir eventos de scroll y touch solo en el body
      document.addEventListener('wheel', preventBodyScroll, { passive: false })
      document.addEventListener('touchmove', preventBodyScroll, { passive: false })
      document.addEventListener('scroll', preventBodyScroll, { passive: false })
    } else {
      // Restaurar scroll normal
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'auto'
      document.documentElement.style.overflow = 'unset'
      
      // Remover event listeners
      document.removeEventListener('wheel', preventBodyScroll, { passive: false })
      document.removeEventListener('touchmove', preventBodyScroll, { passive: false })
      document.removeEventListener('scroll', preventBodyScroll, { passive: false })
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'auto'
      document.documentElement.style.overflow = 'unset'
      
      document.removeEventListener('wheel', preventBodyScroll, { passive: false })
      document.removeEventListener('touchmove', preventBodyScroll, { passive: false })
      document.removeEventListener('scroll', preventBodyScroll, { passive: false })
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const value = {
    isMenuOpen,
    toggleMenu,
    closeMenu
  }

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}
