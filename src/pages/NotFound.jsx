import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>404 - {t('notFound.title', { defaultValue: 'Page non trouvée' })}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen pt-20 md:pt-32 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-light-text mb-4">
              {t('notFound.title', { defaultValue: 'Page non trouvée' })}
            </h2>
            <p className="text-light-secondary text-lg mb-8">
              {t('notFound.message', { defaultValue: 'La page que vous recherchez n\'existe pas ou a été déplacée.' })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="neon-button flex items-center justify-center space-x-2"
              >
                <Home size={20} />
                <span>{t('notFound.home', { defaultValue: 'Retour à l\'accueil' })}</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-dark-surface text-light-text border-2 border-primary-600 rounded-lg font-semibold hover:border-primary-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>{t('notFound.back', { defaultValue: 'Retour' })}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default NotFound

