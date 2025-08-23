import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Heart, Ban } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

const Hero = ({ isLoaded = true }) => {
  const { t } = useTranslation()
  
  // Configuración de animación basada en el estado de carga
  const animationConfig = isLoaded ? {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  } : {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0 }
  }

  const visualAnimationConfig = isLoaded ? {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.2 }
  } : {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0 }
  }

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            {...animationConfig}
          >
            <h1 className="hero-title">
              <span className="text-white">{t('hero.title')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">
                <Zap size={20} />
                <span>{t('hero.features.iron')}</span>
              </div>
              <div className="hero-feature">
                <Shield size={20} />
                <span>{t('hero.features.vitamins')}</span>
              </div>
              <div className="hero-feature">
                <Heart size={20} />
                <span>{t('hero.features.flavor')}</span>
              </div>
              <div className="hero-feature">
                <Ban size={20} />
                <span>{t('hero.features.sugarFree')}</span>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#contacto" className="btn btn-primary btn-large">
                {t('hero.cta.info')}
              </a>
              <a href="#productos" className="btn btn-primary btn-large">
                {t('hero.cta.products')}
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            {...visualAnimationConfig}
          >
            <div className="hero-video-container">
              <iframe
                className="hero-video"
                src="https://www.youtube.com/embed/IJLwidSohO8?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1&disablekb=1&fs=0"
                title="FERROGUM - Suplemento de Hierro"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
