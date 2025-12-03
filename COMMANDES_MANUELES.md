# 🎥 Commandes Manuelles pour Re-encoder les Vidéos

## 📋 Instructions Pas à Pas

### 1. Ouvrir PowerShell
- Ouvrez PowerShell dans le dossier de votre projet : `C:\Personnel Projet\Portfolio`

### 2. Aller dans le dossier des vidéos
```powershell
cd public\demo-videos
```

### 3. Re-encoder chaque vidéo

#### Vidéo 1 : e-commerce_client.mp4
```powershell
ffmpeg -i e-commerce_client.mp4 -vcodec libx264 -acodec aac e-commerce_client_h264.mp4
```

#### Vidéo 2 : e-commerce_manager.mp4
```powershell
ffmpeg -i e-commerce_manager.mp4 -vcodec libx264 -acodec aac e-commerce_manager_h264.mp4
```

#### Vidéo 3 : CortexIT.mp4
```powershell
ffmpeg -i CortexIT.mp4 -vcodec libx264 -acodec aac CortexIT_h264.mp4
```

#### Vidéo 4 : velocityrun-demo.mp4
```powershell
ffmpeg -i velocityrun-demo.mp4 -vcodec libx264 -acodec aac velocityrun-demo_h264.mp4
```

### 4. Vérifier les nouvelles vidéos
```powershell
dir *_h264.mp4
```

### 5. Remplacer les anciennes vidéos
```powershell
# Supprimer les anciennes
del e-commerce_client.mp4
del e-commerce_manager.mp4
del CortexIT.mp4
del velocityrun-demo.mp4

# Renommer les nouvelles
ren e-commerce_client_h264.mp4 e-commerce_client.mp4
ren e-commerce_manager_h264.mp4 e-commerce_manager.mp4
ren CortexIT_h264.mp4 CortexIT.mp4
ren velocityrun-demo_h264.mp4 velocityrun-demo.mp4
```

### 6. Retourner à la racine et commit
```powershell
cd ..\..
git add public/demo-videos/*.mp4
git commit -m "Re-encoder les vidéos en H.264 + AAC"
git push origin main
```

---

## ⚡ Version Rapide (Copier-Coller)

Copiez-collez tout ce bloc dans PowerShell :

```powershell
cd public\demo-videos
ffmpeg -i e-commerce_client.mp4 -vcodec libx264 -acodec aac e-commerce_client_h264.mp4
ffmpeg -i e-commerce_manager.mp4 -vcodec libx264 -acodec aac e-commerce_manager_h264.mp4
ffmpeg -i CortexIT.mp4 -vcodec libx264 -acodec aac CortexIT_h264.mp4
ffmpeg -i velocityrun-demo.mp4 -vcodec libx264 -acodec aac velocityrun-demo_h264.mp4
del e-commerce_client.mp4
del e-commerce_manager.mp4
del CortexIT.mp4
del velocityrun-demo.mp4
ren e-commerce_client_h264.mp4 e-commerce_client.mp4
ren e-commerce_manager_h264.mp4 e-commerce_manager.mp4
ren CortexIT_h264.mp4 CortexIT.mp4
ren velocityrun-demo_h264.mp4 velocityrun-demo.mp4
cd ..\..
git add public/demo-videos/*.mp4
git commit -m "Re-encoder les vidéos en H.264 + AAC"
git push origin main
```

---

## ⚠️ Important

- **Remplacez `video_originale.mp4`** par le nom réel de votre fichier
- **Remplacez `video_ok.mp4`** par le nom que vous voulez pour la sortie
- Chaque commande peut prendre **plusieurs minutes** selon la taille de la vidéo
- Attendez que chaque commande se termine avant de passer à la suivante

