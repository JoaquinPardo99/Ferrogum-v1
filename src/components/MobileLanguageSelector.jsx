import React from 'react'
import { Globe, Check } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const MobileLanguageSelector = ({ onLanguageChange }) => {
  const { currentLanguage, setLanguage } = useLanguage()

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' }
  ]

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode)
    if (onLanguageChange) {
      onLanguageChange()
    }
  }

  return (
    <div className="mobile-language-selector">
      <div className="mobile-language-title">
        <Globe className="language-icon" />
        <span>Idioma</span>
      </div>
      
      <div className="mobile-language-options">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            className={`mobile-language-option ${currentLanguage === language.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(language.code)}
          >
            <span className="name">{language.name}</span>
            {currentLanguage === language.code && (
              <Check size={20} className="check-mark" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MobileLanguageSelector
