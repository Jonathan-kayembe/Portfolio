export const APP_CONFIG = {
  name: 'Jonathan Tshibuyi Kayembe',
  version: '1.0.0',
  email: 'jkayembe12@yahoo.com',
  phone: '343-558-6755',
  location: 'Ottawa, ON, Canada',
  linkedin: 'https://www.linkedin.com/in/jonathan-kayembe-02a4a6377',
  github: 'https://github.com', // TODO: Remplacer par le vrai lien GitHub
}

/**
 * Configuration EmailJS
 * @type {Object}
 * @property {string} serviceId - ID du service EmailJS
 * @property {string} templateId - ID du template EmailJS
 * @property {string} publicKey - Clé publique EmailJS
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

/**
 * Vérifie si la configuration EmailJS est valide
 * @returns {boolean} True si la configuration est valide
 */
export const isEmailJSConfigured = () => {
  return !!(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey &&
    EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY'
  )
}

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
}

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

export const CV_FILENAME = 'CV_Jonathan_Tshibuyi_Kayembe.pdf'

