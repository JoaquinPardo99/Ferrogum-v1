import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isManualNavigation, setIsManualNavigation] = useState(false)
  
  // Imágenes reales de FERROGUM
  const images = [
    {
      src: "/images/carousel/gummies-hand.JPG",
      alt: "Gomitas FERROGUM en la mano",
      title: "Fácil de tomar"
    },
    {
      src: "/images/carousel/gummies-jar.JPG", 
      alt: "Frasco con gomitas FERROGUM",
      title: "Presentación premium"
    },
    {
      src: "/images/carousel/gummies-scattered.JPG",
      alt: "Gomitas FERROGUM esparcidas",
      title: "Sabor delicioso"
    },
    {
      src: "/images/carousel/gummies-spilled.JPG",
      alt: "Gomitas saliendo del frasco",
      title: "Calidad superior"
    },
    {
      src: "/images/carousel/gummies-close.JPG",
      alt: "Gomitas FERROGUM de cerca",
      title: "Textura perfecta"
    }
  ]

  // Auto-play del carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000) // Cambia cada 6 segundos (aumentado de 4 a 6)

    return () => clearInterval(timer)
  }, [images.length, currentIndex]) // Agregamos currentIndex como dependencia para resetear el timer

  const goToPrevious = () => {
    setIsManualNavigation(true)
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    // Resetear el flag después de un breve momento
    setTimeout(() => setIsManualNavigation(false), 100)
  }

  const goToNext = () => {
    setIsManualNavigation(true)
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    // Resetear el flag después de un breve momento
    setTimeout(() => setIsManualNavigation(false), 100)
  }

  const goToSlide = (index) => {
    setIsManualNavigation(true)
    setCurrentIndex(index)
    // Resetear el flag después de un breve momento
    setTimeout(() => setIsManualNavigation(false), 100)
  }

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="carousel-image"
              onError={(e) => {
                // Fallback a una imagen placeholder si no se encuentra
                e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI0M4MTAyRSIgb3BhY2l0eT0iMC4xIi8+CiAgPHRleHQgeD0iMjAwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI0M4MTAyRSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RkVSUk9HVU0gSW1hZ2U8L3RleHQ+Cjwvc3ZnPg=="
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Botones de navegación */}
        <button 
          className="carousel-btn carousel-btn-prev"
          onClick={goToPrevious}
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          className="carousel-btn carousel-btn-next"
          onClick={goToNext}
          aria-label="Siguiente imagen"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicadores */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
