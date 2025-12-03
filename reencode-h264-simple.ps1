# Script PowerShell simple pour re-encoder les vidéos en H.264
# Compatible GitHub Pages et Vercel

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RE-ENCODAGE VIDÉOS EN H.264" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si FFmpeg est installé
$ffmpegPath = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpegPath) {
    Write-Host "❌ ERREUR : FFmpeg n'est pas installé !" -ForegroundColor Red
    Write-Host "Installez FFmpeg depuis : https://ffmpeg.org/download.html" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host "✅ FFmpeg trouvé : $($ffmpegPath.Source)" -ForegroundColor Green
Write-Host ""

# Dossier des vidéos
$videosDir = "public\demo-videos"
$backupDir = "public\demo-videos\backup"

# Créer un dossier de backup
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Host "📁 Dossier de backup créé : $backupDir" -ForegroundColor Green
}

# Liste des vidéos à re-encoder
$videos = @(
    "e-commerce_client.mp4",
    "e-commerce_manager.mp4",
    "CortexIT.mp4",
    "velocityrun-demo.mp4"
)

Write-Host "Vidéos à re-encoder en H.264 :" -ForegroundColor Cyan
foreach ($video in $videos) {
    $filePath = Join-Path $videosDir $video
    if (Test-Path $filePath) {
        $size = [math]::Round((Get-Item $filePath).Length / 1MB, 2)
        Write-Host "  - $video : $size MB" -ForegroundColor Yellow
    }
}
Write-Host ""

$response = Read-Host "Voulez-vous continuer ? (O/N)"
if ($response -ne "O" -and $response -ne "o") {
    Write-Host "Annulé." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Début du re-encodage..." -ForegroundColor Cyan
Write-Host ""

foreach ($video in $videos) {
    $inputPath = Join-Path $videosDir $video
    $outputPath = Join-Path $videosDir ($video -replace '\.mp4$', '_h264.mp4')
    
    if (-not (Test-Path $inputPath)) {
        Write-Host "⚠️  Fichier non trouvé : $inputPath" -ForegroundColor Yellow
        continue
    }
    
    $originalSize = [math]::Round((Get-Item $inputPath).Length / 1MB, 2)
    
    Write-Host "Re-encodage de $video ($originalSize MB)..." -ForegroundColor Cyan
    
    # Backup de l'original
    $backupPath = Join-Path $backupDir $video
    Copy-Item $inputPath $backupPath -Force
    Write-Host "  📦 Backup créé" -ForegroundColor Gray
    
    # Re-encodage en H.264 avec commande simple et efficace
    # Format recommandé pour GitHub Pages et Vercel
    $ffmpegArgs = @(
        "-i", "`"$inputPath`"",
        "-vcodec", "libx264",      # Codec vidéo H.264
        "-acodec", "aac",          # Codec audio AAC
        "-preset", "medium",       # Équilibre qualité/vitesse
        "-crf", "23",              # Qualité (18-28, 23 = bon équilibre)
        "-pix_fmt", "yuv420p",    # Format pixels compatible
        "-movflags", "+faststart", # Optimise pour streaming web
        "`"$outputPath`""
    )
    
    Write-Host "  ⏳ Encodage en cours (cela peut prendre plusieurs minutes)..." -ForegroundColor Yellow
    
    $process = Start-Process -FilePath "ffmpeg" -ArgumentList $ffmpegArgs -Wait -NoNewWindow -PassThru
    
    if ($process.ExitCode -eq 0 -and (Test-Path $outputPath)) {
        $newSize = [math]::Round((Get-Item $outputPath).Length / 1MB, 2)
        
        Write-Host "  ✅ Re-encodage réussi !" -ForegroundColor Green
        Write-Host "     Taille originale : $originalSize MB" -ForegroundColor Gray
        Write-Host "     Taille H.264 : $newSize MB" -ForegroundColor Gray
        
        # Vérifier le codec
        $codecCheck = & ffprobe -v error -select_streams v:0 -show_entries stream=codec_name -of default=noprint_wrappers=1:nokey=1 $outputPath 2>&1
        if ($codecCheck -eq "h264") {
            Write-Host "     ✅ Codec H.264 confirmé" -ForegroundColor Green
        }
        
        if ($newSize -lt 100) {
            Write-Host "     ✅ Taille OK pour GitHub Pages (< 100 MB)" -ForegroundColor Green
        }
    } else {
        Write-Host "  ❌ Erreur lors du re-encodage" -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RE-ENCODAGE TERMINÉ" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Prochaines étapes :" -ForegroundColor Yellow
Write-Host "1. Vérifiez les vidéos re-encodées (fichiers _h264.mp4)" -ForegroundColor White
Write-Host "2. Testez-les pour vérifier la qualité" -ForegroundColor White
Write-Host "3. Remplacez les originaux :" -ForegroundColor White
Write-Host "   - Supprimez les fichiers .mp4 originaux" -ForegroundColor Gray
Write-Host "   - Renommez les fichiers _h264.mp4 en .mp4" -ForegroundColor Gray
Write-Host "4. Les originaux sont sauvegardés dans : $backupDir" -ForegroundColor White
Write-Host "5. Commit et push :" -ForegroundColor White
Write-Host "   git add public/demo-videos/*.mp4" -ForegroundColor Gray
Write-Host "   git commit -m 'Re-encoder les vidéos en H.264'" -ForegroundColor Gray
Write-Host "   git push origin main" -ForegroundColor Gray
Write-Host ""
pause

