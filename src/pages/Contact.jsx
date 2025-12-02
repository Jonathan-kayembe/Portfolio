import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { personalData } from '../data/personalData'
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../utils/constants'
import { validateForm } from '../utils/validators'
import { sanitizeInput } from '../utils/helpers'
import emailjs from '@emailjs/browser'
import { Send, Mail, Phone, MapPin, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react'

/**
 * Page de contact avec formulaire et informations
 * @returns {JSX.Element} Composant Contact
 */
const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Gère les changements dans les champs du formulaire
   * @param {Event} e - Événement de changement
   */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    const sanitizedValue = sanitizeInput(value)
    
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }))
    
    // Effacer l'erreur du champ modifié
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }, [formErrors])

  /**
   * Gère la soumission du formulaire
   * @param {Event} e - Événement de soumission
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })
    setFormErrors({})

    // Valider le formulaire
    const validation = validateForm(formData)
    if (!validation.isValid) {
      setFormErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    // Vérifier la configuration EmailJS
    if (!isEmailJSConfigured()) {
      setStatus({ 
        type: 'error', 
        message: t('contact.configError', { 
          defaultValue: 'Configuration EmailJS manquante. Veuillez configurer les variables d\'environnement.' 
        }) 
      })
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: sanitizeInput(formData.name),
          from_email: sanitizeInput(formData.email),
          message: sanitizeInput(formData.message),
          to_email: personalData.email,
        },
        EMAILJS_CONFIG.publicKey
      )

      setStatus({ type: 'success', message: t('contact.success') })
      setFormData({ name: '', email: '', message: '' })
      setFormErrors({})
    } catch (error) {
      // Ne logger qu'en développement
      if (import.meta.env.DEV) {
        console.error('EmailJS error:', error)
      }
      setStatus({ 
        type: 'error', 
        message: t('contact.error', { 
          defaultValue: 'Erreur lors de l\'envoi. Veuillez réessayer.' 
        }) 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-dark-surface rounded-xl p-6 shadow-lg border border-primary-600/20">
                <h2 className="text-2xl font-bold mb-6 text-light-text">
                  {t('contact.contactInfo')}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-light-secondary">{t('common.email')}</p>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-light-text hover:text-primary-400 transition-colors neon-link"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-light-secondary">{t('common.phone')}</p>
                      <a
                        href={`tel:${personalData.phone}`}
                        className="text-light-text hover:text-primary-400 transition-colors neon-link"
                      >
                        {personalData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-sm text-light-secondary">{t('common.location')}</p>
                      <p className="text-light-text">{personalData.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-primary-600/20">
                  <p className="text-sm text-light-secondary mb-4">{t('contact.socialMedia')}</p>
                  <div className="flex space-x-4">
                    <a
                      href={personalData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={personalData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="p-3 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-dark-surface rounded-xl p-6 shadow-lg border border-primary-600/20">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-light-text mb-2"
                    >
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border bg-dark-bg text-light-text focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${
                        formErrors.name ? 'border-red-500' : 'border-primary-600/30'
                      }`}
                      placeholder={t('contact.namePlaceholder')}
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                    {formErrors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-light-text mb-2"
                    >
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border bg-dark-bg text-light-text focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all ${
                        formErrors.email ? 'border-red-500' : 'border-primary-600/30'
                      }`}
                      placeholder={t('contact.emailPlaceholder')}
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-light-text mb-2"
                    >
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border bg-dark-bg text-light-text focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none ${
                        formErrors.message ? 'border-red-500' : 'border-primary-600/30'
                      }`}
                      placeholder={t('contact.messagePlaceholder')}
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                    />
                    {formErrors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {status.message && (
                    <div
                      className={`flex items-center space-x-2 p-4 rounded-lg ${
                        status.type === 'success'
                          ? 'bg-green-900/30 text-green-300 border border-green-500/30'
                          : 'bg-red-900/30 text-red-300 border border-red-500/30'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <p className="text-sm">{status.message}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="neon-button w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t('contact.sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>{t('contact.send')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

