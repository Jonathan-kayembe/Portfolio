# 📚 Guide de Bonnes Pratiques - Portfolio Professionnel

Ce guide contient les meilleures pratiques pour maintenir et améliorer le portfolio après les corrections appliquées.

---

## 🎨 Design & Thème

### Thème Sombre Bleu (Par défaut)
- **Couleurs principales** : `#0A0F1F` (bg), `#0E1A36` (surface), `#1E3A8A` (accent), `#3B82F6` (highlight)
- **Effets neon** : Utiliser les classes `.neon-glow`, `.neon-glow-strong` pour les effets lumineux
- **Animations** : Privilégier les animations fluides (300-500ms) pour une expérience professionnelle

### Thème Clair (Optionnel)
- Accessible via le `ThemeSwitcher`
- Couleurs adaptées pour la lisibilité en mode clair
- Transitions animées entre les thèmes

---

## 🏗️ Architecture du Code

### Structure des Dossiers
```
src/
├── components/     # Composants réutilisables
├── pages/          # Pages de l'application
├── hooks/          # Hooks personnalisés
├── contexts/       # Contextes React
├── data/           # Données statiques
├── utils/          # Utilitaires et helpers
├── i18n/           # Configuration i18next
└── locales/        # Fichiers de traduction
```

### Conventions de Nommage
- **Composants** : PascalCase (`ProjectCard.jsx`)
- **Hooks** : camelCase avec préfixe `use` (`useProjectTranslations.js`)
- **Utilitaires** : camelCase (`validators.js`, `helpers.js`)
- **Constantes** : UPPER_SNAKE_CASE (`EMAILJS_CONFIG`)

---

## ⚛️ React - Bonnes Pratiques

### 1. Memoization
```jsx
// Utiliser React.memo pour les composants purs
export default memo(ProjectCard)

// Utiliser useMemo pour les calculs coûteux
const filteredProjects = useMemo(() => {
  return projects.filter(...)
}, [projects, filter])

// Utiliser useCallback pour les fonctions passées en props
const handleClick = useCallback(() => {
  // ...
}, [dependencies])
```

### 2. Keys Stables
```jsx
// ❌ Mauvais : utiliser l'index
{items.map((item, index) => <Item key={index} />)}

// ✅ Bon : utiliser un ID unique
{items.map((item) => <Item key={item.id} />)}

// ✅ Bon : combinaison unique
{items.map((item) => <Item key={`${item.id}-${item.name}`} />)}
```

### 3. PropTypes
```jsx
import PropTypes from 'prop-types'

Component.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
}
```

---

## 🌐 Internationalisation (i18n)

### Ajouter une Nouvelle Traduction
1. Ajouter la clé dans `src/locales/fr.json`
2. Ajouter la même clé dans `src/locales/en.json`
3. Utiliser `t('key.path')` dans les composants

### Utiliser les Traductions
```jsx
const { t } = useTranslation()
const title = t('projects.title')
const items = t('projects.items', { returnObjects: true })
```

---

## 🎯 Performance

### Optimisations Appliquées
- ✅ Lazy loading des pages (`React.lazy`)
- ✅ Memoization des composants et calculs
- ✅ Images avec `loading="lazy"`
- ✅ Code splitting automatique (Vite)

### À Surveiller
- Taille des images (optimiser avant upload)
- Nombre de re-renders (utiliser React DevTools)
- Bundle size (analyser avec `npm run build`)

---

## 🔒 Sécurité

### Validation des Données
- Utiliser `validateForm()` pour les formulaires
- Sanitizer les inputs avec `sanitizeInput()`
- Ne jamais faire confiance aux données utilisateur

### EmailJS
- Ne jamais exposer les clés privées
- Utiliser les variables d'environnement
- Vérifier la configuration avec `isEmailJSConfigured()`

---

## 🎨 Animations & Effets

### Effets Neon
```jsx
// Classe CSS pour effet neon léger
<div className="neon-glow" />

// Classe CSS pour effet neon fort
<div className="neon-glow-strong" />
```

### Hover 3D
```jsx
// Utiliser la classe card-3d
<div className="card-3d">
  {/* Contenu */}
</div>
```

### Animations Tailwind
- `animate-glow` : Effet de lueur pulsante
- `animate-float` : Flottement vertical
- `animate-gradient` : Gradient animé
- `animate-neon-pulse` : Pulsation neon

---

## 📝 Documentation

### JSDoc
```jsx
/**
 * Description de la fonction
 * @param {Object} props - Description des props
 * @param {string} props.name - Nom de l'utilisateur
 * @returns {JSX.Element} Composant React
 */
```

### Commentaires
- Commenter la logique complexe
- Expliquer les "pourquoi", pas les "quoi"
- Garder les commentaires à jour

---

## 🧪 Tests (Futur)

### Structure Recommandée
```
src/
├── __tests__/
│   ├── components/
│   ├── pages/
│   └── utils/
```

### Outils Recommandés
- Vitest (test runner)
- React Testing Library
- Jest DOM

---

## 🚀 Déploiement

### Variables d'Environnement
Créer un fichier `.env` :
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Build de Production
```bash
npm run build
```

### Vérifications Avant Déploiement
- [ ] Toutes les traductions sont complètes
- [ ] Les images sont optimisées
- [ ] Les variables d'environnement sont configurées
- [ ] Le CV.pdf est présent dans `public/`
- [ ] Les liens externes fonctionnent
- [ ] Le site est responsive
- [ ] L'accessibilité est vérifiée

---

## 🔧 Maintenance

### Mettre à Jour les Projets
1. Modifier `src/data/projects.js`
2. Ajouter les traductions dans `src/locales/*.json`
3. Utiliser `useProjectTranslations()` pour les afficher

### Ajouter une Nouvelle Langue
1. Créer `src/locales/[lang].json`
2. Ajouter dans `src/i18n/config.js`
3. Mettre à jour `LanguageSwitcher` si nécessaire

### Mettre à Jour les Compétences
Modifier `src/data/personalData.js` et les traductions correspondantes.

---

## 📊 Métriques de Qualité

### Objectifs
- **Performance** : Lighthouse score > 90
- **Accessibilité** : WCAG 2.1 AA
- **SEO** : Score > 90
- **Best Practices** : Score > 90

### Outils de Vérification
- Lighthouse (Chrome DevTools)
- WAVE (Accessibility)
- Google PageSpeed Insights

---

## 🐛 Débogage

### Erreurs Courantes
1. **Traductions manquantes** : Vérifier les clés dans les fichiers JSON
2. **Images non chargées** : Vérifier les chemins et le fallback
3. **EmailJS ne fonctionne pas** : Vérifier les variables d'environnement
4. **Styles non appliqués** : Vérifier Tailwind config et classes

### Outils de Débogage
- React DevTools
- Redux DevTools (si utilisé)
- Console du navigateur
- Network tab pour les requêtes

---

## 📚 Ressources

### Documentation
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [i18next](https://www.i18next.com)

---

**Dernière mise à jour** : Après refactoring professionnel complet

