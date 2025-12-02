import React from 'react'
import { useTranslation } from 'react-i18next'
import { AlertCircle, RefreshCw } from 'lucide-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorKey: 0 }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Logger l'erreur seulement en développement
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  handleReset = () => {
    // Réinitialiser l'état et forcer un remontage complet
    this.setState({ 
      hasError: false, 
      error: null,
      errorKey: this.state.errorKey + 1 
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onReset={this.handleReset} />
    }

    // Utiliser la clé pour forcer un remontage en cas d'erreur précédente
    return <div key={this.state.errorKey}>{this.props.children}</div>
  }
}

const ErrorFallback = ({ onReset }) => {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="text-center p-8 bg-dark-surface rounded-xl border border-primary-600/20 max-w-md mx-4">
        <AlertCircle className="mx-auto text-red-400 mb-4" size={48} />
        <h2 className="text-2xl font-bold text-light-text mb-4">
          {t('error.title', { defaultValue: 'Une erreur est survenue' })}
        </h2>
        <p className="text-light-secondary mb-6">
          {t('error.message', { defaultValue: 'Veuillez rafraîchir la page ou réessayer plus tard.' })}
        </p>
        <button
          onClick={onReset}
          className="neon-button flex items-center space-x-2 mx-auto"
          aria-label="Retry"
        >
          <RefreshCw size={20} />
          <span>{t('error.retry', { defaultValue: 'Réessayer' })}</span>
        </button>
      </div>
    </div>
  )
}

export default ErrorBoundary

