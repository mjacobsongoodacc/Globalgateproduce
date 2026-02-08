/**
 * Logo Component
 * 
 * Global Gate Produce logo using Globalgatelogo2.jpg.
 * Uses mix-blend-mode to make the logo background transparent
 * when placed on a dark green header/footer.
 */

import { Box, Image } from '@chakra-ui/react'

// Import logo (white text on green background)
import logoFull from '../assets/images/Globalgatelogo2.jpg'
import logoMini from '../assets/images/Globalgatelogomini.png'

// Full "GLOBAL GATE" Logo - uses lighten blend mode for transparency effect
function Logo({ 
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  ...props 
}) {
  const sizes = {
    sm: '40px',
    md: '52px',
    lg: '64px',
    xl: '88px',
  }

  return (
    <Box 
      display="block"
      {...props}
    >
      <Image
        src={logoFull}
        alt="Global Gate Produce"
        h={sizes[size]}
        w="auto"
        objectFit="contain"
        mixBlendMode="lighten"
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
    sm: '32px',
    md: '40px',
    lg: '52px',
    xl: '64px',
  }

  return (
    <Box 
      display="block"
      {...props}
    >
      <Image
        src={logoMini}
        alt="Global Gate"
        h={sizes[size]}
        w="auto"
        objectFit="contain"
        mixBlendMode="lighten"
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
      mixBlendMode="lighten"
      {...props}
    />
  )
}

export { Logo, LogoHorizontal, LogoIcon, LogoMark }
export default Logo
