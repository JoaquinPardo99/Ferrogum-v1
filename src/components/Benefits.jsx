import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Heart, Shield, Star, Users, Award, Droplets, Pill, Activity, Dna, Sparkles } from 'lucide-react'
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
    {
      name: t('benefits.ingredients.iron'),
      icon: Droplets // Hierro Bisglicinato
    },
    {
      name: t('benefits.ingredients.vitaminC'),
      icon: Shield // Vitamina C
    },
    {
      name: t('benefits.ingredients.vitaminB12'),
      icon: Activity // Vitamina B12
    },
    {
      name: t('benefits.ingredients.folicAcid'),
      icon: Dna // Ácido Fólico
    },
    {
      name: t('benefits.ingredients.zinc'),
      icon: Sparkles // Zinc
    },
    {
      name: t('benefits.ingredients.flavor'),
      icon: Heart // Sabor natural a fresa
    }
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
                    <span>{feature.name}</span>
                    <div className="feature-icon">
                      <feature.icon size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
