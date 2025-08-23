import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Clock, Heart } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

const Products = ({ isLoaded = true }) => {
  const { t } = useTranslation()

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
    <section id="productos" className="products section">
      <div className="container">
        <motion.div 
          className="product-showcase"
          {...animationConfig}
        >
          <div className="product-main">
            <motion.div 
              className="product-info"
              {...animationConfig}
            >
              <div className="product-name-main">
                <h3>{t('products.name')}</h3>
                <p className="product-tagline">{t('products.tagline')}</p>
              </div>

              <div className="product-description-main">
                <p>
                  {t('products.description')}
                </p>
              </div>

              <div className="product-highlights">
                <div className="highlight-item">
                  <Check size={20} />
                  <span>{t('products.highlights.iron')}</span>
                </div>
                <div className="highlight-item">
                  <Star size={20} />
                  <span>{t('products.highlights.certified')}</span>
                </div>
                <div className="highlight-item">
                  <Clock size={20} />
                  <span>{t('products.highlights.duration')}</span>
                </div>
                <div className="highlight-item">
                  <Heart size={20} />
                  <span>{t('products.highlights.safe')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="product-image"
              {...animationConfig}
            >
              <img 
                src="/images/ferrogum-jar-demo.jpg" 
                alt="Gomitas FERROGUM" 
                className="product-img"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
