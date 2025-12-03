import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { personalData } from '../data/personalData'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

/**
 * Page de contact avec informations
 * @returns {JSX.Element} Composant Contact
 */
const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Contact - Jonathan Tshibuyi Kayembe</title>
        <meta name="description" content="Contactez-moi pour toute opportunité" />
      </Helmet>

      <div className="min-h-screen pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-light-secondary">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-dark-surface rounded-xl p-8 shadow-lg border border-primary-600/20">
              <h2 className="text-2xl font-bold mb-8 text-light-text text-center">
                {t('contact.contactInfo')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-primary-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-light-secondary mb-1">{t('common.email')}</p>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-light-text hover:text-primary-400 transition-colors neon-link text-lg"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-primary-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-light-secondary mb-1">{t('common.phone')}</p>
                    <a
                      href={`tel:${personalData.phone}`}
                      className="text-light-text hover:text-primary-400 transition-colors neon-link text-lg"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-light-secondary mb-1">{t('common.location')}</p>
                    <p className="text-light-text text-lg">{personalData.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-primary-600/20">
                <p className="text-sm text-light-secondary mb-6 text-center">{t('contact.socialMedia')}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="p-3 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Contact

