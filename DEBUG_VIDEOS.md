# 🐛 Debug : Problème avec les Vidéos

## Problème
Les vidéos ne se lancent pas (bouton play ne fonctionne pas).

## Modifications Apportées

J'ai amélioré le code des vidéos dans `src/pages/ProjectDetails.jsx` :

1. ✅ Ajouté `preload="metadata"` - Charge les métadonnées de la vidéo
2. ✅ Ajouté `playsInline` - Pour compatibilité iOS
3. ✅ Ajouté `onError` - Pour déboguer les erreurs dans la console
4. ✅ Supprimé la source webm qui n'existe pas

## Vérifications à Faire

### 1. Vérifier dans la Console du Navigateur

1. Ouvrez votre site : `https://Jonathan-kayembe.github.io/Portfolio/`
2. Ouvrez la console (F12)
3. Allez sur une page avec une vidéo
4. Regardez les erreurs dans la console
5. Vérifiez l'onglet "Network" pour voir si les vidéos sont chargées

### 2. Vérifier le Chemin

Le chemin devrait être : `/Portfolio/demo-videos/e-commerce_client.mp4`

Dans la console, vous devriez voir le chemin exact utilisé.

### 3. Tester Localement

```bash
npm run build
npm run preview
```

Puis testez les vidéos localement pour voir si le problème vient de GitHub Pages ou du code.

### 4. Vérifier les Permissions GitHub Pages

Assurez-vous que :
- Les vidéos sont bien dans `dist/demo-videos/` après le build
- Le workflow GitHub Actions s'est bien exécuté
- Les fichiers vidéo sont bien déployés

## Solutions Possibles

### Si le problème est le chemin :
- Vérifier que `import.meta.env.BASE_URL` est bien `/Portfolio/`
- Vérifier que le chemin ne contient pas de double slash

### Si le problème est la taille :
- Les vidéos sont maintenant toutes < 100 MB ✅
- Mais GitHub Pages peut avoir des limites de bande passante

### Si le problème est CORS ou permissions :
- Ajouter `crossOrigin="anonymous"` à la balise video
- Vérifier les headers HTTP de GitHub Pages

## Prochaines Étapes

1. **Commit et push les modifications** :
   ```bash
   git add src/pages/ProjectDetails.jsx
   git commit -m "Améliorer la compatibilité des vidéos - Ajouter preload et playsInline"
   git push origin main
   ```

2. **Attendre le déploiement** (5-10 minutes)

3. **Tester et vérifier la console** pour voir les erreurs exactes

4. **Partager les erreurs** si le problème persiste

