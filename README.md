# Global Gate Produce

A modern, bilingual website for Global Gate Produce, a women-owned produce import company based in the Rio Grande Valley, Texas. Specializing in avocados, dragon fruit, tropical produce, frozen fruits, and fruit pulp from Mexico — featuring the **Zavaya** product brand.

## About

Global Gate Produce works directly with certified growers in Michoacan, Jalisco, and Yucatan to deliver export-ready produce with full USDA compliance and documentation handled. The site showcases both the **Global Gate Produce** company identity and the **Zavaya** product brand.

## Live Site

Deployed on Netlify with automatic deployments on push to `main`.

- **Repository**: [github.com/mjacobsongoodacc/Globalgateproduce](https://github.com/mjacobsongoodacc/Globalgateproduce)

## Tech Stack

- **React** 19
- **Vite** 7
- **Chakra UI** 2.8
- **React Router DOM** 7 — client-side routing
- **Framer Motion** 12 — animations and transitions
- **Google Fonts** — Bebas Neue, Work Sans
- Custom scroll-reveal animations
- Bilingual support (English / Spanish) via React Context

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, Export Scale (Zavaya), Capabilities, Product Focus, Quality, Contact |
| `/products` | Products | Full product catalog — fresh produce, frozen fruits, fruit pulp |
| `/products/:slug` | Product Detail | Individual product page with specs and imagery |
| `/certifications` | Certifications | USDA, GlobalGAP, SENASICA, HACCP, Organic, FSMA |

## Brand Identity

### Zavaya Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Magenta | `#942C6D` | Primary brand accent |
| Hot Pink | `#D54C8C` | Secondary accent |
| Teal | `#47C9C9` | Focus rings, highlights |
| Mint Green | `#3CC9B4` | Accent elements |
| Orange | `#F58220` | Warm accent |
| Yellow | `#F8DF00` | Warm accent |
| Forest Green | `#1B5E3B` | Site backgrounds, headers |

### Typography

- **Headings & Logo**: Bebas Neue — bold, modern condensed sans-serif
- **Body Text**: Work Sans — clean, readable sans-serif

### Logos

- `Logo.jsx` — Global Gate Produce logo (stacked, horizontal, icon variants)
- `ZavayaLogo.jsx` — Zavaya product brand logo

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
  assets/
    images/            # Product photos, packaging, team, logos
  components/
    Capabilities.jsx   # How it works — sourcing, packing, shipping
    ContactForm.jsx    # Contact form with team info
    ExportScale.jsx    # Zavaya brand showcase section
    Footer.jsx         # Footer with tagline and links
    Header.jsx         # Fixed navigation with language toggle (EN/ES)
    Hero.jsx           # Main landing hero section
    Logo.jsx           # Global Gate SVG logo components
    ProductFocus.jsx   # Featured product cards with specs
    Quality.jsx        # Quality assurance and certifications
    ZavayaLogo.jsx     # Zavaya brand SVG logo
  context/
    LanguageContext.jsx # Bilingual support (EN/ES) with localStorage
  hooks/
    useReveal.js       # Scroll-reveal animation hook
  pages/
    Home.jsx           # Landing page
    Products.jsx       # Product catalog
    ProductDetail.jsx  # Individual product page
    Certifications.jsx # Certifications showcase
  App.jsx              # Routes and scroll-to-top
  main.jsx             # Entry point with providers
  theme.js             # Chakra UI theme (Zavaya palette)
  index.css            # Global styles and animations
```

## Features

- **Bilingual** — English/Spanish toggle with localStorage persistence
- **Zavaya branding** — full Zavaya color palette and logo integration
- **Multi-page routing** — Home, Products, Product Detail, Certifications
- **Product catalog** — fresh produce, frozen fruits, fruit pulp categories
- **Responsive design** — optimized for all screen sizes
- **Smooth animations** — Framer Motion transitions and scroll-reveal effects
- **Accessible** — respects `prefers-reduced-motion`, keyboard-navigable
- **Contact form** — ready for backend integration (Formspree, etc.)
- **Forest green header** — fixed navigation with white text and logo
- **Bold typography** — Bebas Neue for headings, Work Sans for body
- **Custom scrollbar** — styled to match brand colors

## Deployment

The site is deployed via **Netlify**, connected to the GitHub repository for automatic deployments on push to `main`.

## Customization

### Theme Colors

Edit `src/theme.js` to adjust brand colors:

```javascript
colors: {
  brand: {
    primary: '#9E3D6E',   // Zavaya magenta
    teal: '#47C9C9',      // Teal accent
    forest: '#1B5E3B',    // Forest green
    // ... see theme.js for full palette
  },
  zavaya: {
    magenta: '#942C6D',
    pink: '#D54C8C',
    teal: '#47C9C9',
    green: '#3CC9B4',
    orange: '#F58220',
    yellow: '#F8DF00',
    forest: '#1B5E3B',
  }
}
```

### Contact Form

The contact form in `ContactForm.jsx` logs submissions to console by default. To enable real submissions:

1. Sign up for [Formspree](https://formspree.io/) (or similar service)
2. Replace the `handleSubmit` function with your form endpoint

## Contact

- **Website**: globalgateproduce.com
- **Email**: sales@globalgateproduce.com
- **Phone**: +1 956 651 1021
- **Location**: Rio Grande Valley, Texas

## License

MIT License
