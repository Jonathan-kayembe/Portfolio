import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { personalData } from '../data/personalData'
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react'

const Education = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <Helmet>
        <title>{t('education.title')} - {personalData.name}</title>
        <meta name="description" content={t('education.title')} />
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
              {t('education.title')}
            </h1>
          </motion.div>

          {/* Education Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
          >
            {personalData.education.map((edu, index) => (
              <motion.div
                key={`education-${index}-${edu.period}`}
                variants={itemVariants}
                className="bg-dark-surface rounded-xl p-8 shadow-xl border border-primary-600/20 hover:border-primary-500/50 transition-all duration-300 card-hover"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <GraduationCap className="text-primary-400" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-light-text">
                      {index === 0 ? t('education.degree1') : t('education.degree2')}
                    </h3>
                    <div className="flex items-center space-x-2 text-primary-400 mb-2">
                      <BookOpen size={18} />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-light-secondary text-sm mb-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-primary-400" />
                      <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-light-secondary mt-4">
                  {index === 0 ? t('education.description1') : t('education.description2')}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Volunteer Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <Award className="text-primary-400 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-light-text">{t('volunteer.title')}</h2>
            </div>

            <div className="bg-dark-surface rounded-xl p-8 shadow-xl border border-primary-600/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-600/20 rounded-lg">
                  <BookOpen className="text-primary-400" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-light-text">
                    {t('volunteer.tutor.title')}
                  </h3>
                  <p className="text-light-secondary mb-4">
                    {t('volunteer.tutor.description')}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-primary-400" />
                    <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm font-medium">
                      {t('volunteer.tutor.period')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}

export default Education

