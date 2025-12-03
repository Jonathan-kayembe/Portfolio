@echo off
echo ========================================
echo   REDEPLOIEMENT COMPLET GITHUB PAGES
echo ========================================
echo.

echo [1/5] Verification de l'etat Git...
git status
echo.

echo [2/5] Ajout de tous les fichiers modifies...
git add -A
echo.

echo [3/5] Creation du commit avec toutes les modifications...
git commit -m "Redepoiement complet - Mise a jour du portfolio"
if %errorlevel% neq 0 (
    echo Aucune modification a commiter.
) else (
    echo Commit cree avec succes.
)
echo.

echo [4/5] Envoi sur GitHub...
git push origin main
echo.

echo [5/5] Forcage d'un nouveau deploiement...
git commit --allow-empty -m "Force deployment - Reset complet"
git push origin main
echo.

echo ========================================
echo   TERMINE !
echo ========================================
echo.
echo Prochaines etapes :
echo 1. Allez sur : https://github.com/Jonathan-kayembe/Portfolio/actions
echo 2. Surveillez le workflow "Deploy to GitHub Pages"
echo 3. Attendez qu'il soit vert (succes)
echo 4. Attendez 5-10 minutes
echo 5. Videz le cache (Ctrl + Shift + R) et testez
echo.
pause

