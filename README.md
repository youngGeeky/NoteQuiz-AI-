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
 - Node.js 24.x is specified for Vercel compatibility

## Vercel Analytics (Quick setup)

1. In the Vercel dashboard for your project enable Analytics/Insights.
2. In your deployed site, add the provided client snippet. A client-side
	snippet has been added to `file.html` already using your Project ID.
	If you need to change it, edit the `data-project-id` value.

3. Server-side events (optional):
	- We added a safe placeholder in `server.js` for server-side wiring.
	- If you want to send server-side events, require `@vercel/analytics`
	  inside a try/catch and call the SDK methods inside the example
	  middleware block.

4. Verify data in the Vercel dashboard under Analytics → Insights.
