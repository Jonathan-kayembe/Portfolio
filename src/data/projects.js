import { FaReact, FaVuejs, FaSwift, FaJava, FaPhp, FaDatabase, FaMobileAlt } from 'react-icons/fa'
import { SiMysql, SiMongodb, SiNodedotjs } from 'react-icons/si'

/**
 * Liste des projets du portfolio
 * Les titres et descriptions sont traduits via useProjectTranslations hook
 * @type {Array<Object>}
 */
export const projects = [
  {
    id: 1,
    translationKey: 'ecommerce', // Clé pour la traduction
    title: 'E-Commerce de Menuiserie Artisanale', // Fallback
    description: 'Application e-commerce complète full-stack pour une menuiserie artisanale. Le projet comprend deux interfaces frontend (client et gestionnaire) et une API REST backend robuste développée avec Laravel. Fonctionnalités : authentification sécurisée, catalogue de produits, panier persistant avec synchronisation automatique, système de commandes complet, interface d\'administration avec tableaux de bord et statistiques, gestion du stock en temps réel.', // Fallback
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
      'Authentification sécurisée avec tokens API et protection des routes',
      'Catalogue complet avec recherche, filtres et pagination',
      'Panier d\'achat persistant avec synchronisation automatique local ↔ backend',
      'Système de commandes complet avec paiement fictif simulé',
      'Gestion du stock en temps réel et validation avant commande',
      'Interface d\'administration avec tableaux de bord et graphiques (Recharts)',
      'Gestion complète des produits, commandes, utilisateurs et catégories',
      'Base de données relationnelle avec 11 tables et pattern Repository',
      'Design responsive et moderne avec Tailwind CSS',
      'Gestion d\'état avancée avec Context API (Auth, Cart)',
      'Validation des formulaires avec React Hook Form et Yup'
    ],
    challenges: 'Développement d\'une architecture full-stack complexe avec séparation claire entre frontend et backend. Implémentation d\'un système de panier persistant nécessitant une synchronisation intelligente entre le localStorage et le backend pour éviter les conflits. Gestion de deux interfaces distinctes (client/manager) avec des rôles et permissions différents. Mise en place d\'un pattern Repository pour abstraction de la base de données et amélioration de la maintenabilité. Optimisation des performances avec gestion du cache et requêtes optimisées. Gestion complète du cycle de vie des commandes avec validation du stock, mise à jour automatique et suivi des statuts.',
    demoVideos: [
      {
        title: 'Interface Client',
        path: '/demo-videos/e-commerce_client.mp4'
      },
      {
        title: 'Interface Manager',
        path: '/demo-videos/e-commerce_manager.mp4'
      }
    ],
  },
  {
    id: 2,
    translationKey: 'medical',
    title: 'Application de gestion du personnel médical',
    description: 'Application de bureau pour la gestion du personnel médical avec interface intuitive et fonctionnalités complètes.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
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
    description: 'Base de données pour le suivi de la pollution, précipitations et autres données climatiques.',
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
    title: 'CortexIT - Système de Gestion d\'Équipements IT',
    description: 'Application SaaS complète de gestion d\'inventaire et de maintenance d\'équipements IT avec architecture multi-tenant. Solution full-stack moderne avec authentification sécurisée, gestion des utilisateurs avec 4 rôles, tableaux de bord en temps réel, et interface multilingue.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    technologies: ['Vue.js', 'Vite', 'Pinia', 'Vue Router', 'Tailwind CSS', 'Vue I18n', 'Node.js', 'Express.js', 'Sequelize', 'MySQL', 'JWT', 'bcrypt', 'Axios', 'Chart.js'],
    category: 'web',
    codeLink: '#',
    demoLink: '#',
    frontendCodeLink: '#',
    backendCodeLink: '#',
    icon: FaVuejs,
    features: [
      'Architecture multi-tenant avec isolation complète des données par organisation',
      'Authentification sécurisée : JWT avec access tokens (15 min) + refresh tokens (7 jours)',
      'Gestion des utilisateurs : 4 rôles (ADMIN, MANAGER, TECHNICIAN, USER) avec permissions granulaires',
      'Gestion complète des équipements IT : CRUD, filtres avancés, statuts (Disponible, En utilisation, En maintenance, Hors service)',
      'Suivi de maintenance : Demandes, attribution aux techniciens, historique complet, statuts (En attente, En cours, Terminée, Annulée)',
      'Gestion des départements : Création, attribution de responsables, association équipements/utilisateurs',
      'Tableau de bord : Statistiques en temps réel, graphiques de distribution, activités récentes',
      'Internationalisation : Support multilingue (Français/Anglais) avec sélecteur de langue',
      'Interface moderne : Design SaaS (inspiré de Notion, Linear, Vercel), mode sombre/clair, responsive',
      'Sécurité renforcée : Rate limiting, Helmet, CORS, validation stricte, soft delete, vérification d\'appartenance',
      '40+ endpoints API RESTful, 9 pages principales, 7 composants UI réutilisables',
      'Code structuré : Validation côté client/serveur, gestion d\'erreurs centralisée, logging structuré (Winston)'
    ],
    challenges: 'Développement d\'une architecture SaaS multi-tenant complète avec isolation garantie des données au niveau middleware. Implémentation d\'un système de rôles et permissions granulaire (RBAC) avec contrôle d\'accès au niveau de chaque endpoint. Gestion de l\'authentification JWT avec refresh tokens révocables et rotation automatique. Création d\'une interface utilisateur moderne et intuitive avec Vue.js 3 (Composition API) et Tailwind CSS, incluant un système d\'internationalisation complet. Optimisation des performances avec pagination, filtres avancés, et requêtes optimisées. Mise en place d\'un système de maintenance avec suivi complet du cycle de vie des interventions. Gestion de la synchronisation des données entre les différentes entités (équipements, maintenances, départements, utilisateurs) avec validation et contraintes d\'intégrité.',
    demoVideo: '/demo-videos/CortexIT.mp4',
  },
  {
    id: 5,
    translationKey: 'marathon',
    title: 'VelocityRun - Site web marathon',
    description: 'Site web bilingue (FR/EN) développé avec Next.js 15 et React 19 pour promouvoir des événements de course à pied à Ottawa. Le projet inclut un système complet d\'internationalisation, un formulaire de contact avec validation en temps réel, un compte à rebours dynamique, et une optimisation SEO complète.',
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800',
    technologies: ['Next.js', 'React.js', 'JavaScript', 'CSS', 'Node.js'],
    category: 'web',
    codeLink: '#',
    demoLink: '#',
    icon: FaReact,
    features: [
      'Système d\'internationalisation complet (FR/EN)',
      'Formulaire de contact avec validation en temps réel',
      'Compte à rebours dynamique pour les événements',
      'Server Actions pour les interactions serveur',
      'Intégration Resend API pour l\'envoi d\'emails',
      'Design responsive et moderne',
      'Optimisation SEO (Score Lighthouse > 90)',
      'Performance optimisée avec Next.js 15'
    ],
    challenges: 'Implémentation d\'un système d\'i18n robuste avec Next.js App Router. Optimisation des performances pour atteindre un score Lighthouse supérieur à 90. Gestion des Server Actions pour les interactions serveur sans API routes.',
    demoVideo: '/demo-videos/velocityrun-demo.mp4',
  },
  {
    id: 6,
    translationKey: 'android',
    title: 'Application Android de gestion',
    description: 'Application Android développée avec Java/Kotlin pour la gestion de tâches et projets.',
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

