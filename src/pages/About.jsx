import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { personalData } from '../data/personalData'
import { GraduationCap, Code, Users, Award } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <Helmet>
        <title>À propos - {personalData.name}</title>
        <meta name="description" content="En savoir plus sur Jonathan Tshibuyi Kayembe" />
      </Helmet>

      <div className="min-h-screen pt-20 md:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('about.title')}
            </h1>
          </motion.div>

          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="max-w-3xl mx-auto bg-dark-surface rounded-2xl p-8 shadow-lg border border-primary-600/20">
              <p className="text-lg text-light-text leading-relaxed">
                {t('about.bio')}
              </p>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="text-primary-400 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-light-text">{t('about.education')}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {personalData.education.map((edu, index) => (
                <motion.div
                  key={`education-${index}-${edu.period}`}
                  variants={itemVariants}
                  className="bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-primary-600/20 hover:border-primary-500/50"
                >
                  <h3 className="text-xl font-semibold mb-2 text-light-text">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-light-secondary text-sm mb-2">
                    {edu.location}
                  </p>
                  <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technical Skills */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Code className="text-primary-400 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-light-text">{t('about.skills')}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(personalData.skills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="bg-dark-surface rounded-xl p-6 shadow-lg border border-primary-600/20"
                >
                  <h3 className="font-semibold mb-3 text-light-text capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <ul className="space-y-2">
                    {skills.map((skill) => (
                      <li
                        key={`${category}-${skill}`}
                        className="text-sm text-light-secondary flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary-400 rounded-full mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Soft Skills */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Users className="text-primary-400 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-light-text">{t('about.softSkills')}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(t('skills.softSkills', { returnObjects: true }))
                .filter(([key]) => key !== 'title')
                .map(([key, skill], index) => (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  className="bg-dark-surface rounded-xl p-6 shadow-lg flex items-center space-x-3 hover:shadow-xl transition-shadow border border-primary-600/20"
                >
                  <Award className="text-primary-400 flex-shrink-0" size={24} />
                  <span className="text-light-text font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}

export default About

