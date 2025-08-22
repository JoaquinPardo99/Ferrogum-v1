import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es')

  const changeLanguage = (language) => {
    setCurrentLanguage(language)
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
