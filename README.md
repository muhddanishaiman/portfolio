# Personal Portfolio Website

A modern, dark-themed personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a Replit-inspired color scheme and LaTeX-style typography.

## Features

- **About Page**: Landing page with personal introduction and background
- **Projects Page**: Showcase your GitHub projects with descriptions and links
- **CS Career Guide**: Recommendations for different CS career paths with curated EdX courses
- **Dark Mode**: Replit-inspired dark theme throughout
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **LaTeX Typography**: Clean, academic-style fonts for readability

## Customization

All placeholder content is marked with `[YOUR_*]` tags. Replace these with your actual information:

### About Page (`client/src/pages/About.tsx`)
- `[YOUR_NAME]` - Your full name
- `[YOUR_TAGLINE]` - Brief professional tagline
- `[YOUR_BACKGROUND_PARAGRAPH_1]` - First background paragraph
- `[YOUR_BACKGROUND_PARAGRAPH_2]` - Second background paragraph
- `[YOUR_SKILLS_DESCRIPTION]` - Description of your skills
- `[SKILL_1]` through `[SKILL_4]` - Your key skills
- `[YOUR_INTERESTS_DESCRIPTION]` - Your interests and hobbies

### Projects Page (`client/src/pages/Projects.tsx`)
- `[PROJECT_*_TITLE]` - Project titles
- `[PROJECT_*_DESCRIPTION]` - Project descriptions
- `[PROJECT_*_GITHUB_URL]` - GitHub repository URLs
- `[PROJECT_*_DEMO_URL]` - Live demo URLs (optional)
- `[TECH_*]` - Technologies used

### Footer & Navigation (`client/src/components/Footer.tsx`, `client/src/components/Navigation.tsx`)
- `[YOUR_GITHUB_URL]` - Your GitHub profile URL
- `[YOUR_LINKEDIN_URL]` - Your LinkedIn profile URL
- `[YOUR_EMAIL]` - Your email address

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5000` to view your portfolio.

## Deployment to GitHub Pages

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts to your `package.json`:

```json
{
  "homepage": "https://[YOUR_USERNAME].github.io/[REPO_NAME]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Replace `[YOUR_USERNAME]` with your GitHub username and `[REPO_NAME]` with your repository name.

### Step 3: Configure Vite for GitHub Pages

Update `vite.config.ts` to include the correct base path:

```typescript
export default defineConfig({
  base: '/[REPO_NAME]/',
  // ... rest of config
});
```

### Step 4: Deploy

```bash
npm run deploy
```

This will build your site and push it to the `gh-pages` branch.

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**

Your site will be live at `https://[YOUR_USERNAME].github.io/[REPO_NAME]` in a few minutes!

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx       # Top navigation bar
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── ProjectCard.tsx     # Individual project card
│   │   └── CareerPathCard.tsx  # Career path recommendation card
│   ├── pages/
│   │   ├── About.tsx           # Landing/About page
│   │   ├── Projects.tsx        # Projects showcase
│   │   └── Recommendations.tsx # CS career guide
│   └── App.tsx                 # Main app component
```

## Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Wouter** - Lightweight routing
- **Vite** - Build tool
- **shadcn/ui** - Component library

## License

MIT License - feel free to use this template for your own portfolio!
