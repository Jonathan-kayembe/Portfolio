# Script PowerShell pour re-encoder les vidéos en H.264 + AAC
# Utilise la commande simple recommandée

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RE-ENCODAGE VIDÉOS EN H.264 + AAC" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si FFmpeg est installé
$ffmpegPath = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpegPath) {
    Write-Host "❌ ERREUR : FFmpeg n'est pas installé !" -ForegroundColor Red
    Write-Host ""
    Write-Host "Assurez-vous que FFmpeg est dans votre PATH" -ForegroundColor Yellow
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

# Liste des vidéos à re-encoder
$videos = @(
    "e-commerce_client.mp4",
    "e-commerce_manager.mp4",
    "CortexIT.mp4",
    "velocityrun-demo.mp4"
)

Write-Host "Vidéos à re-encoder en H.264 + AAC :" -ForegroundColor Cyan
foreach ($video in $videos) {
    $filePath = Join-Path $videosDir $video
    if (Test-Path $filePath) {
        $size = [math]::Round((Get-Item $filePath).Length / 1MB, 2)
        Write-Host "  - $video : $size MB" -ForegroundColor Yellow
    } else {
        Write-Host "  - $video : ❌ Fichier non trouvé" -ForegroundColor Red
    }
}
Write-Host ""

$response = Read-Host "Voulez-vous continuer ? (O/N)"
if ($response -ne "O" -and $response -ne "o") {
    Write-Host "Annulé." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Début du re-encodage en H.264 + AAC..." -ForegroundColor Cyan
Write-Host ""

foreach ($video in $videos) {
    $inputPath = Join-Path $videosDir $video
    $tempPath = Join-Path $videosDir ($video -replace '\.mp4$', '_temp.mp4')
    
    if (-not (Test-Path $inputPath)) {
        Write-Host "⚠️  Fichier non trouvé : $inputPath" -ForegroundColor Yellow
        continue
    }
    
    $originalSize = [math]::Round((Get-Item $inputPath).Length / 1MB, 2)
    
    Write-Host "Re-encodage de $video ($originalSize MB)..." -ForegroundColor Cyan
    
    # Backup de l'original
    $backupPath = Join-Path $backupDir $video
    Copy-Item $inputPath $backupPath -Force
    Write-Host "  📦 Backup créé : $backupPath" -ForegroundColor Gray
    
    # Re-encodage en H.264 + AAC (commande simple recommandée)
    # Format : ffmpeg -i video_originale.mp4 -vcodec libx264 -acodec aac video_ok.mp4
    $ffmpegArgs = @(
        "-i", "`"$inputPath`"",
        "-vcodec", "libx264",
        "-acodec", "aac",
        "`"$tempPath`"",
        "-y"
    )
    
    $process = Start-Process -FilePath "ffmpeg" -ArgumentList $ffmpegArgs -Wait -NoNewWindow -PassThru
    
    if ($process.ExitCode -eq 0 -and (Test-Path $tempPath)) {
        $newSize = [math]::Round((Get-Item $tempPath).Length / 1MB, 2)
        
        # Vérifier le codec AVANT de remplacer
        $codecCheck = & ffprobe -v error -select_streams v:0 -show_entries stream=codec_name -of default=noprint_wrappers=1:nokey=1 $tempPath 2>&1
        
        # Remplacer l'original par la nouvelle version
        Remove-Item $inputPath -Force
        $finalPath = Join-Path $videosDir $video
        Move-Item $tempPath $finalPath -Force
        
        Write-Host "  ✅ Re-encodage réussi !" -ForegroundColor Green
        Write-Host "     Taille originale : $originalSize MB" -ForegroundColor Gray
        Write-Host "     Taille H.264 : $newSize MB" -ForegroundColor Gray
        if ($codecCheck -eq "h264") {
            Write-Host "     ✅ Codec H.264 confirmé" -ForegroundColor Green
        }
    } else {
        Write-Host "  ❌ Erreur lors du re-encodage" -ForegroundColor Red
        if (Test-Path $tempPath) {
            Remove-Item $tempPath -Force
        }
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RE-ENCODAGE TERMINÉ" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Prochaines étapes :" -ForegroundColor Yellow
Write-Host "1. Testez les vidéos re-encodées" -ForegroundColor White
Write-Host "2. Si tout est OK, commit et push :" -ForegroundColor White
Write-Host "   git add public/demo-videos/*.mp4" -ForegroundColor Gray
Write-Host "   git commit -m 'Re-encoder les vidéos en H.264 + AAC'" -ForegroundColor Gray
Write-Host "   git push origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "Les originaux sont sauvegardés dans : $backupDir" -ForegroundColor White
Write-Host ""
pause

