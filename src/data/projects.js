import { FaReact, FaVuejs, FaJava, FaDatabase, FaMobileAlt } from 'react-icons/fa'

/**
 * Liste des projets du portfolio
 * Les titres et descriptions sont traduits via useProjectTranslations hook
 * @type {Array<Object>}
 */
export const projects = [
  {
    id: 1,
    translationKey: 'ecommerce',
    title: 'E-Commerce de Menuiserie Artisanale',
    description: 'Application e-commerce complète full-stack pour une menuiserie artisanale...',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800',
    technologies: ['React', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Axios', 'React Router', 'Vite'],
    category: 'web',
    codeLink: 'https://github.com/Jonathan-kayembe/E-Commerce-de-Menuiserie-Artisanale',
    demoLink: '#',
    frontendCodeLink: 'https://github.com/Jonathan-kayembe/E-Commerce-de-Menuiserie-Artisanale',
    backendCodeLink: 'https://github.com/Jonathan-kayembe/E-Commerce-de-Menuiserie-Artisanale',
    icon: FaDatabase,
    features: [
      'Deux interfaces distinctes : client (achat) et manager (administration)',
      'Authentification sécurisée',
      'Catalogue complet',
      'Panier persistant',
      'Système de commandes complet',
      'Gestion du stock en temps réel',
      'Dashboard admin avec Recharts',
      'Gestion produits / commandes / utilisateurs',
      'BD relationnelle 11 tables',
      'Design Tailwind moderne',
      'State management avec Context API',
      'Validation avec RHF + Yup'
    ],
    challenges:
      "Développement d'une architecture full-stack complexe...",
    demoVideos: [
      {
        title: 'Interface Client',
        path: 'demo-videos/e-commerce_client.mp4' 
      },
      {
        title: 'Interface Manager',
        path: 'demo-videos/e-commerce_manager.mp4' 
      }
    ],
  },
  {
    id: 2,
    translationKey: 'medical',
    title: 'Application de gestion du personnel médical',
    description: 'Application de bureau...',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    technologies: ['C#', 'SQL Server'],
    category: 'desktop',
    codeLink: '#',
    demoLink: '#',
    icon: FaJava,
  },
  {
    id: 3,
    translationKey: 'climate',
    title: 'Base de données climatique',
    description: 'Base de données pour le suivi des données climatiques...',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    technologies: ['MySQL', 'Python', 'SQL'],
    category: 'database',
    codeLink: '#',
    demoLink: '#',
    icon: FaDatabase,
  },
  {
    id: 4,
    translationKey: 'equipment',
    title: "CortexIT - Système de Gestion d'Équipements IT",
    description: 'Application SaaS complète...',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    technologies: [
      'Vue.js', 'Vite', 'Pinia', 'Vue Router', 'Tailwind CSS',
      'Node.js', 'Express.js', 'Sequelize', 'MySQL', 'JWT', 'bcrypt',
      'Axios', 'Chart.js'
    ],
    category: 'web',
    codeLink: '#',
    demoLink: '#',
    frontendCodeLink: '#',
    backendCodeLink: '#',
    icon: FaVuejs,
    features: [
      'Architecture multi-tenant',
      'JWT sécurisé',
      'Gestion utilisateurs et permissions',
      'CRUD équipements / maintenance',
      'Dashboard en temps réel',
      'Internationalisation FR/EN',
      'Mode sombre/clair',
      'Sécurité avancée',
      '40+ endpoints API'
    ],
    challenges: "Développement d'une architecture SaaS multi-tenant...",
    demoVideo: 'demo-videos/CortexIT.mp4', 
  },
  {
    id: 5,
    translationKey: 'marathon',
    title: 'VelocityRun - Site web marathon',
    description: 'Site web bilingue FR/EN développé avec Next.js 15...',
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800',
    technologies: ['Next.js', 'React.js', 'JavaScript', 'CSS', 'Node.js'],
    category: 'web',
    codeLink: '#',
    demoLink: '#',
    icon: FaReact,
    features: [
      'Internationalisation FR/EN',
      'Formulaire avec validation',
      'Compte à rebours dynamique',
      'Server Actions',
      'SEO optimisé',
      'Score Lighthouse > 90'
    ],
    challenges: 'Implémentation d’un système i18n robuste avec Next.js...',
    demoVideo: 'demo-videos/velocityrun-demo.mp4', 
  },
  {
    id: 6,
    translationKey: 'android',
    title: 'Application Android de gestion',
    description: 'Application Android développée avec Java/Kotlin...',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    technologies: ['Java', 'Kotlin', 'Android'],
    category: 'mobile',
    codeLink: '#',
    demoLink: '#',
    icon: FaMobileAlt,
  },
]

export const techIcons = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  'Sequelize': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/sequelize.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'Axios': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/axios.svg',
  'React Router': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/reactrouter.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'SQL Server': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoftsqlserver.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  'Pinia': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/pinia.svg',
  'Vue Router': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vuedotjs.svg',
  'Vue I18n': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vuedotjs.svg',
  'JWT': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/jsonwebtokens.svg',
  'bcrypt': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/bcrypt.svg',
  'Chart.js': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/chartdotjs.svg',
}

