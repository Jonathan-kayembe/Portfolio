import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'

/**
 * Hook personnalisé pour obtenir les projets avec leurs traductions
 * @returns {Array<Object>} Tableau de projets traduits selon la langue actuelle
 * @example
 * const projects = useProjectTranslations()
 * // Retourne les projets avec title et description traduits
 */
export const useProjectTranslations = () => {
  const { t } = useTranslation()

  const translatedProjects = useMemo(() => {
    return projects.map((project) => {
      const translationKey = project.translationKey
      
      if (translationKey) {
        return {
          ...project,
          title: t(`projects.items.${translationKey}.title`, { defaultValue: project.title }),
          description: t(`projects.items.${translationKey}.description`, { defaultValue: project.description }),
        }
      }

      return project
    })
  }, [t])

  return translatedProjects
}

