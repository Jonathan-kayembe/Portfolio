# 🎥 Commandes pour Re-encoder les Vidéos en H.264

## 📋 Prérequis

Installer FFmpeg :
- Télécharger : https://ffmpeg.org/download.html
- Ou via Chocolatey : `choco install ffmpeg`

---

## 🚀 Commandes FFmpeg

### Re-encoder e-commerce_client.mp4

```bash
ffmpeg -i public/demo-videos/e-commerce_client.mp4 -c:v libx264 -preset medium -crf 23 -profile:v high -level 4.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/demo-videos/e-commerce_client_h264.mp4
```

### Re-encoder e-commerce_manager.mp4

```bash
ffmpeg -i public/demo-videos/e-commerce_manager.mp4 -c:v libx264 -preset medium -crf 23 -profile:v high -level 4.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/demo-videos/e-commerce_manager_h264.mp4
```

### Re-encoder CortexIT.mp4

```bash
ffmpeg -i public/demo-videos/CortexIT.mp4 -c:v libx264 -preset medium -crf 23 -profile:v high -level 4.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/demo-videos/CortexIT_h264.mp4
```

### Re-encoder velocityrun-demo.mp4

```bash
ffmpeg -i public/demo-videos/velocityrun-demo.mp4 -c:v libx264 -preset medium -crf 23 -profile:v high -level 4.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/demo-videos/velocityrun-demo_h264.mp4
```

---

## 📝 Après le Re-encodage

1. **Vérifier que les nouvelles vidéos fonctionnent** (testez-les localement)

2. **Remplacer les anciennes vidéos** :
   - Supprimez ou renommez les anciennes vidéos
   - Renommez les fichiers `_h264.mp4` en `.mp4`

3. **Commit et push** :
   ```bash
   git add public/demo-videos/*.mp4
   git commit -m "Re-encoder les vidéos en H.264 pour compatibilité navigateur"
   git push origin main
   ```

4. **Vercel redéploiera automatiquement** (si connecté à GitHub)

---

## ⚡ Version Rapide (Toutes les Vidéos)

Si vous voulez tout faire en une fois, créez un fichier `reencode-all.bat` :

```batch
@echo off
echo Re-encodage de toutes les vidéos en H.264...

ffmpeg -i public/demo-videos/e-commerce_client.mp4 -c:v libx264 -preset medium -crf 23 -profile:v high -level 4.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/demo-videos/e-commerce_client_h264.mp4

ffmpeg -i public/demo-videos/e-commerce_manager.mp4 -c:v libx264 -preset medium -crf 23 -profile:v high -level 4.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/demo-videos/e-commerce_manager_h264.mp4

ffmpeg -i public/demo-videos/CortexIT.mp4 -c:v libx264 -preset medium -crf 23 -profile:v high -level 4.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/demo-videos/CortexIT_h264.mp4

ffmpeg -i public/demo-videos/velocityrun-demo.mp4 -c:v libx264 -preset medium -crf 23 -profile:v high -level 4.0 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/demo-videos/velocityrun-demo_h264.mp4

echo.
echo Re-encodage terminé !
echo Renommez les fichiers _h264.mp4 en .mp4 et remplacez les originaux.
pause
```

---

## ✅ Paramètres Explicés

- `-c:v libx264` : Codec vidéo H.264
- `-preset medium` : Équilibre qualité/vitesse
- `-crf 23` : Qualité (18-28, 23 = bon équilibre)
- `-profile:v high` : Profil H.264 high (meilleure compatibilité)
- `-level 4.0` : Niveau H.264 4.0 (compatible tous navigateurs)
- `-pix_fmt yuv420p` : Format pixels compatible (nécessaire)
- `-c:a aac` : Codec audio AAC
- `-b:a 128k` : Bitrate audio 128 kbps
- `-movflags +faststart` : Optimise pour streaming web

---

**Après le re-encodage, les vidéos fonctionneront sur Vercel et GitHub Pages !** 🎉


