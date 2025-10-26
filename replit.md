# Portfolio Application

## Overview

This is a personal portfolio website built with React and Vite, designed to showcase projects and provide CS career guidance. The application is configured for deployment to GitHub Pages at `https://muhddanishaiman.github.io/portfolio-app/`.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with Vite build tool

**Rationale**: Vite provides fast development server and optimized production builds. React offers component-based architecture for maintainable UI code.

**Build Configuration**: 
- Base path configured for GitHub Pages deployment (`/portfolio-app/`)
- Static assets bundled and optimized during build process
- Output directory: `dist/`

**Styling**: 
- Tailwind CSS for utility-first styling
- Custom font loading (Computer Modern Serif, Inter, JetBrains Mono, Lora)
- Responsive design with viewport constraints

### Deployment Architecture

**Hosting**: GitHub Pages

**Two deployment strategies supported**:

1. **Automated CI/CD (Recommended)**
   - GitHub Actions workflow (`.github/workflows/deploy.yml`)
   - Triggers on push to `main` branch
   - Automatically builds and deploys to `gh-pages` branch
   - Pros: Zero-touch deployment, always current
   - Cons: Requires GitHub Actions configuration

2. **Manual Deployment**
   - Uses `gh-pages` npm package
   - Developer runs `npm run build && npm run deploy`
   - Pros: Full control over deployment timing
   - Cons: Manual process, can forget to deploy

**Branch Structure**:
- `main`: Source code and development
- `gh-pages`: Compiled production assets (auto-generated)

### Static Asset Handling

**Problem**: GitHub Pages uses Jekyll by default, which ignores files starting with underscores.

**Solution**: `.nojekyll` file placed in `client/public/` directory prevents Jekyll processing, ensuring all bundled assets are served correctly.

**Asset References**: All static assets use absolute paths with base URL (`/portfolio/`) to ensure proper loading on GitHub Pages subdirectory deployment.

## External Dependencies

### Build Tools
- **Vite**: Modern frontend build tool and dev server
- **npm/Node.js**: Package management and script running

### Frontend Libraries
- **React**: UI component library
- **react-jsx-runtime**: JSX transformation runtime

### Deployment Services
- **GitHub Pages**: Static site hosting
- **GitHub Actions**: CI/CD automation (optional)
- **gh-pages package**: Manual deployment utility (alternative)

### External Resources
- **Google Fonts**: Typography (Computer Modern Serif, Inter, JetBrains Mono, Lora)
- Custom font fallbacks to system fonts (Georgia, Times New Roman, system-ui)

### Development Dependencies
- **Tailwind CSS**: Utility-first CSS framework
- Likely includes TypeScript (referenced in `vite.config.ts`)