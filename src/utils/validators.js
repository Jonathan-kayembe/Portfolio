export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email.trim())
}

export const validatePhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false
  const re = /^[\d\s\-\+\(\)]+$/
  const digitsOnly = phone.replace(/\D/g, '')
  return re.test(phone) && digitsOnly.length >= 10
}

export const validateMessage = (message, minLength = 10, maxLength = 1000) => {
  if (!message || typeof message !== 'string') return false
  const trimmed = message.trim()
  return trimmed.length >= minLength && trimmed.length <= maxLength
}

export const validateName = (name, minLength = 2, maxLength = 100) => {
  if (!name || typeof name !== 'string') return false
  const trimmed = name.trim()
  return trimmed.length >= minLength && trimmed.length <= maxLength
}

/**
 * Valide tous les champs du formulaire de contact
 * @param {Object} formData - Données du formulaire
 * @param {string} formData.name - Nom de l'utilisateur
 * @param {string} formData.email - Email de l'utilisateur
 * @param {string} formData.message - Message de l'utilisateur
 * @returns {Object} Objet avec isValid (boolean) et errors (object)
 */
export const validateForm = (formData) => {
  const errors = {}

  if (!validateName(formData.name)) {
    errors.name = 'Le nom doit contenir entre 2 et 100 caractères'
  }

  if (!validateEmail(formData.email)) {
    errors.email = 'Email invalide'
  }

  if (!validateMessage(formData.message)) {
    errors.message = 'Le message doit contenir entre 10 et 1000 caractères'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

