@echo off
echo ========================================
echo   RE-ENCODAGE VIDÉOS EN H.264 + AAC
echo ========================================
echo.

REM Vérifier si FFmpeg est installé
where ffmpeg >nul 2>&1
if %errorlevel% neq 0 (
    echo ERREUR : FFmpeg n'est pas dans le PATH
    echo Assurez-vous que FFmpeg est installé et accessible
    pause
    exit /b 1
)

echo FFmpeg trouve !
echo.

REM Dossier des vidéos
set "VIDEOS_DIR=public\demo-videos"
set "BACKUP_DIR=public\demo-videos\backup"

REM Créer le dossier de backup
if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"
echo Dossier de backup cree : %BACKUP_DIR%
echo.

REM Liste des vidéos à re-encoder
set "VIDEOS=e-commerce_client.mp4 e-commerce_manager.mp4 CortexIT.mp4 velocityrun-demo.mp4"

echo Vidéos à re-encoder :
for %%v in (%VIDEOS%) do (
    if exist "%VIDEOS_DIR%\%%v" (
        echo   - %%v
    ) else (
        echo   - %%v : FICHIER NON TROUVE
    )
)
echo.

set /p CONTINUE="Voulez-vous continuer ? (O/N): "
if /i not "%CONTINUE%"=="O" (
    echo Annule.
    pause
    exit /b 0
)

echo.
echo Debut du re-encodage...
echo.

for %%v in (%VIDEOS%) do (
    set "INPUT=%VIDEOS_DIR%\%%v"
    set "OUTPUT=%VIDEOS_DIR%\%%v"
    set "TEMP=%VIDEOS_DIR%\%%~nv_temp.mp4"
    
    if not exist "!INPUT!" (
        echo FICHIER NON TROUVE : !INPUT!
        echo.
        continue
    )
    
    echo Re-encodage de %%v...
    
    REM Backup de l'original
    copy "!INPUT!" "%BACKUP_DIR%\%%v" >nul
    echo   Backup cree : %BACKUP_DIR%\%%v
    
    REM Re-encoder en H.264 + AAC
    ffmpeg -i "!INPUT!" -vcodec libx264 -acodec aac "!TEMP!" -y
    
    if %errorlevel% equ 0 (
        REM Remplacer l'original par la nouvelle version
        del "!INPUT!" >nul 2>&1
        ren "!TEMP!" "%%v"
        echo   Re-encodage reussi !
    ) else (
        echo   ERREUR lors du re-encodage
        if exist "!TEMP!" del "!TEMP!" >nul 2>&1
    )
    
    echo.
)

echo ========================================
echo   RE-ENCODAGE TERMINE
echo ========================================
echo.
echo Prochaines etapes :
echo 1. Testez les vidéos re-encodees
echo 2. Si tout est OK, commit et push :
echo    git add public/demo-videos/*.mp4
echo    git commit -m "Re-encoder les vidéos en H.264 + AAC"
echo    git push origin main
echo.
echo Les originaux sont sauvegardes dans : %BACKUP_DIR%
echo.
pause

