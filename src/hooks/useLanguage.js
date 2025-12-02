import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export const useLanguage = () => {
  const { i18n, t } = useTranslation()

  // Mettre à jour la langue HTML dynamiquement
  useEffect(() => {
    const lang = i18n.language || 'fr'
    document.documentElement.lang = lang
  }, [i18n.language])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const currentLanguage = i18n.language

  return {
    t,
    changeLanguage,
    currentLanguage,
    language: currentLanguage,
  }
}

