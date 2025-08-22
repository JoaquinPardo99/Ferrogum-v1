import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useMenu } from '../contexts/MenuContext'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { isMenuOpen } = useMenu()

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el usuario haya scrolleado 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // No mostrar el botón si el menú móvil está abierto
  const shouldShow = isVisible && !isMenuOpen

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'var(--silver-metallic)',
            color: 'var(--red-primary)'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 300
          }}
          aria-label="Volver al inicio"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop

