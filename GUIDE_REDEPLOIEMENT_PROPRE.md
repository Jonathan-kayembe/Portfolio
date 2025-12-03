# 🔄 Guide : Supprimer et Refaire le Déploiement GitHub Pages

## 🎯 Objectif

Supprimer complètement l'ancien déploiement et créer un nouveau déploiement propre avec toutes vos modifications à jour.

---

## 📋 Étapes à Suivre

### Étape 1 : Vérifier et Commiter Toutes les Modifications

**Avant de redéployer, assurez-vous que toutes vos modifications sont sur GitHub :**

```bash
# 1. Vérifier l'état
git status

# 2. Ajouter tous les fichiers modifiés
git add -A

# 3. Créer un commit avec toutes les modifications
git commit -m "Mise à jour complète du portfolio"

# 4. Pousser sur GitHub
git push origin main
```

### Étape 2 : Annuler les Workflows en Cours (Optionnel)

Si vous avez des workflows GitHub Actions en cours d'exécution :

1. Allez sur : `https://github.com/Jonathan-kayembe/Portfolio/actions`
2. Si vous voyez un workflow **jaune** (en cours), cliquez dessus
3. Cliquez sur **"Cancel workflow"** (en haut à droite)
4. Attendez que l'annulation soit terminée

### Étape 3 : Vérifier la Configuration GitHub Pages

**IMPORTANT** : Assurez-vous que GitHub Pages est bien configuré :

1. Allez sur : `https://github.com/Jonathan-kayembe/Portfolio/settings/pages`
2. Vérifiez que **Source** = **"GitHub Actions"** (pas "Deploy from a branch")
3. Si ce n'est pas le cas, changez-le et sauvegardez

### Étape 4 : Nettoyer le Build Local (Optionnel mais Recommandé)

Pour être sûr d'avoir un build propre :

```bash
# Supprimer le dossier dist (build local)
rmdir /s /q dist

# Rebuild propre
npm run build
```

**Note** : Le workflow GitHub Actions fera toujours un build propre, donc cette étape est optionnelle.

### Étape 5 : Forcer un Nouveau Déploiement

**Option A : Via GitHub Actions (Recommandé)**

1. Allez sur : `https://github.com/Jonathan-kayembe/Portfolio/actions`
2. Cliquez sur **"Deploy to GitHub Pages"** dans la liste des workflows
3. Cliquez sur **"Run workflow"** (bouton en haut à droite)
4. Sélectionnez la branche **"main"**
5. Cliquez sur **"Run workflow"** (bouton vert)

**Option B : Via Commande Git**

```bash
# Créer un commit vide pour forcer le déploiement
git commit --allow-empty -m "Redéploiement complet - Reset deployment"
git push origin main
```

### Étape 6 : Surveiller le Déploiement

1. Allez dans l'onglet **"Actions"** de votre repository
2. Cliquez sur le workflow **"Deploy to GitHub Pages"** qui vient de démarrer
3. Surveillez la progression :
   - 🟡 **Jaune** = En cours
   - 🟢 **Vert** = Succès ✅
   - 🔴 **Rouge** = Échec ❌

**Le déploiement prend généralement 3-5 minutes.**

### Étape 7 : Attendre et Tester

1. **Attendez 5-10 minutes** après que le workflow soit vert
   - GitHub Pages peut mettre du temps à se mettre à jour

2. **Videz le cache du navigateur** :
   - Windows/Linux : `Ctrl + Shift + R` ou `Ctrl + F5`
   - Mac : `Cmd + Shift + R`

3. **Testez en navigation privée** :
   - Chrome : `Ctrl + Shift + N`
   - Firefox : `Ctrl + Shift + P`
   - Edge : `Ctrl + Shift + N`

4. **Accédez à votre site** :
   ```
   https://Jonathan-kayembe.github.io/Portfolio/
   ```

---

## 🚨 Si le Déploiement Échoue

### Vérifier les Logs

1. Allez dans l'onglet **"Actions"**
2. Cliquez sur le workflow qui a échoué (rouge)
3. Regardez les logs pour identifier l'erreur

