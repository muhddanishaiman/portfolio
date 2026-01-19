# Retro Portfolio - Static Site

A retro-themed portfolio website built with pure HTML, CSS, and JavaScript. Ready for GitHub Pages hosting.

## How to Host on GitHub Pages

### Option 1: Using the `/docs` folder (Recommended)

1. Push this repository to GitHub
2. Go to your repository Settings > Pages
3. Under "Source", select "Deploy from a branch"
4. Select `main` branch and `/docs` folder
5. Click Save
6. Your site will be live at `https://yourusername.github.io/repository-name/`

### Option 2: Using the root folder

1. Copy the contents of the `/docs` folder to your repository root
2. Push to GitHub
3. Go to Settings > Pages
4. Select `main` branch and `/ (root)` folder
5. Click Save

## File Structure

```
docs/
├── index.html       # Portfolio/Home page
├── knowledge.html   # Knowledge Vault page
├── learning.html    # Learning Path page
├── css/
│   └── style.css    # All styles
├── js/
│   └── main.js      # Theme toggle & animations
└── README.md        # This file
```

## How to Customize

### Update Your Profile (index.html)

1. Open `index.html`
2. Find the "Profile Content" section
3. Update:
   - Your name in `<h2 class="profile-name">`
   - Your title in `<div class="profile-title">`
   - Your bio in `<p class="profile-bio">`
   - Social media links (GitHub, LinkedIn URLs)

### Add Your Profile Picture

1. Add your image file to an `images/` folder
2. In `index.html`, uncomment the `<img>` tag and update the `src`:
   ```html
   <img src="images/your-photo.jpg" alt="Your Name" class="profile-image">
   ```
3. Comment out or remove the placeholder `<span class="profile-placeholder">?</span>`

### Add Knowledge Items (knowledge.html)

Copy this template and modify:

```html
<article class="knowledge-card animate-on-scroll">
  <span class="knowledge-category">YOUR CATEGORY</span>
  <h3 class="knowledge-title">Your Topic Title</h3>
  <p class="knowledge-description">Description of what you learned...</p>
  <div class="knowledge-source">
    Source: <a href="https://..." target="_blank">Source Name</a>
  </div>
</article>
```

### Add Learning Path Nodes (learning.html)

For single items:
```html
<div class="timeline-items">
  <article class="timeline-node">
    <span class="timeline-type">TYPE</span>
    <h3 class="timeline-title">Title</h3>
    <span class="timeline-date">Date</span>
    <p class="timeline-description">Description...</p>
  </article>
</div>
```

For parallel/simultaneous activities:
```html
<div class="timeline-parallel">
  <article class="timeline-node">...</article>
  <article class="timeline-node">...</article>
</div>
```

## Features

- **Light/Dark Mode**: Toggle between retro paper (light) and terminal (dark) themes
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Retro Aesthetics**: Scanlines, paper texture, retro fonts
- **Smooth Animations**: Fade-in effects and hover interactions
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no build step required

## Theme Colors

### Light Mode (Default)
- Background: Warm beige/paper color
- Text: Dark ink color
- Accent: Amber/gold

### Dark Mode
- Background: Dark terminal green
- Text: Phosphor green
- Accent: Bright green

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
