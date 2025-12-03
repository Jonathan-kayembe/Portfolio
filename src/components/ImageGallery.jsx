import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Composant galerie d'images avec lightbox
 * Affiche les images en grille et permet de les agrandir au clic avec navigation
 */
const ImageGallery = ({ images, title, className = '' }) => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    setSelectedIndex(null)
    document.body.style.overflow = 'unset'
  }, [])

  const goToPrevious = useCallback(() => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === null) return prevIndex
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1
    })
  }, [images.length])

  const goToNext = useCallback(() => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === null) return prevIndex
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1
    })
  }, [images.length])

  // Gestion du clavier pour la navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeLightbox, goToPrevious, goToNext])

  const openLightbox = (index) => {
    setSelectedIndex(index)
    setIsOpen(true)
    // Empêcher le scroll du body quand le lightbox est ouvert
    document.body.style.overflow = 'hidden'
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={className}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-light-text">
          {title}
        </h3>
      )}

      {/* Grille de miniatures */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <img
              src={`${import.meta.env.BASE_URL}${image.path}`}
              alt={image.alt || `Image ${index + 1}`}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            {/* Overlay au survol */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                  <ChevronRight className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Bouton précédent */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Image agrandie */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${import.meta.env.BASE_URL}${images[selectedIndex].path}`}
                alt={images[selectedIndex].alt || `Image ${selectedIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Bouton suivant */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Compteur d'images */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm font-medium">
                  {selectedIndex + 1} / {images.length}
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ImageGallery

