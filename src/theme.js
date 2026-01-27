/**
 * Global Gate Produce - Theme Configuration
 * 
 * Brand Colors (from official logo):
 * - Primary Dark Green: #0d2818 (deep forest green from logo background)
 * - Leaf Green: #4a7c59 (the leaf accent)
 * - Light Produce Green: #7cb342 (for "PRODUCE" text)
 * - White: #ffffff (logo text)
 * 
 * Typography: Bold, modern sans-serif matching the logo
 */

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  // Fonts - Bold modern sans-serif like the logo
  fonts: {
    heading: `'Bebas Neue', 'Oswald', 'Impact', sans-serif`,
    body: `'Work Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
    logo: `'Bebas Neue', 'Oswald', 'Impact', sans-serif`,
  },
  
  colors: {
    // Primary brand green - deep forest green from logo
    brand: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#2e7d32',
      700: '#1b4d3e',   // Slightly lighter for hover states
      800: '#0d2818',   // PRIMARY - Deep forest green from logo
      900: '#071810',   // Darker shade
    },
    
    // Accent colors for highlights
    accent: {
      leaf: '#4a7c59',       // The leaf green
      produce: '#7cb342',    // Light green for "PRODUCE"
      lime: '#8bc34a',       // Bright lime accent
      white: '#ffffff',      // Clean white
      cream: '#f5f5f0',      // Off-white for backgrounds
    },
    
    // Neutral tones for backgrounds and text
    neutral: {
      offwhite: '#fafaf8',   // Page background
      cream: '#f5f5f0',      // Section backgrounds
      stone: '#5a5a5a',      // Secondary text
      charcoal: '#1a1a1a',   // Primary text (near-black)
    }
  },
  
  // Global styles applied to body
  styles: {
    global: {
      body: {
        bg: 'neutral.offwhite',
        color: 'neutral.charcoal',
        lineHeight: '1.6',
      },
      // Import fonts
      '@import': [
        "url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Work+Sans:wght@400;500;600;700&display=swap')",
      ],
    },
  },
  
  // Component-specific styling
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: '2px',
        letterSpacing: '0.02em',
        transition: 'all 0.2s',
      },
      variants: {
        // Primary button - deep forest green background
        primary: {
          bg: 'brand.800',
          color: 'white',
          _hover: {
            bg: 'brand.700',
            transform: 'translateY(-1px)',
          },
          _active: {
            bg: 'brand.900',
          },
        },
        // Secondary button - outline style
        secondary: {
          bg: 'transparent',
          color: 'brand.800',
          border: '2px solid',
          borderColor: 'brand.800',
          _hover: {
            bg: 'brand.800',
            color: 'white',
          },
        },
        // Light variant for dark backgrounds
        light: {
          bg: 'white',
          color: 'brand.800',
          _hover: {
            bg: 'accent.cream',
            transform: 'translateY(-1px)',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    
    Heading: {
      baseStyle: {
        fontWeight: '400',
        color: 'neutral.charcoal',
        letterSpacing: '0.02em',
      },
    },
    
    Input: {
      defaultProps: {
        focusBorderColor: 'brand.800',
      },
    },
    
    Textarea: {
      defaultProps: {
        focusBorderColor: 'brand.800',
      },
    },
  },
})

export default theme
