@echo off
echo ====================================
echo   Mise a jour du Portfolio
echo ====================================
echo.

echo [1/3] Ajout des modifications...
git add .
echo.

echo [2/3] Creation du commit...
set /p commit_msg="Message du commit: "
git commit -m "%commit_msg%"
echo.

echo [3/3] Envoi sur GitHub...
git push origin main
echo.

echo ====================================
echo   Mise a jour terminee!
echo ====================================
echo.
echo Le site sera automatiquement deploye dans 3-5 minutes.
echo Verifiez dans l'onglet "Actions" de GitHub.
echo.
pause

