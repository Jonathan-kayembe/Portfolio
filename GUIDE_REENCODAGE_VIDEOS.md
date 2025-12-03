# 🎥 Guide : Re-encoder les Vidéos avec le Bon Codec

## 🔍 Problème Identifié

L'erreur **"Format vidéo non supporté"** (code 4) indique que le navigateur ne peut pas décoder le codec vidéo utilisé dans vos fichiers MP4.

## ✅ Solution : Re-encoder en H.264

Les vidéos doivent être encodées avec le codec **H.264 (AVC)** pour une compatibilité maximale avec tous les navigateurs.

---

## 🛠️ Méthode 1 : Avec FFmpeg (Recommandé)

### Installation FFmpeg

**Windows :**
- Téléchargez : https://ffmpeg.org/download.html
- Ou via Chocolatey : `choco install ffmpeg`

### Commande de Re-encodage

```bash
# Re-encoder e-commerce_client.mp4 en H.264
ffmpeg -i public/demo-videos/e-commerce_client.mp4 \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  public/demo-videos/e-commerce_client_h264.mp4

# Re-encoder e-commerce_manager.mp4
ffmpeg -i public/demo-videos/e-commerce_manager.mp4 \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  public/demo-videos/e-commerce_manager_h264.mp4

# Re-encoder CortexIT.mp4
ffmpeg -i public/demo-videos/CortexIT.mp4 \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  public/demo-videos/CortexIT_h264.mp4

# Re-encoder velocityrun-demo.mp4
ffmpeg -i public/demo-videos/velocityrun-demo.mp4 \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  public/demo-videos/velocityrun-demo_h264.mp4
```

### Paramètres Explicés

- `-c:v libx264` : Codec vidéo H.264
- `-preset medium` : Équilibre qualité/vitesse (peut être `fast`, `medium`, `slow`)
- `-crf 23` : Qualité (18-28, plus bas = meilleure qualité)
- `-c:a aac` : Codec audio AAC
- `-b:a 128k` : Bitrate audio 128 kbps
- `-movflags +faststart` : Optimise pour le streaming web

### Après Re-encodage

1. **Remplacer les anciennes vidéos** par les nouvelles versions `_h264.mp4`
2. **Rebuild et redéployer** :
   ```bash
   npm run build
   git add public/demo-videos/*.mp4
   git commit -m "Re-encoder les vidéos en H.264 pour compatibilité navigateur"
   git push origin main
   ```

---

## 🛠️ Méthode 2 : Script PowerShell Automatique

J'ai créé un script `compress-videos.ps1` qui peut être modifié pour re-encoder en H.264.

---

## 🔍 Vérifier le Codec Actuel

Pour vérifier le codec de vos vidéos actuelles :

```bash
ffprobe -v error -select_streams v:0 -show_entries stream=codec_name -of default=noprint_wrappers=1:nokey=1 public/demo-videos/e-commerce_client.mp4
```

Si le résultat n'est pas `h264`, c'est le problème.

---

## 📋 Checklist

- [ ] Installer FFmpeg
- [ ] Re-encoder toutes les vidéos en H.264
- [ ] Vérifier que les nouvelles vidéos fonctionnent localement
- [ ] Remplacer les anciennes vidéos
- [ ] Rebuild le projet
- [ ] Commit et push
- [ ] Tester sur GitHub Pages

---

## ⚠️ Note Importante

Le re-encodage peut prendre du temps selon la taille des vidéos. Utilisez `-preset fast` pour aller plus vite, mais la qualité sera légèrement inférieure.

