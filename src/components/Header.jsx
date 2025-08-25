import React from 'react'
import { Menu, X } from 'lucide-react'
import LanguageDropdown from './LanguageDropdown'
import MobileLanguageSelector from './MobileLanguageSelector'
import HeartGummyLogo from './HeartGummyLogo'
import { useTranslation } from '../hooks/useTranslation'
import { useMenu } from '../contexts/MenuContext'

const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu()
  const { t } = useTranslation()

  const handleMobileNavClick = (e, section) => {
    e.preventDefault()
    closeMenu()
    
    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }



  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <div className="logo-container">
              <div className="logo-icon">
                <HeartGummyLogo size={60} />
              </div>
              <div className="logo-text">
                <h2 className="logo-title">FERROGUM</h2>
                <p className="logo-slogan">FUERZA Y SALUD PARA EL PERÚ</p>
              </div>
            </div>
          </div>

          <nav className="nav-desktop">
            <ul className="nav-links">
              <li><a href="#inicio">{t('header.home')}</a></li>
              <li><a href="#nosotros">{t('header.about')}</a></li>
              <li><a href="#productos">{t('header.products')}</a></li>
              <li><a href="#beneficios">{t('header.benefits')}</a></li>
              <li><a href="#contacto">{t('header.contact')}</a></li>
            </ul>
          </nav>

          <LanguageDropdown />

          <button 
            type="button"
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-mobile-links">
            <li>
              <button 
                type="button"
                className="nav-mobile-link" 
                onClick={(e) => handleMobileNavClick(e, 'inicio')}
              >
{t('header.home')}
              </button>
            </li>
            <li>
              <button 
                type="button"
                className="nav-mobile-link" 
                onClick={(e) => handleMobileNavClick(e, 'nosotros')}
              >
{t('header.about')}
              </button>
            </li>
            <li>
              <button 
                type="button"
                className="nav-mobile-link" 
                onClick={(e) => handleMobileNavClick(e, 'productos')}
              >
{t('header.products')}
              </button>
            </li>
            <li>
              <button 
                type="button"
                className="nav-mobile-link" 
                onClick={(e) => handleMobileNavClick(e, 'beneficios')}
              >
{t('header.benefits')}
              </button>
            </li>
            <li>
              <button 
                type="button"
                className="nav-mobile-link" 
                onClick={(e) => handleMobileNavClick(e, 'contacto')}
              >
{t('header.contact')}
              </button>
            </li>
          </ul>
          
          <div className="nav-mobile-divider"></div>
          
          <MobileLanguageSelector onLanguageChange={() => closeMenu()} />
        </nav>
      </div>
    </header>
  )
}

export default Header