### Erreurs Communes

**Erreur : "npm ci failed"**
- **Cause** : Problème avec `package-lock.json`
- **Solution** : 
  ```bash
  npm install
  git add package-lock.json
  git commit -m "Fix package-lock.json"
  git push origin main
  ```

**Erreur : "Build failed"**
- **Cause** : Erreur dans le code
- **Solution** : Vérifiez les logs pour voir l'erreur exacte et corrigez-la

**Erreur : "Permission denied"**
- **Cause** : GitHub Pages pas configuré correctement
- **Solution** : Vérifiez Settings > Pages → Source = "GitHub Actions"

---

## 🔄 Script Complet de Redéploiement

Voici un script PowerShell pour tout faire en une fois :

```powershell
# 1. Vérifier l'état
Write-Host "Vérification de l'état Git..." -ForegroundColor Cyan
git status

# 2. Ajouter tous les fichiers
Write-Host "Ajout de tous les fichiers..." -ForegroundColor Cyan
git add -A

# 3. Créer un commit
Write-Host "Création du commit..." -ForegroundColor Cyan
git commit -m "Redéploiement complet - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 4. Pousser sur GitHub
Write-Host "Envoi sur GitHub..." -ForegroundColor Cyan
git push origin main

# 5. Forcer un nouveau déploiement
Write-Host "Forçage d'un nouveau déploiement..." -ForegroundColor Cyan
git commit --allow-empty -m "Force deployment - Reset"
git push origin main

Write-Host "✅ Terminé ! Allez sur https://github.com/Jonathan-kayembe/Portfolio/actions pour surveiller le déploiement." -ForegroundColor Green
```

---

## 📝 Checklist de Redéploiement

Utilisez cette checklist pour être sûr de tout faire :

- [ ] Toutes les modifications sont commitées et poussées sur GitHub
- [ ] Les workflows en cours sont annulés (si nécessaire)
- [ ] Settings > Pages → Source = "GitHub Actions"
- [ ] Un nouveau déploiement a été déclenché (via Actions ou commit vide)
- [ ] Le workflow est vert (succès)
- [ ] J'ai attendu 5-10 minutes après le déploiement
- [ ] J'ai vidé le cache du navigateur
- [ ] J'ai testé en navigation privée
- [ ] Le site fonctionne correctement

---

## 🎯 Solution Rapide (Tout en Une Fois)

**Si vous voulez tout faire rapidement, exécutez ces commandes :**

```bash
# 1. Ajouter et commiter tout
git add -A
git commit -m "Mise à jour complète - Redéploiement"

# 2. Pousser
git push origin main

# 3. Forcer un nouveau déploiement
git commit --allow-empty -m "Force deployment - Reset"
git push origin main
```

**Puis :**
1. Allez sur `https://github.com/Jonathan-kayembe/Portfolio/actions`
2. Surveillez le workflow jusqu'à ce qu'il soit vert
3. Attendez 5-10 minutes
4. Videz le cache et testez

---

## ✅ Vérification Finale

Après le redéploiement, vérifiez que :

1. ✅ Le workflow est vert dans l'onglet Actions
2. ✅ Settings > Pages montre l'URL de votre site
3. ✅ Le site est accessible à : `https://Jonathan-kayembe.github.io/Portfolio/`
4. ✅ Vos modifications sont visibles sur le site
5. ✅ Toutes les pages fonctionnent correctement

---

## 📞 Si le Problème Persiste

Si après avoir suivi toutes ces étapes le site ne fonctionne toujours pas :

1. **Vérifiez les logs du workflow** dans l'onglet Actions
2. **Vérifiez Settings > Pages** pour voir l'URL et le statut
3. **Vérifiez la console du navigateur** (F12) pour les erreurs JavaScript
4. **Vérifiez que le nom du repository** correspond bien à `Portfolio` dans :
   - `vite.config.js` → `base: '/Portfolio/'`
   - `src/main.jsx` → `basename="/Portfolio"`

---

**Note** : GitHub Pages peut prendre jusqu'à 10 minutes pour se mettre à jour complètement. Soyez patient ! ⏰

