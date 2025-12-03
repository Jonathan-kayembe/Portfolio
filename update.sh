#!/bin/bash

echo "===================================="
echo "   Mise à jour du Portfolio"
echo "===================================="
echo ""

echo "[1/3] Ajout des modifications..."
git add .
echo ""

echo "[2/3] Création du commit..."
read -p "Message du commit: " commit_msg
git commit -m "$commit_msg"
echo ""

echo "[3/3] Envoi sur GitHub..."
git push origin main
echo ""

echo "===================================="
echo "   Mise à jour terminée!"
echo "===================================="
echo ""
echo "Le site sera automatiquement déployé dans 3-5 minutes."
echo "Vérifiez dans l'onglet 'Actions' de GitHub."
echo ""

