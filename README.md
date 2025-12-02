# Portfolio - Jonathan Tshibuyi Kayembe

Portfolio moderne et professionnel bilingue (FR/EN) construit avec React + Vite, présentant mes compétences en développement full-stack, mobile et bases de données.

## 🎨 Design

- **Thème par défaut** : Mode sombre avec palette bleue (#0A0F1F, #0E1A36, #1E3A8A, #3B82F6)
- **Style** : Moderne, élégant, esthétique développeur/tech
- **Effets visuels** : Animations fluides, effets néon au survol, transitions 3D
- **Thème clair/sombre** : Basculement avec transition animée

## 🚀 Fonctionnalités

- ✨ **Design moderne** avec thème bleu foncé par défaut
- 🌐 **Bilingue** (Français / Anglais) avec i18next
- 🎨 **Animations fluides** avec Framer Motion et AOS
- 📱 **Entièrement responsive** (mobile, tablette, desktop)
- 🎯 **SEO optimisé** avec React Helmet
- 📧 **Formulaire de contact** avec EmailJS
- 🎭 **Effets visuels** : particules animées, gradients, parallax
- 💾 **Préférences sauvegardées** : langue et thème dans localStorage

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI
- **Vite** - Build tool rapide
- **TailwindCSS** - Framework CSS avec thème personnalisé
- **React Router** - Navigation
- **i18next** - Internationalisation
- **Framer Motion** - Animations
- **AOS** - Animations au scroll
- **EmailJS** - Envoi d'emails
- **React Icons / Lucide React** - Icônes
- **React Helmet Async** - Gestion SEO

## 📦 Installation

1. **Cloner le repository**
```bash
git clone <votre-repo>
cd Portfolio
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Build pour la production**
```bash
npm run build
```

5. **Prévisualiser le build**
```bash
npm run preview
```

## ⚙️ Configuration

### EmailJS

Pour activer le formulaire de contact, configurez EmailJS :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email
3. Créez un template
4. Créez un fichier `.env` à la racine :
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Ou modifiez directement dans `src/pages/Contact.jsx`

### CV PDF

Placez votre fichier CV dans le dossier `public/` avec le nom `CV.pdf`.

## 📁 Structure du projet

```
Portfolio/
├── public/
│   ├── CV.pdf
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeSwitcher.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillCard.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── personalData.js
│   │   └── projects.js
│   ├── hooks/
│   │   └── useLanguage.js
│   ├── i18n/
│   │   └── config.js
│   ├── locales/
│   │   ├── en.json
│   │   └── fr.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── netlify.toml
├── vercel.json
└── README.md
```

## 🌍 Ajouter une nouvelle langue

1. Créez un nouveau fichier dans `src/locales/` (ex: `es.json`)
2. Copiez la structure de `fr.json` ou `en.json`
3. Traduisez tous les textes
4. Ajoutez la langue dans `src/i18n/config.js` :

```javascript
import esTranslations from '../locales/es.json'

resources: {
  // ... existing languages
  es: {
    translation: esTranslations,
  },
}
```

5. Ajoutez le bouton de langue dans `LanguageSwitcher.jsx` si nécessaire

## 📝 Ajouter un nouveau projet

1. Ouvrez `src/data/projects.js`
2. Ajoutez un nouvel objet dans le tableau `projects` :

```javascript
{
  id: 7,
  title: 'Mon nouveau projet',
  description: 'Description du projet',
  image: 'https://images.unsplash.com/photo-...',
  technologies: ['React', 'Node.js'],
  category: 'web',
  codeLink: 'https://github.com/...',
  demoLink: 'https://demo.com',
  icon: FaReact,
}
```

3. Ajoutez les traductions dans `src/locales/fr.json` et `src/locales/en.json` sous `projects.items`

## 🎨 Personnalisation des couleurs

Modifiez les couleurs dans `tailwind.config.js` :

```javascript
colors: {
  dark: {
    bg: '#0A0F1F',        // Fond principal
    surface: '#0E1A36',   // Surfaces (cartes)
    accent: '#1E3A8A',    // Accents
    highlight: '#3B82F6', // Surlignage
  },
}
```

## 🚀 Déploiement

### Netlify

1. Installez Netlify CLI : `npm install -g netlify-cli`
2. Build : `npm run build`
3. Déployez : `netlify deploy --prod --dir=dist`

Ou connectez votre repository GitHub à Netlify pour un déploiement automatique.

### Vercel

1. Installez Vercel CLI : `npm install -g vercel`
2. Déployez : `vercel`

Ou connectez votre repository GitHub à Vercel pour un déploiement automatique.

### GitHub Pages

Le projet est configuré pour un déploiement automatique sur GitHub Pages via GitHub Actions.

**Configuration rapide :**

1. Créez un repository sur GitHub (ex: `Portfolio`)
2. Si le nom de votre repository est différent de `Portfolio`, modifiez :
   - `vite.config.js` : ligne 6 (`base: '/VOTRE_NOM_REPO/'`)
   - `src/main.jsx` : ligne 13 (`basename="/VOTRE_NOM_REPO"`)
3. Initialisez Git et poussez votre code :
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```
4. Activez GitHub Pages :
   - Allez dans **Settings** > **Pages**
   - Source : Sélectionnez **"GitHub Actions"**
5. Le site sera automatiquement déployé et accessible à :
   ```
   https://USERNAME.github.io/REPO_NAME/
   ```

**Pour plus de détails**, consultez `INSTRUCTIONS_DEPLOIEMENT.md` ou `DEPLOIEMENT_GITHUB.md`

## 📋 Pages disponibles

- **Home** : Section hero avec animation de texte et particules
- **About** : Biographie, compétences techniques et personnelles
- **Projects** : Grille de projets avec filtres par technologie
- **Skills** : Compétences organisées par catégories
- **Education** : Formation et bénévolat
- **Contact** : Formulaire de contact et informations

## 🔧 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée un build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 📝 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**Jonathan Tshibuyi Kayembe**

- Email: jkayembe12@yahoo.com
- LinkedIn: [jonathan-kayembe-02a4a6377](https://www.linkedin.com/in/jonathan-kayembe-02a4a6377)
- Téléphone: 343-558-6755
- Localisation: Ottawa, ON, Canada

---

Fait avec ❤️ en utilisant React + Vite
