import { memo } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

/**
 * Composant carte de compétence avec icône
 * @param {Object} props - Props du composant
 * @param {string} props.skill - Nom de la compétence
 * @param {string|JSX.Element} props.icon - Icône ou URL de l'icône
 * @param {number} props.index - Index pour l'animation
 * @returns {JSX.Element} Composant SkillCard
 */
const SkillCard = ({ skill, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.1, 
        y: -10,
        rotateY: 5,
        rotateX: 5,
      }}
      className="group relative bg-dark-surface rounded-lg p-4 sm:p-6 shadow-md transition-all duration-500 flex flex-col items-center text-center border border-primary-600/20 card-3d min-w-0"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Neon glow on hover */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none neon-glow" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg border-2 border-primary-400/0 group-hover:border-primary-400/60 transition-all duration-500 pointer-events-none" />
      {icon && (
        <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">
          {typeof icon === 'string' ? (
            <img 
              src={icon} 
              alt={skill} 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300" 
            />
          ) : (
            <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              {icon}
            </div>
          )}
        </div>
      )}
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-light-text relative z-10 group-hover:text-primary-300 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] break-words">
        {skill}
      </h3>
    </motion.div>
  )
}

SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  index: PropTypes.number.isRequired,
}

export default memo(SkillCard)

