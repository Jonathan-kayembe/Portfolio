import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import { ThemeProvider } from './contexts/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy loading des pages pour améliorer les performances
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'))
const Skills = lazy(() => import('./pages/Skills'))
const Education = lazy(() => import('./pages/Education'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Composant de chargement
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark-bg">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
      <p className="text-light-secondary">Chargement...</p>
    </div>
  </div>
)

function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/project/:id" element={<ProjectDetails />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App

