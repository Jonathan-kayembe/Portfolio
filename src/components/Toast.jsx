import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, X } from 'lucide-react'

const Toast = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: -20, x: '-50%' }}
      className="fixed top-4 left-1/2 z-50 transform -translate-x-1/2"
    >
      <div
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg border min-w-[300px] max-w-md ${
          type === 'success'
            ? 'bg-green-900/90 text-green-100 border-green-500/30'
            : 'bg-red-900/90 text-red-100 border-red-500/30'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle size={20} className="flex-shrink-0" />
        ) : (
          <AlertCircle size={20} className="flex-shrink-0" />
        )}
        <span className="text-sm font-medium flex-1">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 hover:opacity-70 transition-opacity flex-shrink-0"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>
    </motion.div>
  )
}

export const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <AnimatePresence>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
          duration={toast.duration}
        />
      ))}
    </AnimatePresence>
  )
}

