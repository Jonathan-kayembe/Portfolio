import { useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Code2, Server, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import { useProjectTranslations } from '../hooks/useProjectTranslations'
import { techIcons } from '../data/projects'

/**
 * Page de détails d'un projet
 * Affiche toutes les informations détaillées d'un projet sélectionné
 * @returns {JSX.Element} Composant ProjectDetails
 */
const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const translatedProjects = useProjectTranslations()
  
  // Trouver le projet correspondant à l'ID
  const project = translatedProjects.find(p => p.id === parseInt(id))
  
  // Si le projet n'existe pas, rediriger vers la page projets
  useEffect(() => {
    if (!project) {
      navigate('/projects')
    }
  }, [project, navigate])

  if (!project) {
    return null
  }

  // Récupérer les données complètes du projet depuis le fichier original
  const fullProjectData = projects.find(p => p.id === project.id)

  return (
    <>
      <Helmet>
        <title>{project.title} - Jonathan Tshibuyi Kayembe</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="min-h-screen pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Bouton retour */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-light-secondary hover:text-primary-400 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>{t('projectDetails.backToProjects', { defaultValue: 'Retour aux projets' })}</span>
            </Link>
          </motion.div>

          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1200x600/0E1A36/3B82F6?text=Project+Image'
              }}
            />
          </motion.div>

          {/* Titre et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {project.title}
            </h1>
            <p className="text-lg text-light-secondary leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Technologies utilisées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-light-text">
              {t('projectDetails.technologies', { defaultValue: 'Technologies utilisées' })}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center space-x-2 px-4 py-2 bg-dark-surface rounded-lg border border-primary-600/30 hover:border-primary-400/60 transition-all duration-300"
                >
                  {techIcons[tech] && (
                    <img
                      src={techIcons[tech]}
                      alt={tech}
                      className="w-5 h-5"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  )}
                  <span className="text-light-text font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fonctionnalités principales */}
          {fullProjectData?.features && fullProjectData.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-light-text">
                {t('projectDetails.features', { defaultValue: 'Fonctionnalités principales' })}
              </h2>
              <ul className="space-y-3">
                {fullProjectData.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 text-light-secondary"
                  >
                    <span className="text-primary-400 mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Challenges et solutions */}
          {fullProjectData?.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-light-text">
                {t('projectDetails.challenges', { defaultValue: 'Challenges et solutions' })}
              </h2>
              <div className="bg-dark-surface rounded-lg p-6 border border-primary-600/20">
                <p className="text-light-secondary leading-relaxed">
                  {fullProjectData.challenges}
                </p>
              </div>
            </motion.div>
          )}

          {/* Vidéos de démo */}
          {fullProjectData?.demoVideos && fullProjectData.demoVideos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-light-text">
                {t('projectDetails.demoVideos', { defaultValue: 'Vidéos de démonstration' })}
              </h2>
              <div className="space-y-8">
                {fullProjectData.demoVideos.map((video, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-light-text">
                      {video.title}
                    </h3>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                      <video
                        controls
                        className="w-full"
                        poster={project.image}
                      >
                        <source src={video.path} type="video/mp4" />
                        <source src={video.path} type="video/webm" />
                        {t('projectDetails.videoNotSupported', { defaultValue: 'Votre navigateur ne supporte pas la lecture de vidéos.' })}
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Vidéo de démo unique (pour compatibilité avec les autres projets) */}
          {fullProjectData?.demoVideo && !fullProjectData?.demoVideos && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-light-text">
                {t('projectDetails.demoVideo', { defaultValue: 'Vidéo de démonstration' })}
              </h2>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <video
                  controls
                  className="w-full"
                  poster={project.image}
                >
                  <source src={fullProjectData.demoVideo} type="video/mp4" />
                  <source src={fullProjectData.demoVideo} type="video/webm" />
                  {t('projectDetails.videoNotSupported', { defaultValue: 'Votre navigateur ne supporte pas la lecture de vidéos.' })}
                </video>
              </div>
            </motion.div>
          )}

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            {fullProjectData?.demoLink && fullProjectData.demoLink !== '#' && (
              <a
                href={fullProjectData.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-all duration-300 font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105"
              >
                <ExternalLink size={20} />
                <span>{t('projectDetails.viewDemo', { defaultValue: 'Voir la démo' })}</span>
              </a>
            )}

            {fullProjectData?.frontendCodeLink && fullProjectData.frontendCodeLink !== '#' && (
              <a
                href={fullProjectData.frontendCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-dark-surface text-light-text rounded-lg hover:bg-primary-600/20 transition-all duration-300 font-medium border border-primary-600/30 hover:border-primary-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-105"
              >
                <Code2 size={20} />
                <span>{t('projectDetails.viewFrontendCode', { defaultValue: 'Code Frontend' })}</span>
              </a>
            )}

            {fullProjectData?.backendCodeLink && fullProjectData.backendCodeLink !== '#' && (
              <a
                href={fullProjectData.backendCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-dark-surface text-light-text rounded-lg hover:bg-primary-600/20 transition-all duration-300 font-medium border border-primary-600/30 hover:border-primary-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:scale-105"
              >
                <Server size={20} />
                <span>{t('projectDetails.viewBackendCode', { defaultValue: 'Code Backend' })}</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails

