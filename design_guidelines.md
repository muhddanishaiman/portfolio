# Design Guidelines: Personal Portfolio Website

## Design Approach

**Selected Approach:** Design System with Developer Portfolio Inspiration

Drawing from Material Design Dark Theme principles combined with developer portfolio aesthetics (GitHub, Replit, Read.cv). The design prioritizes readability, professional presentation, and clear content hierarchy suitable for showcasing technical work.

**Key Design Principles:**
- Information clarity over decoration
- Scannable content structure
- Professional developer aesthetic
- Consistent dark theme implementation
- Typography-driven hierarchy

---

## Core Design Elements

### A. Typography

**Font Families:**
- Primary: Computer Modern Serif or Latin Modern Roman (LaTeX-inspired) for headings and emphasis
- Secondary: Computer Modern Sans or Inter for body text and UI elements
- Monospace: JetBrains Mono for code snippets and technical details

**Type Scale:**
- Hero/Page Titles: 3xl to 4xl, font-bold, serif
- Section Headings: 2xl, font-semibold, serif  
- Subsections: xl, font-medium, sans-serif
- Body Text: base to lg, font-normal, sans-serif, leading-relaxed
- Captions/Metadata: sm, font-normal, opacity-70

### B. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Grid column gaps: gap-8 to gap-12

**Container Strategy:**
- Maximum width: max-w-6xl for content areas
- Full-width navigation and footer
- Centered layouts with mx-auto
- Responsive padding: px-6 on mobile, px-8 on desktop

**Grid Systems:**
- Projects grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Recommendations grid: grid-cols-1 lg:grid-cols-2
- About page: Single column max-w-4xl for optimal reading

---

## C. Component Library

### Navigation
**Header Design:**
- Fixed top navigation with backdrop blur effect
- Logo/name on left (serif typography)
- Navigation links on right: About, Projects, Recommendations
- Subtle bottom border separator
- Height: h-16
- Spacing: justify-between with gap-8

### About/Landing Page
**Hero Section:**
- No large hero image (typography-focused)
- Centered layout with max-w-4xl
- Name/title in large serif (text-4xl to text-5xl)
- Brief tagline in secondary font (text-xl)
- Vertical spacing: py-24 to py-32
- Call-to-action buttons: "View Projects" and "GitHub Profile"

**About Content:**
- Single column prose layout
- Section breaks with subtle horizontal rules
- Subsections for: Background, Skills, Interests
- Placeholder text markers: [YOUR_NAME], [YOUR_BACKGROUND]
- Reading-optimized line length (max-w-prose)

### Projects Page
**Page Structure:**
- Page title with description subtitle
- Filtering/sorting controls (Optional future enhancement - use comment)
- Grid of project cards

**Project Cards:**
- Elevated card design with border and subtle hover lift
- Card padding: p-6
- Content structure:
  - Project title (text-xl, font-semibold)
  - Description (2-3 lines, text-base, opacity-90)
  - Tech stack tags (flex wrap, small badges)
  - GitHub link with icon (bottom of card)
- Minimum height for consistency
- Hover state: subtle scale and shadow increase

### CS Recommendations Page
**Page Structure:**
- Introduction section explaining the guide's purpose
- Grid of career path cards (2 columns on desktop)

**Career Path Cards:**
- Larger cards than projects: p-8
- Structure per card:
  - Path icon/illustration placeholder (<!-- CUSTOM ICON: career path icon -->)
  - Career title (text-2xl, serif)
  - "Why choose this path" section (bulleted list)
  - "What you'll learn" highlights
  - Difficulty indicator (Beginner/Intermediate/Advanced)
  - Curated course links section:
    - EdX course title + link
    - Course provider and duration
    - 2-3 courses per path
- Call-to-action: "Explore [Career Path]"

### Footer
**Footer Design:**
- Full-width with top border
- Three-column layout on desktop, stacked on mobile:
  - Left: Brief personal statement or tagline
  - Center: Quick navigation links
  - Right: Social/contact links (GitHub, LinkedIn, Email)
- Copyright notice
- Padding: py-12

---

## D. Animations

**Minimal Animation Strategy:**
- Card hover: subtle transform scale-105 with transition-transform duration-200
- Navigation links: underline decoration with transition on hover
- Page transitions: Simple fade-in on route change
- No scroll animations, parallax effects, or complex motion

---

## Page-Specific Layouts

### About (Landing) Page
1. Hero section (centered, typography-focused)
2. About content (single column, prose)
3. Skills showcase (grid of skill badges or simple list)
4. Contact CTA section

### Projects Page
1. Page header with title and filter controls comment
2. Projects grid (responsive, 1-2-3 columns)
3. "More projects on GitHub" link section

### Recommendations Page
1. Introduction section explaining purpose
2. Career paths grid (2 columns)
3. Additional resources section with general CS learning links
4. Encouragement/closing message

---

## Images

**Image Usage:**
- No large hero images (typography-focused design)
- Project cards: Optional thumbnail placeholders with comment <!-- PROJECT_THUMBNAIL -->
- Career path cards: Icon placeholders with comment <!-- CUSTOM ICON: [path name] -->
- About page: Optional profile photo placeholder with comment <!-- PROFILE_PHOTO -->

All image placeholders should use subtle background treatments with centered text indicating placement.

---

## Accessibility & Interactions

- Focus states: visible outline ring with appropriate contrast
- Interactive elements: minimum 44x44px touch target
- Link styling: consistent underline decoration
- Button hierarchy: Primary (solid) and Secondary (outline) variants
- Form inputs: Clear labels, placeholder text, consistent padding (p-3)
- Semantic HTML throughout (nav, main, section, article)

---

## GitHub Integration

- Project cards link directly to GitHub repositories
- Include GitHub icon from icon library
- "Star count" and "Last updated" metadata placeholders with comments
- Fork/Clone quick actions in project detail view (future enhancement comment)