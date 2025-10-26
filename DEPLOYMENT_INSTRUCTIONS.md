# GitHub Pages Deployment Instructions

## Overview
Your portfolio website is ready to be deployed to GitHub Pages at:
**https://muhddanishaiman.github.io/portfolio-app/**

## Current Setup
- Repository: https://github.com/muhddanishaiman/portfolio-app
- Source code branch: `main`
- Deployment branch: `gh-pages`

## Steps to Deploy

### 1. Switch to Main Branch
First, switch to the `main` branch where your source code lives:
```bash
git checkout main
```

### 2. Update Configuration Files

#### a. Update `vite.config.ts`
Change the base path from `/portfolio/` to `/portfolio-app/`:

```typescript
export default defineConfig({
  base: '/portfolio-app/',  // Changed from '/portfolio/'
  // ... rest of config
});
```

#### b. Update `package.json`
Change the homepage URL:

```json
{
  "homepage": "https://muhddanishaiman.github.io/portfolio-app/",
  // ... rest of package.json
}
```

### 3. Add GitHub Actions Workflow

Create `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Add .nojekyll File

Create a `.nojekyll` file in the `client/public/` directory:
```bash
touch client/public/.nojekyll
```

This prevents GitHub Pages from processing your files with Jekyll.

### 5. Configure GitHub Pages Settings

1. Go to your repository on GitHub: https://github.com/muhddanishaiman/portfolio-app
2. Click on **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Save the changes

### 6. Commit and Push

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 7. Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. Watch the "Deploy to GitHub Pages" workflow run
3. Once complete (green checkmark), your site will be live at:
   **https://muhddanishaiman.github.io/portfolio-app/**

## Alternative: Manual Deployment

If you prefer manual deployment, you can use the existing gh-pages package:

```bash
npm run build
npm run deploy
```

This will build and push to the `gh-pages` branch automatically.

## Troubleshooting

### Issue: 404 Page Not Found
- Ensure the base path in `vite.config.ts` matches your repository name
- Check that GitHub Pages is configured to use "GitHub Actions" as source

### Issue: Broken CSS/JS Links
- Verify the base path is `/portfolio-app/` (with trailing slash)
- Clear browser cache and try again

### Issue: Build Fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (should be 18 or higher)

## Notes

- The `main` branch contains your source code
- The `gh-pages` branch (or GitHub Actions) contains the built static files
- Always make changes on the `main` branch
- Deployment happens automatically when you push to `main` (with GitHub Actions workflow)
