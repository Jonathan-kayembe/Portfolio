export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const throttle = (func, limit) => {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export const formatDate = (date, locale = 'fr-FR') => {
  if (!date) return ''
  try {
    return new Date(date).toLocaleDateString(locale)
  } catch {
    return date
  }
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const isExternalLink = (url) => {
  if (!url || typeof url !== 'string') return false
  return url.startsWith('http://') || url.startsWith('https://')
}

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return ''
  return input.trim().replace(/[<>]/g, '')
}

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

