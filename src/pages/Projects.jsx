import { useState, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useProjectTranslations } from '../hooks/useProjectTranslations'
import ProjectCard from '../components/ProjectCard'
import { Filter } from 'lucide-react'

/**
 * Page affichant tous les projets avec filtrage par technologie
 * @returns {JSX.Element} Composant Projects
 */
const Projects = () => {
  const { t } = useTranslation()
  const [selectedFilter, setSelectedFilter] = useState('all')
  const projects = useProjectTranslations()

  // Mémoriser les technologies uniques pour éviter les recalculs
  const allTechnologies = useMemo(() => {
    return [...new Set(projects.flatMap(project => project.technologies))]
  }, [projects])
  
  // Mémoriser les projets filtrés
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') {
      return projects
    }
    
    return projects.filter(project =>
      project.technologies.some(tech =>
        tech.toLowerCase().includes(selectedFilter.toLowerCase())
      ) || project.category === selectedFilter
    )
  }, [projects, selectedFilter])

  // Callback pour changer le filtre
  const handleFilterChange = useCallback((filterValue) => {
    setSelectedFilter(filterValue)
  }, [])

  // Mémoriser les options de filtre
  const filterOptions = useMemo(() => [
    { value: 'all', label: t('projects.all') },
    { value: 'web', label: t('projects.categories.web', { defaultValue: 'Web' }) },
    { value: 'mobile', label: t('projects.categories.mobile', { defaultValue: 'Mobile' }) },
    { value: 'database', label: t('projects.categories.database', { defaultValue: 'Database' }) },
    ...allTechnologies.slice(0, 5).map(tech => ({ value: tech, label: tech })),
  ], [t, allTechnologies])

  return (
    <>
      <Helmet>
        <title>Projets - Jonathan Tshibuyi Kayembe</title>
        <meta name="description" content="Découvrez mes projets de développement" />
      </Helmet>

      <div className="min-h-screen pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('projects.title')}
            </h1>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Filter className="text-primary-400 mr-2" size={20} />
              <span className="text-light-secondary text-sm">
                {t('projects.filter')}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange(option.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedFilter === option.value
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-dark-surface text-light-text hover:bg-primary-600/20 border border-primary-600/30'
                  }`}
                  aria-pressed={selectedFilter === option.value}
                  aria-label={`${t('projects.filter')}: ${option.label}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-light-secondary text-lg">
                {t('projects.noResults', { defaultValue: 'Aucun projet trouvé pour ce filtre.' })}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects

