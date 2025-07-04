#!/bin/bash

# Dahej Dock Deployment Script
# This script builds and deploys the app to GitHub Pages

echo "🎭 Deploying Dahej Dock to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository. Please run 'git init' first."
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes."
    read -p "Do you want to commit them first? (y/n): " commit_changes
    if [ "$commit_changes" = "y" ] || [ "$commit_changes" = "Y" ]; then
        git add .
        read -p "Enter commit message: " commit_message
        git commit -m "$commit_message"
    fi
fi

# Build and deploy
echo "🔨 Building the application..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://calculatemydahej.publicvm.com"
echo "📝 Don't forget to enable GitHub Pages in your repository settings!"
echo "🔧 Make sure to set up DNS records for calculatemydahej.publicvm.com to point to GitHub Pages"

# Open the repository in browser (optional)
read -p "Open repository settings in browser? (y/n): " open_browser
if [ "$open_browser" = "y" ] || [ "$open_browser" = "Y" ]; then
    if command -v open &> /dev/null; then
        open "https://github.com/myorg259/calculate-my-dahej/settings/pages"
    elif command -v xdg-open &> /dev/null; then
        xdg-open "https://github.com/myorg259/calculate-my-dahej/settings/pages"
    else
        echo "Please manually open https://github.com/myorg259/calculate-my-dahej/settings/pages to enable Pages."
    fi
fi 