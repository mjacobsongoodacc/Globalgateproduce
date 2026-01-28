/**
 * Global Gate Produce - Theme Configuration
 * 
 * Brand Colors (from official logo):
 * - Primary Dark Green: #1a3a2a (forest green from logo background)
 * - Leaf Green: #5fa052 (the leaf accent)
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
    // Primary brand green - forest green from logo background
    brand: {
      50: '#e8f5ec',
      100: '#c8e6cf',
      200: '#a5d6b0',
      300: '#81c791',
      400: '#5fb872',
      500: '#3d9956',
      600: '#2d7a44',
      700: '#245c36',   // Hover state
      800: '#1a3a2a',   // PRIMARY - Forest green from logo
      900: '#0f2218',   // Darker shade
    },
    
    // Accent colors for highlights
    accent: {
      leaf: '#5fa052',       // The leaf green from logo
      produce: '#6ab04c',    // Light green accent
      lime: '#7ec850',       // Bright lime
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
        // Primary button - forest green background
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
