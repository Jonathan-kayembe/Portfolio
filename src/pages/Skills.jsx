import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { personalData } from '../data/personalData'
import { techIcons } from '../data/projects'
import SkillCard from '../components/SkillCard'
import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaDatabase,
  FaTools,
  FaServer,
  FaGitAlt,
  FaShieldAlt,
} from 'react-icons/fa'

/**
 * Page affichant toutes les compétences par catégorie
 * @returns {JSX.Element} Composant Skills
 */
const Skills = () => {
  const { t } = useTranslation()

  const colorClasses = {
    blue: 'text-primary-400',
    purple: 'text-purple-400',
    green: 'text-green-400',
    orange: 'text-orange-400',
    pink: 'text-pink-400',
    indigo: 'text-indigo-400',
    red: 'text-red-400',
    yellow: 'text-yellow-400',
  }

  // Mémoriser les catégories de compétences pour éviter les recalculs
  const skillCategories = useMemo(() => [
    {
      title: t('skills.programming'),
      icon: FaCode,
      skills: personalData.skills.programming,
      color: 'blue',
    },
    {
      title: t('skills.web'),
      icon: FaGlobe,
      skills: personalData.skills.web,
      color: 'purple',
    },
    {
      title: t('skills.mobile'),
      icon: FaMobileAlt,
      skills: personalData.skills.mobile,
      color: 'green',
    },
    {
      title: t('skills.databases'),
      icon: FaDatabase,
      skills: personalData.skills.databases,
      color: 'orange',
    },
    {
      title: t('skills.tools'),
      icon: FaTools,
      skills: personalData.skills.tools,
      color: 'pink',
    },
    {
      title: t('skills.os'),
      icon: FaServer,
      skills: personalData.skills.os,
      color: 'indigo',
    },
    {
      title: t('skills.versionControl'),
      icon: FaGitAlt,
      skills: personalData.skills.versionControl,
      color: 'red',
    },
    {
      title: t('skills.cybersecurity'),
      icon: FaShieldAlt,
      skills: personalData.skills.cybersecurity,
      color: 'yellow',
    },
  ], [t])

  /**
   * Récupère l'icône d'une compétence
   * @param {string} skill - Nom de la compétence
   * @returns {string|null} URL de l'icône ou null
   */
  const getSkillIcon = (skill) => {
    return techIcons[skill] || null
  }

  return (
    <>
      <Helmet>
        <title>Compétences - Jonathan Tshibuyi Kayembe</title>
        <meta name="description" content="Mes compétences techniques" />
      </Helmet>

      <div className="min-h-screen pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('skills.title')}
            </h1>
          </motion.div>

          {/* Skills by Category */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <category.icon
                  className={`${colorClasses[category.color]} mr-3`}
                  size={32}
                />
                <h2 className="text-2xl md:text-3xl font-bold text-light-text">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const icon = getSkillIcon(skill)
                  return (
                    <SkillCard
                      key={skill}
                      skill={skill}
                      icon={icon}
                      index={skillIndex}
                    />
                  )
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills

