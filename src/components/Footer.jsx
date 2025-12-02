import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { personalData } from '../data/personalData'
import { Linkedin, Mail, Github, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-dark-surface border-t border-primary-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">
              {personalData.name}
            </h3>
            <p className="text-light-secondary text-sm">
              {t('about.bio')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-text">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-light-secondary hover:text-primary-400 transition-colors neon-link">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-light-secondary hover:text-primary-400 transition-colors neon-link">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-light-secondary hover:text-primary-400 transition-colors neon-link">
                  {t('nav.skills')}
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-light-secondary hover:text-primary-400 transition-colors neon-link">
                  {t('nav.education')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-secondary hover:text-primary-400 transition-colors neon-link">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-text">{t('contact.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-light-secondary">
                <Phone size={18} />
                <a href={`tel:${personalData.phone}`} className="hover:text-primary-400 transition-colors neon-link">
                  {personalData.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-light-secondary">
                <Mail size={18} />
                <a href={`mailto:${personalData.email}`} className="hover:text-primary-400 transition-colors neon-link">
                  {personalData.email}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-light-secondary">
                <MapPin size={18} />
                <span>{personalData.location}</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-600/20 mt-8 pt-8 text-center text-light-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} {personalData.name}. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

