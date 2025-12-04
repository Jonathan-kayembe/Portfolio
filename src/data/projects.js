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
    challenges: "Développement d'une architecture full-stack complexe...",
    demoImages: [
      {
        title: 'Interface Client',
        images: [
          { path: 'demo/e-commerce_client/accueil.png', alt: "Page d'accueil" },
          { path: 'demo/e-commerce_client/produit.png', alt: 'Liste des produits' },
          { path: 'demo/e-commerce_client/produit-detail.png', alt: 'Détail produit' },
          { path: 'demo/e-commerce_client/payement.png', alt: 'Page de paiement' },
          { path: 'demo/e-commerce_client/livraison.png', alt: 'Page de livraison' },
          { path: 'demo/e-commerce_client/contact.png', alt: 'Page de contact' },
          { path: 'demo/e-commerce_client/question.png', alt: 'Page de questions' },
          { path: 'demo/e-commerce_client/retour.png', alt: 'Page de retour' },
          { path: "demo/e-commerce_client/Capture d'écran 2025-12-03 165547.png", alt: "Capture d'écran" }
        ]
      },
      {
        title: 'Interface Manager',
        images: [
          { path: 'demo/e-commerce_manager/Dashboard.png', alt: 'Dashboard' },
          { path: 'demo/e-commerce_manager/Prouduit.png', alt: 'Gestion produits' },
          { path: 'demo/e-commerce_manager/Categorie.png', alt: 'Gestion catégories' },
          { path: 'demo/e-commerce_manager/Commande.png', alt: 'Gestion commandes' },
          { path: 'demo/e-commerce_manager/Utilisateur.png', alt: 'Gestion utilisateurs' },
          { path: 'demo/e-commerce_manager/Statistique.png', alt: 'Statistiques' }
        ]
      }
    ],
  },

  {
    id: 2,
    translationKey: 'medical',
    title: 'Application de gestion du personnel médical',
    description: 'Application de bureau Windows développée en C#/.NET 8.0 et WPF pour la gestion complète du personnel médical d\'un établissement hospitalier. Interface moderne multilingue (FR/EN) avec base de données SQL Server, permettant la gestion CRUD complète des médecins, infirmiers, départements et consultations.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    technologies: [
      'C#', 
      '.NET 8.0', 
      'WPF', 
      'XAML', 
      'SQL Server', 
      'MVVM Pattern',
      'Microsoft.Data.SqlClient'
    ],
    category: 'desktop',
    codeLink: '#',
    demoLink: '#',
    icon: FaJava,
    features: [
      'Gestion CRUD complète (Médecins, Infirmiers, Départements, Consultations)',
      'Interface utilisateur moderne avec design Material Design',
      'Support multilingue (Français/Anglais) avec changement dynamique',
      'Base de données SQL Server avec relations et contraintes',
      'Recherche et filtrage en temps réel',
      'Validation des données et gestion d\'erreurs robuste',
      'Statistiques dynamiques et compteurs en temps réel',
      'Gestion des dépendances entre entités',
      'Architecture MVVM avec pattern Repository',
      'Data Binding bidirectionnel avec INotifyPropertyChanged',
      '60+ spécialités médicales disponibles',
      'Gestion de la disponibilité du personnel'
    ],
    challenges: "Développement d'une application de gestion hospitalière complète en C#/.NET 8.0 utilisant WPF pour l'interface utilisateur. Implémentation d'une architecture MVVM avec pattern Repository pour la gestion de base de données SQL Server. Création d'un système multilingue dynamique avec changement de langue en temps réel. Gestion des relations entre entités avec contraintes d'intégrité référentielle. Interface utilisateur moderne avec design Material Design et expérience utilisateur intuitive.",
    demoImages: [
      {
        title: "Application de Gestion du Personnel Médical - Captures d'écran",
        images: [
          { path: "demo/Application_de_gestion_du_personnel_médical/Docteur.png", alt: "Gestion des médecins" },
          { path: "demo/Application_de_gestion_du_personnel_médical/Infirmier.png", alt: "Gestion des infirmiers" },
          { path: "demo/Application_de_gestion_du_personnel_médical/Departement.png", alt: "Gestion des départements" },
          { path: "demo/Application_de_gestion_du_personnel_médical/Consultation.png", alt: "Gestion des consultations" },
          { path: "demo/Application_de_gestion_du_personnel_médical/ajout.png", alt: "Formulaire d'ajout" },
          { path: "demo/Application_de_gestion_du_personnel_médical/modifier.png", alt: "Formulaire de modification" },
          { path: "demo/Application_de_gestion_du_personnel_médical/Capture d'écran 2025-12-04 175340.png", alt: "Interface principale" }
        ]
      }
    ],
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
    demoImages: [
      {
        title: "CortexIT - Captures d'écran",
        images: [
          { path: 'demo/CortexIT/dashboard.png', alt: 'Dashboard' },
          { path: 'demo/CortexIT/page_user.png', alt: 'Page utilisateur' },
          { path: 'demo/CortexIT/page_de_utilisatuer.png', alt: 'Gestion utilisateurs' },
          { path: 'demo/CortexIT/page_organisation.png', alt: 'Gestion organisations' },
          { path: 'demo/CortexIT/page_departement.png', alt: 'Gestion départements' },
          { path: 'demo/CortexIT/page_equipement.png', alt: 'Gestion équipements' },
          { path: 'demo/CortexIT/page_maintenance.png', alt: 'Gestion maintenance' }
        ]
      }
    ],
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
    challenges: "Implémentation d'un système i18n robuste avec Next.js...",
    demoImages: [
      {
        title: "VelocityRun - Captures d'écran",
        images: [
          { path: 'demo/velocityrun/accueil.png', alt: "Page d'accueil" },
          { path: 'demo/velocityrun/accueil2.png', alt: "Page d'accueil 2" },
          { path: 'demo/velocityrun/marathon1.png', alt: 'Page marathon 1' },
          { path: 'demo/velocityrun/marathon2.png', alt: 'Page marathon 2' },
          { path: 'demo/velocityrun/chemin.png', alt: 'Page chemin' },
          { path: 'demo/velocityrun/chemin2.png', alt: 'Page chemin 2' },
          { path: 'demo/velocityrun/compte.png', alt: 'Page compte' },
          { path: 'demo/velocityrun/contact.png', alt: 'Page contact' }
        ]
      }
    ],
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
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  Laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  Sequelize: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/sequelize.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  Axios: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/axios.svg',
  'React Router': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/reactrouter.svg',
  Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'SQL Server': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoftsqlserver.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  '.NET 8.0': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  'WPF': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  'XAML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  'MVVM Pattern': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  'Microsoft.Data.SqlClient': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  Pinia: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/pinia.svg',
  'Vue Router': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vuedotjs.svg',
  'Vue I18n': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vuedotjs.svg',
  JWT: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/jsonwebtokens.svg',
  bcrypt: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/bcrypt.svg',
  'Chart.js': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/chartdotjs.svg',
}

