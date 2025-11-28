# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal website for Rex S. Zalavarria. The project is intentionally minimal - a single HTML file with no build system, dependencies, or frameworks.

## Architecture

- **Static HTML**: Single `index.html` file served directly
- **No build process**: Changes to `index.html` are immediately ready for deployment
- **No dependencies**: Pure HTML with no JavaScript frameworks or CSS preprocessors

## Development Workflow

Since this is a static HTML file, there are no build commands. To view changes:
- Open `index.html` directly in a browser, or
- Use a local web server (e.g., `python -m http.server` or VS Code Live Server extension)

## Project Structure

The repository follows a "fastest and primitive" philosophy - minimal complexity, maximum simplicity. All content and markup lives in the root `index.html` file, which includes a changelog section that should be updated when making changes.

## Making Changes

When updating the website:
1. Edit `index.html` directly
2. Update the changelog section with the date and description of changes
3. Increment the version number if appropriate
