# NoteQuiz AI - Vercel Deployment Guide

## Project Structure
```
/api/index.js         - Express server for Vercel
/file.html           - Main application file
/server.js           - Local development server
/package.json        - Dependencies and scripts
/vercel.json         - Vercel configuration
```

## Deployment Steps

### 1. Install Vercel CLI (if not already installed)
```bash
npm install -g vercel
```

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. Deploy to Vercel

**Option A: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from Git (GitHub, GitLab, or Bitbucket)
4. Select your repository
5. Vercel will auto-detect the configuration
6. Click "Deploy"

**Option B: Using Vercel CLI**
```bash
vercel
```
Follow the prompts to deploy.

### 4. Your site is live!
- Vercel will provide you with a URL like: `https://your-project.vercel.app`

## Local Development
```bash
npm install    # Install dependencies
npm start      # Run local server on http://localhost:3000
```

## Environment Variables (if needed in future)
Add in Vercel dashboard under "Settings" → "Environment Variables"

## Notes
- The app is configured to work with Vercel's serverless infrastructure
- Static files (HTML, CSS, JS) are automatically served
- Node.js 18.x is specified for compatibility
