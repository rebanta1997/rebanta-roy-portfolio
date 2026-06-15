#!/bin/bash

echo "🚀 Starting deployment pipeline..."
echo ""

# Pull latest changes
echo "📥 Pulling latest changes from remote..."
git pull origin main

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo ""
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed! Please check the errors above."
  exit 1
fi

echo ""
echo "✅ Build successful!"

# Commit and push to trigger deployment
echo ""
echo "🔄 Triggering deployment workflow..."
git add -A
git diff-index --quiet HEAD -- || git commit -m "chore: deploy latest changes"
git push origin main

echo ""
echo "✅ Deploy complete! Your site is updating..."
echo ""
echo "📊 Check workflow status:"
echo "   https://github.com/rebanta1997/rebanta-roy-portfolio/actions"
echo ""
echo "🌐 View your live site:"
echo "   https://rebanta1997.github.io/rebanta-roy-portfolio/"
echo ""
