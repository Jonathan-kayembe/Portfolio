import { memo } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

/**
 * Composant carte de projet avec animation et liens
 * @param {Object} props - Props du composant
 * @param {Object} props.project - Données du projet
 * @param {number} props.index - Index pour l'animation
 * @returns {JSX.Element} Composant ProjectCard
 */
const ProjectCard = ({ project, index }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleCardClick = (e) => {
    // Ne pas naviguer si on clique sur les liens
    if (e.target.closest('a')) {
      return
    }
    navigate(`/project/${project.id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: -5,
        scale: 1.02,
      }}
      onClick={handleCardClick}
      className="group relative bg-dark-surface rounded-xl overflow-hidden transition-all duration-500 border border-primary-600/20 card-3d cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleCardClick(e)
        }
      }}
      aria-label={`${t('projects.viewDetails', { defaultValue: 'Voir les détails de' })} ${project.title}`}
    >
      {/* Neon glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none neon-glow-strong" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-xl border-2 border-primary-400/0 group-hover:border-primary-400/50 transition-all duration-500 pointer-events-none" 
           style={{
             boxShadow: '0 0 20px rgba(59, 130, 246, 0)',
           }}
      />
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x400/0E1A36/3B82F6?text=Project+Image'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-light-text">
          {project.title}
        </h3>
        <p className="text-light-secondary mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-3 mb-4 justify-center sm:justify-start">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary-600/20 text-primary-300 rounded-lg border border-primary-500/30 group-hover:border-primary-400/60 group-hover:bg-primary-600/30 group-hover:text-primary-200 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {project.demoLink && project.demoLink !== '#' && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-all duration-300 text-sm font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105"
              aria-label={`${t('projects.viewDemo')} - ${project.title}`}
            >
              <ExternalLink size={16} aria-hidden="true" className="group-hover:animate-pulse" />
              <span>{t('projects.viewDemo')}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    codeLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default memo(ProjectCard)

