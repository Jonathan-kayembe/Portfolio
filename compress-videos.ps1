# Script PowerShell pour compresser les vidéos du portfolio
# Nécessite FFmpeg installé

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  COMPRESSION DES VIDÉOS DU PORTFOLIO" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si FFmpeg est installé
$ffmpegPath = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpegPath) {
    Write-Host "❌ ERREUR : FFmpeg n'est pas installé !" -ForegroundColor Red
    Write-Host ""
    Write-Host "Installez FFmpeg :" -ForegroundColor Yellow
    Write-Host "1. Téléchargez depuis : https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host "2. Ou installez via Chocolatey : choco install ffmpeg" -ForegroundColor Yellow
    Write-Host ""
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

# Liste des vidéos à compresser
$videos = @(
    @{Name="e-commerce_client.mp4"; Size=122},
    @{Name="e-commerce_manager.mp4"; Size=63},
    @{Name="velocityrun-demo.mp4"; Size=77},
    @{Name="CortexIT.mp4"; Size=36}
)

Write-Host "Vidéos à compresser :" -ForegroundColor Cyan
foreach ($video in $videos) {
    $filePath = Join-Path $videosDir $video.Name
    if (Test-Path $filePath) {
        $actualSize = [math]::Round((Get-Item $filePath).Length / 1MB, 2)
        Write-Host "  - $($video.Name) : $actualSize MB" -ForegroundColor Yellow
    }
}
Write-Host ""

$response = Read-Host "Voulez-vous continuer ? (O/N)"
if ($response -ne "O" -and $response -ne "o") {
    Write-Host "Annulé." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Début de la compression..." -ForegroundColor Cyan
Write-Host ""

foreach ($video in $videos) {
    $inputPath = Join-Path $videosDir $video.Name
    $outputPath = Join-Path $videosDir ($video.Name -replace '\.mp4$', '_compressed.mp4')
    
    if (-not (Test-Path $inputPath)) {
        Write-Host "⚠️  Fichier non trouvé : $inputPath" -ForegroundColor Yellow
        continue
    }
    
    $originalSize = [math]::Round((Get-Item $inputPath).Length / 1MB, 2)
    
    Write-Host "Compression de $($video.Name) ($originalSize MB)..." -ForegroundColor Cyan
    
    # Backup de l'original
    $backupPath = Join-Path $backupDir $video.Name
    Copy-Item $inputPath $backupPath -Force
    Write-Host "  📦 Backup créé : $backupPath" -ForegroundColor Gray
    
    # Compression avec FFmpeg
    # -crf 28 : Qualité (18-28, plus bas = meilleure qualité mais plus gros)
    # -preset slow : Meilleure compression mais plus lent
    # -acodec aac -b:a 128k : Audio AAC à 128kbps
    $ffmpegArgs = @(
        "-i", "`"$inputPath`"",
        "-vcodec", "libx264",
        "-crf", "28",
        "-preset", "slow",
        "-acodec", "aac",
        "-b:a", "128k",
        "-movflags", "+faststart",
        "`"$outputPath`""
    )
    
    $process = Start-Process -FilePath "ffmpeg" -ArgumentList $ffmpegArgs -Wait -NoNewWindow -PassThru
    
    if ($process.ExitCode -eq 0 -and (Test-Path $outputPath)) {
        $newSize = [math]::Round((Get-Item $outputPath).Length / 1MB, 2)
        $reduction = [math]::Round((($originalSize - $newSize) / $originalSize) * 100, 1)
        
        Write-Host "  ✅ Compression réussie !" -ForegroundColor Green
        Write-Host "     Taille originale : $originalSize MB" -ForegroundColor Gray
        Write-Host "     Taille compressée : $newSize MB" -ForegroundColor Gray
        Write-Host "     Réduction : $reduction%" -ForegroundColor Gray
        
        # Vérifier si la taille est < 100 MB
        if ($newSize -lt 100) {
            Write-Host "     ✅ Taille OK pour GitHub Pages (< 100 MB)" -ForegroundColor Green
        } else {
            Write-Host "     ⚠️  Taille toujours > 100 MB, compression plus agressive nécessaire" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ❌ Erreur lors de la compression" -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  COMPRESSION TERMINÉE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Prochaines étapes :" -ForegroundColor Yellow
Write-Host "1. Vérifiez les vidéos compressées dans : $videosDir" -ForegroundColor White
Write-Host "2. Testez-les pour vérifier la qualité" -ForegroundColor White
Write-Host "3. Si la qualité est bonne, remplacez les originaux :" -ForegroundColor White
Write-Host "   - Renommez les fichiers _compressed.mp4 en .mp4" -ForegroundColor Gray
Write-Host "   - Ou supprimez les originaux et renommez les compressées" -ForegroundColor Gray
Write-Host "4. Les originaux sont sauvegardés dans : $backupDir" -ForegroundColor White
Write-Host "5. Rebuild et redéployez : npm run build && git add . && git commit -m 'Compress videos' && git push" -ForegroundColor White
Write-Host ""
pause

