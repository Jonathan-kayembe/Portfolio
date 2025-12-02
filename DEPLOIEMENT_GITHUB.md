# 🚀 Guide de Déploiement sur GitHub Pages

Ce guide vous explique comment mettre votre portfolio en ligne sur GitHub Pages pour le rendre accessible publiquement.

## 📋 Prérequis

1. Un compte GitHub
2. Git installé sur votre ordinateur
3. Node.js et npm installés

## 🔧 Étapes de Déploiement

### 1. Créer un Repository sur GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite, puis **"New repository"**
3. Nommez votre repository (ex: `Portfolio` ou `portfolio-jonathan-kayembe`)
4. **Ne cochez PAS** "Initialize this repository with a README"
5. Cliquez sur **"Create repository"**

### 2. Initialiser Git dans votre Projet

Ouvrez votre terminal dans le dossier du projet et exécutez :

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Portfolio Jonathan Kayembe"
```

### 3. Connecter votre Projet à GitHub

```bash
# Remplacez USERNAME et REPOSITORY_NAME par vos valeurs
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git

# Renommer la branche principale en 'main' (si nécessaire)
git branch -M main

# Pousser le code sur GitHub
git push -u origin main
```

**Exemple :**
```bash
git remote add origin https://github.com/Jonathan-kayembe/Portfolio.git
git branch -M main
git push -u origin main
```

### 4. Configurer le Base Path dans vite.config.js

**IMPORTANT :** Assurez-vous que le `base` dans `vite.config.js` correspond au nom de votre repository GitHub.

Si votre repository s'appelle `Portfolio`, le fichier est déjà configuré.
Si votre repository a un autre nom, modifiez la ligne dans `vite.config.js` :

```javascript
base: '/NOM_DE_VOTRE_REPO/', // Changez par le nom exact de votre repository
```

### 5. Activer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **"Settings"** (Paramètres)
3. Dans le menu de gauche, cliquez sur **"Pages"**
4. Sous **"Source"**, sélectionnez **"GitHub Actions"**
5. Le déploiement se fera automatiquement via le workflow GitHub Actions

### 6. Déployer votre Site

#### Option A : Déploiement Automatique (Recommandé)

Le workflow GitHub Actions se déclenchera automatiquement à chaque push sur la branche `main`.

```bash
# Après chaque modification, poussez les changements
git add .
git commit -m "Description de vos modifications"
git push origin main
```

Le site sera automatiquement déployé en quelques minutes.

#### Option B : Déploiement Manuel avec gh-pages

Si vous préférez déployer manuellement :

```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Déployer
npm run deploy
```

### 7. Accéder à votre Site

Une fois déployé, votre site sera accessible à l'adresse :

```
https://USERNAME.github.io/REPOSITORY_NAME/
```

**Exemple :**
```
https://Jonathan-kayembe.github.io/Portfolio/
```

## 🔄 Mettre à Jour le Site

Chaque fois que vous modifiez votre code :

```bash
git add .
git commit -m "Description des modifications"
git push origin main
```

Le site sera automatiquement mis à jour en quelques minutes.

## ⚙️ Configuration du Router

Si vous utilisez React Router, assurez-vous que votre router est configuré pour fonctionner avec GitHub Pages. Le fichier `src/App.jsx` devrait utiliser `BrowserRouter` avec un `basename` si nécessaire.

## 📝 Notes Importantes

1. **Base Path** : Le `base` dans `vite.config.js` doit correspondre exactement au nom de votre repository GitHub (sensible à la casse).

2. **Premier Déploiement** : Le premier déploiement peut prendre 5-10 minutes. Les suivants sont plus rapides.

3. **HTTPS** : GitHub Pages utilise automatiquement HTTPS, votre site sera sécurisé.

4. **Domaine Personnalisé** : Vous pouvez ajouter un domaine personnalisé dans les paramètres GitHub Pages si vous en avez un.

## 🐛 Résolution de Problèmes

### Le site affiche une page blanche
- Vérifiez que le `base` dans `vite.config.js` correspond au nom de votre repository
- Vérifiez la console du navigateur pour les erreurs

### Les routes ne fonctionnent pas
- Assurez-vous que votre router est correctement configuré
- Vérifiez que toutes les routes sont accessibles

### Le déploiement échoue
- Vérifiez les logs dans l'onglet "Actions" de votre repository GitHub
- Assurez-vous que tous les fichiers sont bien commités

## 📚 Ressources

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Documentation Vite](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Documentation React Router](https://reactrouter.com/en/main/start/overview)

---

**Bon déploiement ! 🎉**

