# Global Gate Produce

A modern website for Global Gate Produce, a women-owned produce import company based in the Rio Grande Valley, Texas. Specializing in avocados, dragon fruit, and tropical produce from Mexico.

## About

Global Gate Produce works directly with certified growers in Michoacán, Jalisco, and Yucatán to deliver export-ready produce with full USDA compliance and documentation handled.

## Brand Identity

### Colors

The brand uses a deep forest green palette inspired by the official logo:

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Forest Green | `#0d2818` | Primary brand color, headers, backgrounds |
| Leaf Green | `#4a7c59` | Accent color, leaf design element |
| Produce Green | `#7cb342` | Secondary accent, "PRODUCE" text highlights |
| White | `#ffffff` | Text on dark backgrounds |
| Off-white | `#fafaf8` | Page backgrounds |
| Cream | `#f5f5f0` | Section backgrounds |

### Typography

- **Headings & Logo**: Bebas Neue - Bold, modern condensed sans-serif
- **Body Text**: Work Sans - Clean, readable sans-serif

### Logo

The logo features a distinctive "G" with an integrated leaf design, representing the company's connection to fresh produce and nature. The logo component (`Logo.jsx`) includes:
- `Logo` - Stacked vertical logo
- `LogoHorizontal` - Horizontal logo with optional "PRODUCE" tagline
- `LogoIcon` - Standalone G with leaf icon

## Tech Stack

- React 18
- Vite
- Chakra UI
- Custom scroll-reveal animations
- Google Fonts (Bebas Neue, Work Sans)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/        # Reusable UI components
    Capabilities.jsx # How it works section with farm photos
    ContactForm.jsx  # Contact form with team info
    Footer.jsx       # Footer with logo and links
    Header.jsx       # Fixed navigation header
    Hero.jsx         # Main landing section
    Logo.jsx         # SVG logo components
    ProductFocus.jsx # Product cards with specs
    Quality.jsx      # Certifications section
  hooks/             # Custom React hooks
    useReveal.js     # Scroll-reveal animation hook
  pages/             # Page components
    Home.jsx
  assets/            # Images and static assets
    images/          # Product and team photos
  theme.js           # Chakra UI theme configuration
  index.css          # Global styles and animations
```

## Features

- **Brand-consistent design** matching the official Global Gate logo
- **Dark green header** with white navigation and logo
- **Bold typography** using Bebas Neue for impact
- **Responsive design** for all screen sizes
- **Smooth scroll-reveal animations** with staggered timing
- **Accessible** (respects prefers-reduced-motion)
- **Contact form** ready for backend integration (Formspree, etc.)
- **Decorative leaf patterns** as subtle background textures
- **Custom scrollbar** styled to match brand colors

## Deployment

The site is deployed via Netlify, connected to the GitHub repository for automatic deployments on push to `main`.

- **Repository**: github.com/mjacobsongoodacc/Globalgateproduce
- **Live Site**: Deployed on Netlify

## Customization

### Theme Colors

Edit `src/theme.js` to adjust brand colors:

```javascript
colors: {
  brand: {
    800: '#0d2818',  // Primary deep green
    // ... other shades
  },
  accent: {
    leaf: '#4a7c59',
    produce: '#7cb342',
  }
}
```

### Contact Form

The contact form in `ContactForm.jsx` logs submissions to console by default. To enable real submissions:

1. Sign up for Formspree (or similar service)
2. Replace the `handleSubmit` function with your form endpoint
3. See comments in the file for examples

## Contact

- **Website**: globalgateproduce.com
- **Email**: sales@globalgateproduce.com
- **Phone**: +1 956 651 1021
- **Location**: Rio Grande Valley, Texas

## License

MIT License
