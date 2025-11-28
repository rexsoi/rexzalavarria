# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal website for Rex S. Zalavarria. The project uses Tailwind CSS for styling and maintains adherence to web accessibility standards and best practices.

## Architecture

- **Static HTML**: `index.html` with semantic HTML5 elements
- **Tailwind CSS**: Utility-first CSS framework for styling
- **External JavaScript**: `script.js` for interactive features
- **Build process**: Tailwind CLI compiles `src/input.css` to `styles.css`
- **Dependencies**: Tailwind CSS, PostCSS, and Autoprefixer (dev dependencies)

## File Structure

```
rexzalavarria/
├── index.html           # Main HTML with Tailwind utility classes
├── src/
│   └── input.css        # Tailwind CSS source file
├── styles.css           # Compiled CSS output (generated, do not edit)
├── script.js            # JavaScript functionality
├── images/              # Image assets folder
├── tailwind.config.js   # Tailwind configuration
├── package.json         # npm dependencies and scripts
├── .gitignore           # Git ignore rules
└── CLAUDE.md            # This file
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
- Smooth scrolling for skip navigation
- Scroll-to-top button (appears when scrolling down)
- localStorage for tracking last visit
- Console logging for debugging
- Respects reduced motion preferences

### Images
- Store all images in the `images/` folder
- Always provide descriptive `alt` attributes for accessibility
- Use appropriate image formats (WebP with fallbacks, or JPEG/PNG)
- Optimize images for web (compress before uploading)
- Use responsive image techniques when appropriate (`srcset`, `sizes`)

## Development Workflow

### Initial Setup
1. Install dependencies: `npm install`
2. Build CSS: `npm run build` (or `npm run watch` for auto-rebuild during development)

### Viewing Changes
- Open `index.html` directly in a browser, or
- Use a local web server: `python -m http.server` or VS Code Live Server extension
- **Important**: Always run `npm run build` after making changes to Tailwind classes

### Build Commands
- `npm run build`: Build CSS once for production
- `npm run watch`: Watch for changes and rebuild automatically (useful during development)

## Making Changes

When updating the website:

1. **HTML changes**: Edit `index.html` with Tailwind utility classes
2. **Style changes**:
   - Use Tailwind utility classes directly in HTML
   - For custom styles, edit `src/input.css` (rare cases only)
   - Always run `npm run build` after changes
3. **JavaScript changes**: Edit `script.js`
4. **Tailwind config changes**: Edit `tailwind.config.js` if you need to customize Tailwind
5. **Version updates**: Increment version number in `index.html`
6. **Changelog**: Always update the changelog section with:
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
