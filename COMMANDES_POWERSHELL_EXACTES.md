# 🎥 Commandes PowerShell Exactes - Chemins Complets

## 📍 Position de départ
Vous devez être dans : `C:\Personnel Projet\Portfolio`

---

## 🚀 Option 1 : Depuis la racine du projet (RECOMMANDÉ)

### Étape 1 : Vérifier que vous êtes au bon endroit
```powershell
cd "C:\Personnel Projet\Portfolio"
pwd
```

### Étape 2 : Re-encoder les vidéos (une par une)

**Vidéo 1 : e-commerce_client.mp4**
```powershell
ffmpeg -i "public\demo-videos\e-commerce_client.mp4" -vcodec libx264 -acodec aac "public\demo-videos\e-commerce_client_h264.mp4"
```

**Vidéo 2 : e-commerce_manager.mp4**
```powershell
ffmpeg -i "public\demo-videos\e-commerce_manager.mp4" -vcodec libx264 -acodec aac "public\demo-videos\e-commerce_manager_h264.mp4"
```

**Vidéo 3 : CortexIT.mp4**
```powershell
ffmpeg -i "public\demo-videos\CortexIT.mp4" -vcodec libx264 -acodec aac "public\demo-videos\CortexIT_h264.mp4"
```

**Vidéo 4 : velocityrun-demo.mp4**
```powershell
ffmpeg -i "public\demo-videos\velocityrun-demo.mp4" -vcodec libx264 -acodec aac "public\demo-videos\velocityrun-demo_h264.mp4"
```

### Étape 3 : Remplacer les anciennes vidéos
```powershell
cd "public\demo-videos"
del e-commerce_client.mp4
del e-commerce_manager.mp4
del CortexIT.mp4
del velocityrun-demo.mp4
ren e-commerce_client_h264.mp4 e-commerce_client.mp4
ren e-commerce_manager_h264.mp4 e-commerce_manager.mp4
ren CortexIT_h264.mp4 CortexIT.mp4
ren velocityrun-demo_h264.mp4 velocityrun-demo.mp4
cd "..\.."
```

### Étape 4 : Commit et push
```powershell
git add public/demo-videos/*.mp4
git commit -m "Re-encoder les vidéos en H.264 + AAC"
git push origin main
```

---

## 🚀 Option 2 : Depuis le dossier des vidéos

### Étape 1 : Aller dans le dossier des vidéos
```powershell
cd "C:\Personnel Projet\Portfolio\public\demo-videos"
```

### Étape 2 : Re-encoder les vidéos

**Vidéo 1 :**
```powershell
ffmpeg -i e-commerce_client.mp4 -vcodec libx264 -acodec aac e-commerce_client_h264.mp4
```

**Vidéo 2 :**
```powershell
ffmpeg -i e-commerce_manager.mp4 -vcodec libx264 -acodec aac e-commerce_manager_h264.mp4
```

**Vidéo 3 :**
```powershell
ffmpeg -i CortexIT.mp4 -vcodec libx264 -acodec aac CortexIT_h264.mp4
```

**Vidéo 4 :**
```powershell
ffmpeg -i velocityrun-demo.mp4 -vcodec libx264 -acodec aac velocityrun-demo_h264.mp4
```

### Étape 3 : Remplacer les anciennes
```powershell
del e-commerce_client.mp4
del e-commerce_manager.mp4
del CortexIT.mp4
del velocityrun-demo.mp4
ren e-commerce_client_h264.mp4 e-commerce_client.mp4
ren e-commerce_manager_h264.mp4 e-commerce_manager.mp4
ren CortexIT_h264.mp4 CortexIT.mp4
ren velocityrun-demo_h264.mp4 velocityrun-demo.mp4
```

### Étape 4 : Retourner à la racine et commit
```powershell
cd "C:\Personnel Projet\Portfolio"
git add public/demo-videos/*.mp4
git commit -m "Re-encoder les vidéos en H.264 + AAC"
git push origin main
```

---

## 📋 Version Copier-Coller Complète (Option 2)

Copiez-collez tout ce bloc dans PowerShell :

```powershell
cd "C:\Personnel Projet\Portfolio\public\demo-videos"
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
cd "C:\Personnel Projet\Portfolio"
git add public/demo-videos/*.mp4
git commit -m "Re-encoder les vidéos en H.264 + AAC"
git push origin main
```

---

## ⚠️ Important

- **Attendez** que chaque commande `ffmpeg` se termine avant de passer à la suivante
- Chaque re-encodage peut prendre **plusieurs minutes**
- Les vidéos originales seront **supprimées** après le renommage (faites un backup si besoin)

