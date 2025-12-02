import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-dark-surface text-light-text hover:bg-primary-600 transition-colors border border-primary-600/30"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )
}

export default ThemeSwitcher

