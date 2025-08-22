import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'

export const useTranslation = () => {
  const { currentLanguage } = useLanguage()

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return the key if translation not found
      }
    }
    
    return value || key
  }

  return { t, currentLanguage }
}
