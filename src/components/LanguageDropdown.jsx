import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, Check } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import FlagIcon from './FlagIcon'

const LanguageDropdown = () => {
  const { currentLanguage, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const dropdownMenuRef = useRef(null)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })

  const languages = [
    { code: 'es', name: 'Español', flagCode: 'PE' },
    { code: 'en', name: 'English', flagCode: 'US' },
    { code: 'zh', name: '中文', flagCode: 'CN' }
  ]

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideTrigger = dropdownRef.current && dropdownRef.current.contains(event.target)
      const isClickInsideMenu = dropdownMenuRef.current && dropdownMenuRef.current.contains(event.target)
      
      if (!isClickInsideTrigger && !isClickInsideMenu) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode)
    setIsOpen(false)
  }

  const handleToggleDropdown = () => {
    if (!isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.right - 140 // 140px es el min-width del dropdown
      })
    }
    setIsOpen(!isOpen)
  }

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="language-dropdown-trigger"
        onClick={handleToggleDropdown}
      >
        <div className="current-language">
          <span className="flag">
            <FlagIcon country={currentLang?.flagCode} size={16} />
          </span>
          <span className="name">{currentLang?.name}</span>
        </div>
        <ChevronDown size={16} className="chevron" />
      </button>

      {isOpen && createPortal(
        <div 
          ref={dropdownMenuRef}
          className="language-dropdown-menu"
          style={{
            position: 'fixed',
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            zIndex: 1002
          }}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              className={`language-dropdown-item ${currentLanguage === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="flag">
                <FlagIcon country={language.flagCode} size={16} />
              </span>
              <span className="name">{language.name}</span>
              {currentLanguage === language.code && (
                <Check size={16} className="check-mark" />
              )}
            </button>
          ))}
        </div>,
        document.body
      )}
    </div>
  )
}

export default LanguageDropdown
