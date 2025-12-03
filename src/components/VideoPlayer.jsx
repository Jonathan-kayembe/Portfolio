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

  /**
   * Fonction de gestion du clic sur la vidéo
   * Alterne entre play et pause
   */
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  /**
   * Gestion des événements de la vidéo
   */
  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)
  const handleEnded = () => setIsPlaying(false)

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-2xl ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        loop={false}
        className="w-full cursor-pointer"
        onClick={handleVideoClick}
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onError={(e) => {
          console.error('Erreur de chargement vidéo:', e)
          console.error('Chemin vidéo:', src)
        }}
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Overlay avec bouton Play (quand vidéo en pause) */}
      {!isPlaying && (
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

