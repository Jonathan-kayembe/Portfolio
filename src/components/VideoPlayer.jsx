import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

/**
 * Composant vidéo avec contrôle au clic
 * Affiche un overlay play/pause et permet de contrôler la vidéo en cliquant dessus
 */
const VideoPlayer = ({ src, poster, title, className = '' }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  /**
   * Fonction de gestion du clic sur la vidéo
   * Alterne entre play et pause
   */
  const handleVideoClick = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        } else {
          // La méthode play() retourne une Promise
          await videoRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.error('Erreur lors de la lecture de la vidéo:', error)
        console.error('Chemin vidéo:', src)
        console.error('État vidéo:', {
          readyState: videoRef.current.readyState,
          networkState: videoRef.current.networkState,
          error: videoRef.current.error
        })
      }
    }
  }

  /**
   * Gestion des événements de la vidéo
   */
  const handlePlay = () => {
    console.log('Vidéo en lecture:', src)
    setIsPlaying(true)
  }
  const handlePause = () => {
    console.log('Vidéo en pause:', src)
    setIsPlaying(false)
  }
  const handleEnded = () => {
    console.log('Vidéo terminée:', src)
    setIsPlaying(false)
  }
  const handleLoadedData = () => {
    console.log('Vidéo chargée:', src)
    setIsLoading(false)
  }
  const handleCanPlay = () => {
    console.log('Vidéo prête à jouer:', src)
    setIsLoading(false)
  }
  const handleLoadStart = () => {
    console.log('Début du chargement vidéo:', src)
    setIsLoading(true)
  }

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-2xl ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        loop={false}
        crossOrigin="anonymous"
        className="w-full cursor-pointer"
        onClick={handleVideoClick}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onLoadedData={handleLoadedData}
        onCanPlay={handleCanPlay}
        onLoadStart={handleLoadStart}
        onError={(e) => {
          const error = videoRef.current?.error
          console.error('Erreur de chargement vidéo:', e)
          console.error('Chemin vidéo:', src)
          console.error('Code erreur:', error?.code)
          console.error('Message erreur:', error?.message)
          console.error('ReadyState:', videoRef.current?.readyState)
          console.error('NetworkState:', videoRef.current?.networkState)
          
          // Afficher un message d'erreur plus détaillé
          let errorMessage = 'Impossible de charger la vidéo'
          if (error) {
            switch (error.code) {
              case 1: // MEDIA_ERR_ABORTED
                errorMessage = 'Chargement interrompu'
                break
              case 2: // MEDIA_ERR_NETWORK
                errorMessage = 'Erreur réseau - Vérifiez votre connexion'
                break
              case 3: // MEDIA_ERR_DECODE
                errorMessage = 'Erreur de décodage - Format non supporté'
                break
              case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
                errorMessage = 'Format vidéo non supporté'
                break
            }
          }
          setHasError(true)
          setIsLoading(false)
        }}
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Message d'erreur */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
          <div className="text-center text-white p-4 max-w-md">
            <p className="text-lg font-semibold mb-2">Erreur de chargement</p>
            <p className="text-sm opacity-75 mb-4">
              {videoRef.current?.error 
                ? (() => {
                    const error = videoRef.current.error
                    switch (error.code) {
                      case 1: return 'Chargement interrompu'
                      case 2: return 'Erreur réseau - Vérifiez votre connexion'
                      case 3: return 'Erreur de décodage - Format non supporté'
                      case 4: return 'Format vidéo non supporté'
                      default: return 'Impossible de charger la vidéo'
                    }
                  })()
                : 'Impossible de charger la vidéo'
              }
            </p>
            <p className="text-xs mt-2 opacity-50 break-all">{src}</p>
            <button
              onClick={() => {
                setHasError(false)
                setIsLoading(true)
                if (videoRef.current) {
                  videoRef.current.load()
                }
              }}
              className="mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-sm transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      )}

      {/* Indicateur de chargement */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-15">
          <div className="text-white">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm">Chargement...</p>
          </div>
        </div>
      )}

      {/* Overlay avec bouton Play (quand vidéo en pause) */}
      {!isPlaying && !isLoading && !hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 cursor-pointer"
          onClick={handleVideoClick}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white/90 dark:bg-gray-800/90 rounded-full p-6 shadow-2xl"
          >
            <Play className="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </motion.div>
        </motion.div>
      )}

      {/* Bouton Pause (quand vidéo joue) */}
      {isPlaying && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleVideoClick}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-3 z-10 transition-colors"
          aria-label="Pause"
        >
          <Pause className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </div>
  )
}

export default VideoPlayer

