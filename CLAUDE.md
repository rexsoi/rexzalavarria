# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal website for Rex S. Zalavarria. The project follows a "fastest and primitive" philosophy with minimal complexity, maximum simplicity, and adherence to web accessibility standards and best practices.

## Architecture

- **Static HTML**: `index.html` with semantic HTML5 elements
- **External CSS**: `styles.css` for all styling (separated for better maintainability)
- **External JavaScript**: `script.js` for interactive features
- **No build process**: Changes are immediately ready for deployment
- **No dependencies**: Pure HTML/CSS/JS with no frameworks or preprocessors

## File Structure

```
rexzalavarria/
├── index.html      # Main HTML with semantic structure
├── styles.css      # All CSS styling
├── script.js       # JavaScript functionality
├── images/         # Image assets folder
└── CLAUDE.md       # This file
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

### CSS
- CSS reset for consistent cross-browser rendering
- System font stack for performance
- Mobile-responsive with media queries
- Accessible focus indicators (2px solid outline)

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

To view changes:
- Open `index.html` directly in a browser, or
- Use a local web server: `python -m http.server` or VS Code Live Server extension

## Making Changes

When updating the website:

1. **HTML changes**: Edit `index.html`
2. **Style changes**: Edit `styles.css`
3. **JavaScript changes**: Edit `script.js`
4. **Version updates**: Increment version number in `index.html`
5. **Changelog**: Always update the changelog section with:
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
