# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a WordPress Gutenberg block plugin that provides a responsive carousel/slider block. It uses the Slick Carousel library on the frontend and WordPress block editor components for the admin interface.

## Development Commands

### Building and Development
- `npm run start` - Start development mode with hot reload
- `npm run build` - Build production assets (outputs to `build/`)
- `npm run format` - Format code using WordPress standards
- `npm run lint:js` - Lint JavaScript files
- `npm run lint:css` - Lint CSS/SCSS files

### Installation
- `npm install` - Install JavaScript dependencies
- `composer install` - Install PHP dependencies (if needed)

## Architecture

### Block Structure

The plugin implements a parent-child block relationship:

**Carousel Block (`cb/carousel`)**: Parent container block
- Location: `src/carousel/`
- Manages carousel settings (slides to show, speed, arrows, dots, etc.)
- Uses InnerBlocks to contain slide blocks
- Only allows `cb/slide` as child blocks (enforced via `ALLOWED_BLOCKS`)
- Server-side rendered with callback in `plugin.php`

**Slide Block (`cb/slide`)**: Child content block
- Location: `src/slide/`
- Can contain any WordPress blocks using InnerBlocks
- Each slide can have an optional HTML ID attribute

### Frontend Implementation

The carousel uses Slick Carousel library for frontend functionality:
- Library files: `vendor/slick/` (slick.min.js, slick.min.css)
- Initialization: `vendor/slick/init.js` reads data attributes from the saved block HTML
- Assets are enqueued only on the frontend in `plugin.php:render_carousel()`

### Data Flow

1. **Editor**: Block attributes are managed via React state and stored in block metadata
2. **Save**: Attributes are serialized as `data-*` attributes on the wrapper div
3. **Frontend**: JavaScript reads `data-slick` JSON and other `data-*` attributes to initialize Slick

Key data attributes used:
- `data-slick`: JSON-stringified Slick configuration
- `data-dots-bottom`: Dots bottom spacing value
- `data-arrow-color/background/hover-*`: Arrow styling values

### Color System

The carousel uses WordPress color system integration:
- `withColors` HOC for color picker integration
- `__experimentalColorGradientSettingsDropdown` for color UI (EXPERIMENTAL API)
- Colors stored as both theme slugs and hex values
- `getColorValue()` in save.js converts theme colors to CSS variables

### Experimental WordPress APIs

This codebase uses experimental WordPress features that may change:
- `__experimentalColorGradientSettingsDropdown`
- `__experimentalUseMultipleOriginColorsAndGradients`

When these APIs change in WordPress core, updates will be needed in `src/carousel/edit.js`.

## File Organization

```
src/
├── carousel/           # Parent carousel block
│   ├── block.json     # Block metadata and attributes
│   ├── edit.js        # Editor component
│   ├── save.js        # Save/frontend markup
│   ├── index.js       # Block registration
│   ├── editor.scss    # Editor-only styles
│   └── style.scss     # Frontend & editor styles
└── slide/             # Child slide block
    ├── index.js       # Combined registration and edit
    └── save.js        # Save component

build/                 # Compiled output (git-tracked)
vendor/slick/          # Slick Carousel library
plugin.php             # Main plugin file, block registration
```

## Important Patterns

### Block Attributes

All carousel settings are stored as block attributes in `src/carousel/block.json`. When adding new settings:
1. Add attribute definition to block.json
2. Add control to edit.js InspectorControls
3. Use attribute in save.js (usually as data attribute)
4. Update `vendor/slick/init.js` if frontend behavior changes

### Inline Styling

The plugin uses inline CSS (via data attributes and JavaScript initialization) rather than generating separate stylesheets. This approach was chosen to avoid conflicts with theme styles and provide maximum flexibility.

### Slide Count Detection

The editor uses `useSelect` to count inner blocks dynamically, which affects scrollbar visibility and layout in the editor (see `slideCount` in edit.js).

## Plugin Metadata

- WordPress text domain: `img-cb`
- Block namespace: `cb/`
- Plugin version is in `plugin.php` (update VERSION constant)
- Requires WordPress 6.1+, PHP 8.0+

## Version Updates

When bumping version:
1. Update `Carousel_Slider_Block::VERSION` in plugin.php
2. Update version in plugin.php header comment
3. Build assets with `npm run build`
4. Commit the built files (build/ is tracked in git)
