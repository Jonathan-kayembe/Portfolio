import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../hooks/useLanguage'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSwitcher from './LanguageSwitcher'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/skills', label: t('nav.skills') },
    { path: '/education', label: t('nav.education') },
    { path: '/contact', label: t('nav.contact') },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-surface/95 backdrop-blur-md shadow-lg border-b border-primary-600/20'
          : 'bg-dark-surface/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">JK</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors neon-link ${
                  location.pathname === item.path
                    ? 'text-primary-400'
                    : 'text-light-text hover:text-primary-400'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-light-text hover:bg-primary-600/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary-600 text-white'
                    : 'text-light-text hover:bg-primary-600/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar

