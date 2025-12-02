import { useState, useCallback } from 'react'

export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'success', duration = 5000) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, type, duration }])
    return id
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showSuccess = useCallback((message, duration = 5000) => {
    return addToast(message, 'success', duration)
  }, [addToast])

  const showError = useCallback((message, duration = 5000) => {
    return addToast(message, 'error', duration)
  }, [addToast])

  return {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
  }
}

