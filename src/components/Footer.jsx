import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer bg-red-dark">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-container">
                <div className="logo-icon">
                  <div className="logo-drop-icon"></div>
                </div>
                <div className="logo-text">
                  <h3 className="logo-title">FERROGUM</h3>
                  <p className="logo-slogan">FUERZA Y SALUD PARA EL PERÚ</p>
                </div>
              </div>
              <p className="footer-description">
                {t('footer.description')}
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contact.title')}</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>{t('footer.contact.phone')}</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>{t('footer.contact.email')}</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>{t('footer.contact.address')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} FERROGUM. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
