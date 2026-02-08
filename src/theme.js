/**
 * Global Gate Produce - Theme Configuration
 * 
 * Zavaya Brand Colors (from brand board):
 * - Primary Magenta: #942C6D (deep magenta)
 * - Secondary Pink: #D54C8C (hot pink)
 * - Teal: #47C9C9 (cyan/turquoise)
 * - Green: #3CC9B4 (mint/aqua green)
 * - Orange: #F58220 (bright orange)
 * - Yellow: #F8DF00 (bright yellow)
 * - Forest: #1B5E3B (dark forest green)
 * 
 * Typography: Bold, modern sans-serif
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
    // Zavaya brand colors - semantic tokens
    brand: {
      // Primary magenta (deep)
      primary: '#9E3D6E',
      primaryLight: '#AE4D7E',
      primaryDark: '#8E2D5E',
      
      // Secondary hot pink
      secondary: '#D54C8C',
      secondaryLight: '#E066A0',
      secondaryDark: '#B8407A',
      
      // Teal/cyan accent
      teal: '#47C9C9',
      tealLight: '#5FD4D4',
      tealDark: '#3AB3B3',
      
      // Mint green accent
      green: '#3CC9B4',
      greenLight: '#52D4C0',
      greenDark: '#32B09D',
      
      // Orange accent
      orange: '#F58220',
      orangeLight: '#F7953D',
      orangeDark: '#D97018',
      
      // Yellow accent
      yellow: '#F8DF00',
      yellowLight: '#FAE633',
      yellowDark: '#DBC800',
      
      // Forest green (primary site color)
      forest: '#1B5E3B',
      forestLight: '#237A4C',
      forestDark: '#12392A',
      
      // Ink (text) and Paper (backgrounds)
      ink: '#1A1A1A',
      paper: '#FFFFFF',
      
      // Legacy scale for backwards compatibility
      50: '#fce8f2',
      100: '#f5c4db',
      200: '#ed9dc2',
      300: '#e574a8',
      400: '#dd4c8f',
      500: '#d42575',
      600: '#942C6D',
      700: '#7A2459',
      800: '#5f1c45',
      900: '#451331',
    },
    
    // Zavaya accent palette for alternating accents
    zavaya: {
      magenta: '#942C6D',
      pink: '#D54C8C',
      teal: '#47C9C9',
      green: '#3CC9B4',
      orange: '#F58220',
      yellow: '#F8DF00',
      forest: '#1B5E3B',
    },
    
    // Neutral gray scale
    neutral: {
      offwhite: '#FAFAF8',
      cream: '#F5F5F0',
      border: '#E2E2E0',
      muted: '#9A9A98',
      stone: '#5A5A5A',
      charcoal: '#1A1A1A',
    },
    
    // Accent colors (for backwards compatibility)
    accent: {
      leaf: '#3CC9B4',      // Updated to Zavaya green
      produce: '#D54C8C',   // Updated to Zavaya pink
      lime: '#47C9C9',      // Updated to Zavaya teal
      white: '#FFFFFF',
      cream: '#F5F5F0',
    },
  },
  
  // Global styles applied to body
  styles: {
    global: {
      body: {
        bg: 'neutral.offwhite',
        color: 'neutral.charcoal',
        lineHeight: '1.6',
      },
      // Focus ring using Zavaya teal
      '*:focus-visible': {
        outline: '2px solid',
        outlineColor: 'brand.teal',
        outlineOffset: '2px',
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
        // Primary button - Zavaya magenta
        primary: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.primaryLight',
            transform: 'translateY(-1px)',
          },
          _active: {
            bg: 'brand.primaryDark',
          },
          _focusVisible: {
            boxShadow: '0 0 0 3px var(--chakra-colors-brand-teal)',
          },
        },
        // Secondary button - outline with Zavaya primary
        secondary: {
          bg: 'transparent',
          color: 'brand.primary',
          border: '2px solid',
          borderColor: 'brand.primary',
          _hover: {
            bg: 'brand.primary',
            color: 'white',
          },
          _active: {
            bg: 'brand.primaryDark',
            borderColor: 'brand.primaryDark',
          },
          _focusVisible: {
            boxShadow: '0 0 0 3px var(--chakra-colors-brand-teal)',
          },
        },
        // Light variant for dark backgrounds
        light: {
          bg: 'white',
          color: 'brand.primary',
          _hover: {
            bg: 'neutral.cream',
            transform: 'translateY(-1px)',
          },
          _focusVisible: {
            boxShadow: '0 0 0 3px var(--chakra-colors-brand-teal)',
          },
        },
        // Ghost variant with Zavaya hover
        ghost: {
          _hover: {
            bg: 'transparent',
            color: 'brand.secondary',
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
    
    Link: {
      baseStyle: {
        _hover: {
          color: 'brand.primary',
        },
        _focusVisible: {
          boxShadow: '0 0 0 3px var(--chakra-colors-brand-teal)',
        },
      },
    },
    
    Input: {
      defaultProps: {
        focusBorderColor: 'brand.teal',
      },
      variants: {
        outline: {
          field: {
            _focusVisible: {
              borderColor: 'brand.teal',
              boxShadow: '0 0 0 1px var(--chakra-colors-brand-teal)',
            },
          },
        },
      },
    },
    
    Textarea: {
      defaultProps: {
        focusBorderColor: 'brand.teal',
      },
      variants: {
        outline: {
          _focusVisible: {
            borderColor: 'brand.teal',
            boxShadow: '0 0 0 1px var(--chakra-colors-brand-teal)',
          },
        },
      },
    },
  },
})

export default theme
