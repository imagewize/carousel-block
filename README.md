# Carousel Slider Block for WordPress

A responsive and customizable carousel slider block for the WordPress Gutenberg editor. Add any blocks to slides and customize the carousel behavior to your needs.

## Features

- Add unlimited slides
- Support for any WordPress blocks within slides
- Live preview in the editor
- Responsive and touch-enabled
- RTL support
- Flexible layout options

## Settings

### General
- Slides to show (1-10)
- Slides to scroll at a time (1-10)
- Animation speed (100-3000ms)
- Navigation arrows
- Dot indicators
- Infinite loop
- Autoplay with customizable speed
- RTL support

### Responsive
- Breakpoint width (320-1200px)
- Mobile slides to show (1-5)
- Mobile slides to scroll (1-5)

## Installation

1. Download or clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to build the block
4. Activate the plugin in WordPress

## Development

```bash
# Start development mode
npm run start

# Build production version
npm run build

# Format code
npm run format

# Lint JavaScript
npm run lint:js

# Lint CSS/SCSS
npm run lint:css
```

## Requirements

- WordPress 6.1+
- PHP 7.0+
- Node.js for development

## Usage

1. Add the "Carousel Slider" block from the Design category
2. Click the + button to add slides
3. Add any blocks within the slides
4. Customize settings in the block sidebar
5. Preview your carousel in the editor

## Block Structure

```
Carousel Block (Parent)
└── Slide Block (Child)
    └── Any WordPress Blocks
```

## Support

- WordPress 6.1 and above
- Modern browsers
- Touch devices

---

*Note: This plugin is based on the original work from the [Carousel Block Plugin](https://wordpress.org/plugins/carousel-block/) by Virgiliu Diaconu, enhanced with additional features and improvements.*
