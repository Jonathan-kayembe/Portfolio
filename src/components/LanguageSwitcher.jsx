import { useLanguage } from '../hooks/useLanguage'
import { motion } from 'framer-motion'

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage()

  const toggleLanguage = () => {
    changeLanguage(currentLanguage === 'fr' ? 'en' : 'fr')
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-dark-surface text-light-text hover:bg-primary-600 transition-colors font-medium text-sm border border-primary-600/30"
      aria-label="Toggle language"
    >
      {currentLanguage === 'fr' ? 'EN' : 'FR'}
    </motion.button>
  )
}

export default LanguageSwitcher

