/**
 * Global Gate Produce - Theme Configuration
 * 
 * Brand Colors (from Zavaya palette):
 * - Primary Dark Green: #166534
 * - Light Green/Mint: #4ade80 / #5eead4
 * - Orange: #f97316
 * - Yellow: #facc15
 * - Magenta/Pink: #db2777
 * 
 * TO ADJUST COLORS:
 * Edit the hex values below. The number scale (50-900) goes from 
 * lightest to darkest. brand.700 is used as the primary accent.
 */

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  // Fonts - Karla for body (warm, organic feel), Georgia for headings
  fonts: {
    heading: `'Georgia', 'Times New Roman', serif`,
    body: `'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
  
  colors: {
    // Primary brand green - the main color
    brand: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',   // Light mint green
      500: '#22c55e',
      600: '#16a34a',
      700: '#166534',   // PRIMARY - Dark avocado green
      800: '#14532d',
      900: '#052e16',
    },
    
    // Accent colors for highlights and variety
    accent: {
      orange: '#f97316',    // Orange from palette
      yellow: '#facc15',    // Yellow from palette  
      magenta: '#db2777',   // Pink/magenta from palette
      mint: '#4ade80',      // Light green
      teal: '#5eead4',      // Teal accent
    },
    
    // Neutral tones for backgrounds and text
    neutral: {
      offwhite: '#fafaf9',  // Page background
      cream: '#f5f5f4',     // Section backgrounds
      stone: '#78716c',     // Secondary text
      charcoal: '#1c1917',  // Primary text (near-black)
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
        fontWeight: '500',
        borderRadius: '2px',  // Sharp corners for minimal look
        transition: 'all 0.2s',
      },
      variants: {
        // Primary button - dark green background
        primary: {
          bg: 'brand.700',
          color: 'white',
          _hover: {
            bg: 'brand.800',
            transform: 'translateY(-1px)',
          },
          _active: {
            bg: 'brand.900',
          },
        },
        // Secondary button - outline style
        secondary: {
          bg: 'transparent',
          color: 'brand.700',
          border: '1px solid',
          borderColor: 'brand.700',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    
    Heading: {
      baseStyle: {
        fontWeight: '400',  // Light weight for elegant look
        color: 'neutral.charcoal',
        letterSpacing: '-0.02em',
      },
    },
    
    Input: {
      defaultProps: {
        focusBorderColor: 'brand.700',
      },
    },
    
    Textarea: {
      defaultProps: {
        focusBorderColor: 'brand.700',
      },
    },
  },
})

export default theme
