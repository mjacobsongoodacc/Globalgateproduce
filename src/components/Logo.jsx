/**
 * Logo Component
 * 
 * Global Gate Produce logo using the official brand images.
 */

import { Box, Image } from '@chakra-ui/react'

// Import logo images
import logoFull from '../assets/images/Globalgatelogo.png'
import logoMini from '../assets/images/Globalgatelogomini.png'

// Full "GLOBAL GATE" Logo
function Logo({ 
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  ...props 
}) {
  const sizes = {
    sm: '36px',
    md: '48px',
    lg: '64px',
    xl: '96px',
  }

  return (
    <Box 
      as="a" 
      href="/" 
      display="block"
      _hover={{ opacity: 0.9 }} 
      transition="opacity 0.2s"
      {...props}
    >
      <Image
        src={logoFull}
        alt="Global Gate Produce"
        h={sizes[size]}
        w="auto"
        objectFit="contain"
      />
    </Box>
  )
}

// Horizontal logo (same as Logo, alias for compatibility)
function LogoHorizontal({ 
  size = 'md',
  ...props 
}) {
  return <Logo size={size} {...props} />
}

// Mini logo - just the G with leaf
function LogoMark({ 
  size = 'md',
  ...props 
}) {
  const sizes = {
    sm: '28px',
    md: '36px',
    lg: '48px',
    xl: '64px',
  }

  return (
    <Box 
      as="a" 
      href="/" 
      display="block"
      _hover={{ opacity: 0.9 }} 
      transition="opacity 0.2s"
      {...props}
    >
      <Image
        src={logoMini}
        alt="Global Gate"
        h={sizes[size]}
        w="auto"
        objectFit="contain"
      />
    </Box>
  )
}

// Icon only (alias for LogoMark)
function LogoIcon({ size = 36, ...props }) {
  return (
    <Image
      src={logoMini}
      alt="Global Gate"
      h={`${size}px`}
      w="auto"
      objectFit="contain"
      {...props}
    />
  )
}

export { Logo, LogoHorizontal, LogoIcon, LogoMark }
export default Logo
