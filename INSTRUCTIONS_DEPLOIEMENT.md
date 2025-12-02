# 🚀 Instructions Rapides de Déploiement

## Étape 1 : Créer le Repository GitHub

1. Allez sur https://github.com/new
2. Nommez votre repository : `Portfolio` (ou un autre nom de votre choix)
3. **Ne cochez PAS** "Initialize with README"
4. Cliquez sur **"Create repository"**

## Étape 2 : Configurer le Nom du Repository

**IMPORTANT** : Si votre repository GitHub a un nom différent de `Portfolio`, modifiez ces fichiers :

1. **vite.config.js** - ligne 6 :
   ```javascript
   base: '/VOTRE_NOM_REPO/', // Remplacez par le nom exact de votre repository
   ```

2. **src/main.jsx** - ligne 13 :
   ```javascript
   <BrowserRouter basename="/VOTRE_NOM_REPO">
   ```

## Étape 3 : Initialiser Git et Pousser sur GitHub

Ouvrez votre terminal dans le dossier du projet et exécutez :

```bash
# 1. Initialiser Git
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Créer le premier commit
git commit -m "Initial commit: Portfolio"

# 4. Connecter à GitHub (remplacez USERNAME et REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 5. Renommer la branche en 'main'
git branch -M main

# 6. Pousser sur GitHub
git push -u origin main
```

**Exemple concret :**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio"
git remote add origin https://github.com/Jonathan-kayembe/Portfolio.git
git branch -M main
git push -u origin main
```

## Étape 4 : Activer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **"Source"**, sélectionnez **"GitHub Actions"**
5. Le déploiement se fera automatiquement !

## Étape 5 : Attendre le Déploiement

- Le premier déploiement prend 5-10 minutes
- Vous pouvez suivre la progression dans l'onglet **"Actions"** de votre repository
- Une fois terminé, votre site sera accessible à :
  ```
  https://USERNAME.github.io/REPO_NAME/
  ```

## 🔄 Mettre à Jour le Site

Chaque fois que vous modifiez votre code :

```bash
git add .
git commit -m "Description de vos modifications"
git push origin main
```

Le site sera automatiquement mis à jour en quelques minutes.

## ⚠️ Important

- Le nom du repository dans `vite.config.js` et `main.jsx` doit correspondre **exactement** au nom de votre repository GitHub
- Le nom est **sensible à la casse** (majuscules/minuscules)

## 📖 Documentation Complète

Pour plus de détails, consultez le fichier `DEPLOIEMENT_GITHUB.md`

