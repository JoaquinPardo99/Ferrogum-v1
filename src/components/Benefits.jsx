import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Heart, Shield, Star, Users, Award } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

const Benefits = ({ isLoaded = true }) => {
  const { t } = useTranslation()
  const benefits = [
    {
      icon: Zap,
      title: t('benefits.benefits.0.title'),
      description: t('benefits.benefits.0.description'),
      color: "var(--red-primary)"
    },
    {
      icon: Heart,
      title: t('benefits.benefits.1.title'),
      description: t('benefits.benefits.1.description'),
      color: "var(--red-primary)"
    },
    {
      icon: Shield,
      title: t('benefits.benefits.2.title'),
      description: t('benefits.benefits.2.description'),
      color: "var(--red-primary)"
    },
    {
      icon: Star,
      title: t('benefits.benefits.3.title'),
      description: t('benefits.benefits.3.description'),
      color: "var(--red-primary)"
    },
    {
      icon: Users,
      title: t('benefits.benefits.4.title'),
      description: t('benefits.benefits.4.description'),
      color: "var(--red-primary)"
    },
    {
      icon: Award,
      title: t('benefits.benefits.5.title'),
      description: t('benefits.benefits.5.description'),
      color: "var(--red-primary)"
    }
  ]

  const features = [
    t('benefits.ingredients.iron'),
    t('benefits.ingredients.vitaminC'),
    t('benefits.ingredients.vitaminB12'),
    t('benefits.ingredients.folicAcid'),
    t('benefits.ingredients.zinc'),
    t('benefits.ingredients.flavor')
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
    transition: { duration: 0.6 },
    viewport: { once: true },
    whileHover: { 
      y: -5,
      transition: { duration: 0.3 }
    }
  } : {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0 },
    viewport: { once: true },
    whileHover: { 
      y: 0,
      transition: { duration: 0 }
    }
  }

  return (
    <section id="beneficios" className="benefits">
      <div className="container">
        <motion.div 
          className="benefits-header"
          {...animationConfig}
        >
          <h2 className="section-title">{t('benefits.title')}</h2>
          <p className="section-subtitle">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        <div className="benefits-content">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-card"
                {...cardAnimationConfig}
              >
                <div className="benefit-icon" style={{ color: benefit.color }}>
                  <benefit.icon size={32} />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="benefits-highlight"
            {...animationConfig}
          >
            <div className="highlight-card">
              <h3>{t('benefits.containsTitle')}</h3>
              <div className="features-list">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-bullet"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-row">
              <div className="stat-item">
                <h4>5</h4>
                <p>{t('benefits.stats.micronutrients')}</p>
              </div>
              <div className="stat-item">
                <h4>90%+</h4>
                <p>{t('benefits.stats.adherence')}</p>
              </div>
              <div className="stat-item">
                <h4>60</h4>
                <p>{t('benefits.stats.gummies')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
