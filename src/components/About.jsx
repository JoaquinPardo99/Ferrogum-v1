import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Award, Heart, Zap, Beaker } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import ImageCarousel from './ImageCarousel'

const About = ({ isLoaded = true }) => {
  const { t } = useTranslation()
  const stats = [
    { number: "5", label: t('about.stats.micronutrients'), icon: Target },
    { number: "90%+", label: t('about.stats.adherence'), icon: Users },
    { number: "60", label: t('about.stats.gummies'), icon: Award },
    { number: "24", label: t('about.stats.shelfLife'), icon: Heart }
  ]

  // Configuración de animación basada en el estado de carga
  const animationConfig = isLoaded ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  } : {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0 },
    viewport: { once: true }
  }

  const cardAnimationConfig = isLoaded ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.3 },
    viewport: { once: true }
  } : {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0 },
    viewport: { once: true }
  }

  return (
    <section id="nosotros" className="about section">
      <div className="container">
        <motion.div 
          className="section-header"
          {...animationConfig}
        >
          <h2 className="section-title">
            <span className="text-red">{t('about.title')}</span> {t('about.titleHighlight')}
          </h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            {...animationConfig}
          >
            {/* Carrusel de imágenes FERROGUM */}
            <motion.div 
              className="about-visual-top"
              {...animationConfig}
            >
              <ImageCarousel />
            </motion.div>

            {/* Tarjetas principales */}
            <div className="about-cards">
              <motion.div 
                className="about-card-innovador"
                {...cardAnimationConfig}
              >
                <div className="card-icon">
                  <Zap size={32} />
                </div>
                <h3>{t('about.innovativeFormat.title')}</h3>
                <p>
                  {t('about.innovativeFormat.description')}
                </p>
              </motion.div>

              <motion.div 
                className="about-card-formula"
                {...cardAnimationConfig}
              >
                <div className="card-icon">
                  <Beaker size={32} />
                </div>
                <h3>{t('about.advancedFormula.title')}</h3>
                <p>
                  {t('about.advancedFormula.description')}
                </p>
              </motion.div>
            </div>

            {/* Características - Debajo de las tarjetas */}
            <motion.div 
              className="about-features"
              {...animationConfig}
            >
              <div className="feature-item">
                <div className="feature-icon">
                  <Target size={24} />
                </div>
                <div>
                  <h4>{t('about.features.bioavailability.title')}</h4>
                  <p>{t('about.features.bioavailability.description')}</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Heart size={24} />
                </div>
                <div>
                  <h4>{t('about.features.tolerance.title')}</h4>
                  <p>{t('about.features.tolerance.description')}</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <div>
                  <h4>{t('about.features.scientific.title')}</h4>
                  <p>{t('about.features.scientific.description')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>



        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  <stat.icon size={32} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
