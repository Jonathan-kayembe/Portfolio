import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { personalData } from '../data/personalData'
import { Download, ArrowRight, Mouse } from 'lucide-react'

const Home = () => {
  const { t } = useTranslation()
  const particlesRef = useRef(null)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const skills = t('home.typing', { returnObjects: true })

  useEffect(() => {
    // Enhanced particles effect with connections
    const canvas = particlesRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 80
    const connectionDistance = 150

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    let animationId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.shadowBlur = 10
        ctx.shadowColor = 'rgba(59, 130, 246, 0.8)'
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.2
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Typing animation effect
  useEffect(() => {
    if (!skills || !Array.isArray(skills) || skills.length === 0) return
    
    const currentSkill = skills[currentSkillIndex]
    if (!currentSkill) return
    
    const speed = isDeleting ? 50 : 100

    if (!isDeleting && displayText === currentSkill) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
    } else {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1)
          } else {
            return currentSkill.slice(0, prev.length + 1)
          }
        })
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [displayText, isDeleting, currentSkillIndex, skills])

  /**
   * Télécharge le CV en PDF
   */
  const downloadCV = useCallback(() => {
    try {
      const link = document.createElement('a')
      link.href = '/CV.pdf'
      link.download = 'CV_Jonathan_Tshibuyi_Kayembe.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error downloading CV:', error)
      }
      // Fallback: ouvrir dans un nouvel onglet
      window.open('/CV.pdf', '_blank')
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>{personalData.name} - Portfolio</title>
        <meta name="description" content={t('home.subtitle')} />
      </Helmet>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="parallax-bg" />
        
        {/* Animated Background with particles */}
        <canvas
          ref={particlesRef}
          className="absolute inset-0 opacity-30"
          aria-hidden="true"
        />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-primary-600/10 animate-gradient" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text animate-glow-strong">{personalData.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-light-secondary mb-8"
            >
              {t('home.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-12 min-h-[2rem]"
            >
              <span className="text-light-text">{t('home.knowledgePrefix')} </span>
              <span className="text-primary-400 font-semibold animate-neon-pulse">
                {displayText}
                <span className="animate-pulse inline-block ml-1">|</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/projects"
                className="neon-button group flex items-center space-x-2"
              >
                <span>{t('home.seeProjects')}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

              <button
                onClick={downloadCV}
                className="group px-8 py-4 bg-dark-surface text-light-text border-2 border-primary-600 rounded-lg font-semibold hover:border-primary-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 hover:neon-glow"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>{t('home.downloadCV')}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-light-secondary"
            >
              <span className="text-sm mb-2">{t('home.scroll', { defaultValue: 'Scroll' })}</span>
              <Mouse size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Home

