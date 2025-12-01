# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal website for Rex S. Zalavarria. The project is built with Astro and uses Tailwind CSS v4 for styling, while maintaining adherence to web accessibility standards and best practices.

## Architecture

- **Astro Framework**: Modern static site generator with component-based architecture
- **Tailwind CSS v4**: Latest version using @tailwindcss/postcss for styling
- **Vite**: Build tool used by Astro for fast development and optimized production builds
- **PostCSS**: Processes Tailwind CSS through Vite configuration
- **Dependencies**: Astro, Tailwind CSS v4, PostCSS, and Autoprefixer (dev dependencies)

## File Structure

```
rexzalavarria/
├── src/
│   ├── pages/
│   │   └── index.astro      # Main page with HTML, CSS, and JS
│   └── input.css            # Tailwind CSS source file
├── public/                  # Static assets (images, fonts, etc.)
├── dist/                    # Build output (generated, do not edit)
├── astro.config.mjs         # Astro configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration for Tailwind v4
├── package.json             # npm dependencies and scripts
├── .gitignore               # Git ignore rules
├── .astro/                  # Astro cache (generated, do not edit)
└── CLAUDE.md                # This file
```

## Accessibility Features

This website implements WCAG accessibility standards:

- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<section>`, `<article>`, `<time>` elements
- **ARIA Labels**: `aria-label` and `aria-labelledby` for screen reader support
- **Keyboard Navigation**: Skip-to-main-content link and visible focus indicators
- **Responsive Design**: Mobile-first approach with proper viewport settings
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **Color Contrast**: Meets WCAG standards for text readability

## Best Practices Applied

### HTML
- Semantic HTML5 structure for better SEO and accessibility
- Meta tags for SEO (description, author, theme-color)
- Open Graph and Twitter Card meta tags for social sharing
- Proper heading hierarchy (h1 → h2)

### CSS (Tailwind)
- Tailwind utility classes for all styling
- Mobile-responsive with Tailwind's responsive modifiers (sm:, md:, lg:, etc.)
- Accessible focus indicators using Tailwind's focus: variants
- Consistent design system through Tailwind's default configuration

### JavaScript
- Inline scripts within Astro components using `<script>` tags
- Client-side interactivity runs in the browser
- Smooth scrolling for skip navigation
- Scroll-to-top button (appears when scrolling down)
- localStorage for tracking last visit
- Console logging for debugging
- Respects reduced motion preferences

### Images
- Store all images in the `public/` folder (Astro serves these as static assets)
- Reference images from root path (e.g., `/image.jpg` for `public/image.jpg`)
- Always provide descriptive `alt` attributes for accessibility
- Use appropriate image formats (WebP with fallbacks, or JPEG/PNG)
- Optimize images for web (compress before uploading)
- Consider using Astro's `<Image>` component for automatic optimization (future enhancement)

## Development Workflow

### Initial Setup
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`

### Development Commands
- `npm run dev`: Start Astro dev server with hot module reloading (http://localhost:4321)
- `npm run build`: Build the site for production (outputs to `dist/`)
- `npm run preview`: Preview the production build locally
- `npm run astro`: Run Astro CLI commands

### Development Server
- Astro's dev server includes:
  - Hot module reloading (changes appear instantly)
  - Automatic Tailwind CSS compilation via Vite
  - Error overlay for debugging
  - Fast refresh for instant updates

## Making Changes

When updating the website:

1. **Content/HTML changes**: Edit `src/pages/index.astro`
   - HTML goes in the component body
   - Use Astro's component syntax (e.g., `{version}` for variables)
2. **Style changes**:
   - Use Tailwind utility classes directly in Astro components
   - For custom styles, edit `src/input.css` (rare cases only)
   - Changes are automatically processed by Vite in dev mode
3. **JavaScript changes**:
   - Add `<script>` tags in Astro components
   - Scripts are automatically bundled and optimized
4. **Tailwind config changes**: Edit `tailwind.config.js` to customize Tailwind
5. **Astro config changes**: Edit `astro.config.mjs` for Astro settings
6. **Version updates**: Increment version number in frontmatter of `src/pages/index.astro`
7. **Changelog**: Always update the changelog section with:
   - Current date (use `<time datetime="YYYY-MM-DD">` format)
   - List of changes as `<li>` items
   - Consolidate all changes under the same date

## Accessibility Testing

When making changes, verify:
- Tab navigation works correctly
- Skip link appears on Tab focus
- All interactive elements have visible focus states
- Color contrast meets WCAG AA standards
- Screen readers can navigate the content properly
- Mobile responsive design works on various screen sizes
