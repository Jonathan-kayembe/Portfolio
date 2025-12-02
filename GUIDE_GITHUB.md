# 📤 Guide : Mettre votre Portfolio sur GitHub

## Étape 1 : Créer un Repository sur GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. Remplissez les informations :
   - **Repository name** : `Portfolio` (ou un autre nom de votre choix)
   - **Description** (optionnel) : "Portfolio professionnel - Jonathan Tshibuyi Kayembe"
   - **Visibilité** : Public (pour GitHub Pages gratuit) ou Private
   - **NE COCHEZ PAS** "Add a README file"
   - **NE COCHEZ PAS** "Add .gitignore" (vous en avez déjà un)
   - **NE COCHEZ PAS** "Choose a license"
5. Cliquez sur **"Create repository"**

## Étape 2 : Initialiser Git dans votre Projet

Ouvrez votre terminal dans le dossier du projet (`C:\Personnel Projet\Portfolio`) et exécutez :

```bash
# 1. Initialiser Git
git init

# 2. Vérifier que tout est prêt
git status
```

## Étape 3 : Ajouter tous les Fichiers

```bash
# Ajouter tous les fichiers au staging
git add .

# Vérifier ce qui sera commité
git status
```

## Étape 4 : Créer le Premier Commit

```bash
git commit -m "Initial commit: Portfolio Jonathan Kayembe"
```

## Étape 5 : Connecter votre Projet à GitHub

**Remplacez `VOTRE_USERNAME` et `VOTRE_REPO` par vos valeurs réelles**

```bash
# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git

# Vérifier que le remote est bien configuré
git remote -v
```

**Exemple concret :**
```bash
git remote add origin https://github.com/Jonathan-kayembe/Portfolio.git
```

## Étape 6 : Renommer la Branche en 'main'

```bash
git branch -M main
```

## Étape 7 : Pousser le Code sur GitHub

```bash
git push -u origin main
```

Si c'est la première fois que vous utilisez Git sur cet ordinateur, GitHub vous demandera de vous authentifier. Suivez les instructions à l'écran.

## ✅ Vérification

1. Allez sur votre repository GitHub
2. Vous devriez voir tous vos fichiers
3. Votre code est maintenant sur GitHub !

## 🔄 Commandes Utiles pour Plus Tard

```bash
# Voir l'état des fichiers
git status

# Ajouter des modifications
git add .

# Créer un commit
git commit -m "Description de vos modifications"

# Pousser sur GitHub
git push origin main

# Voir l'historique des commits
git log
```

## ⚠️ Important : Configurer le Nom du Repository

**Si votre repository GitHub a un nom différent de `Portfolio`**, vous devez modifier :

1. **`vite.config.js`** - ligne 6 :
   ```javascript
   base: '/VOTRE_NOM_REPO/', // Remplacez par le nom exact
   ```

2. **`src/main.jsx`** - ligne 13 :
   ```javascript
   <BrowserRouter basename="/VOTRE_NOM_REPO">
   ```

## 🐛 Problèmes Courants

### Erreur : "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
```

### Erreur d'authentification
- Utilisez un Personal Access Token au lieu de votre mot de passe
- Créez-en un ici : https://github.com/settings/tokens
- Sélectionnez les permissions : `repo`

### Erreur : "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

**Une fois le code sur GitHub, vous pourrez le déployer sur GitHub Pages !** 🚀

