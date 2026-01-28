/**
 * Logo Component
 * 
 * Global Gate Produce logo matching the official brand.
 * Features the distinctive G with leaf design.
 */

import { Box, Text, Flex, Image } from '@chakra-ui/react'

// SVG Logo Icon - The "G" with leaf (matches official logo)
function LogoIcon({ size = 40, variant = 'light' }) {
  const colors = {
    light: { main: '#0d2818', leaf: '#4a9c2d' },
    dark: { main: '#ffffff', leaf: '#4a9c2d' },
    white: { main: '#ffffff', leaf: '#6abf4b' },
  }
  
  const { main, leaf } = colors[variant] || colors.light

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The "G" shape - thick C with horizontal bar */}
      <path
        d="M50 8C26.8 8 8 26.8 8 50s18.8 42 42 42c18.5 0 34.3-12 40-28.5H55v-15h37c.6 3.2 1 6.5 1 10 0 25.4-20.6 46-46 46S1 75.4 1 50 21.6 4 47 4c12.7 0 24.2 5.2 32.5 13.5L68 29C62 23 54 19.5 45 19.5 28.5 19.5 15 33 15 49.5S28.5 79.5 45 79.5c13 0 24-8.3 28-20H50V48h42"
        fill={main}
      />
      {/* Simplified G shape */}
      <path
        d="M50 10C28 10 10 28 10 50s18 40 40 40c17.5 0 32.5-11.3 38-27H55V52h30c-4 18-20 32-38 32-22 0-40-18-40-40s18-40 40-40c11 0 21 4.5 28.3 11.7l-8.5 8.5C61 19 56 16.5 50 16.5c-18.5 0-33.5 15-33.5 33.5S31.5 83.5 50 83.5c14.5 0 27-9.5 31.5-22.5H50V50h38"
        fill={main}
      />
      {/* Leaf */}
      <path
        d="M72 8c0 0 18 12 18 28 0 0-8 6-22-6C68 30 66 16 72 8z"
        fill={leaf}
      />
      <path
        d="M72 8c3 8 4 16 2 22"
        stroke={leaf}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

// Full "GLOBAL GATE" Logo - matches the official branding
function Logo({ 
  variant = 'dark', // 'dark' (white on dark bg) | 'light' (dark on light bg)
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  ...props 
}) {
  // Size configurations
  const sizes = {
    sm: { height: '32px', fontSize: 'lg' },
    md: { height: '40px', fontSize: 'xl' },
    lg: { height: '56px', fontSize: '2xl' },
    xl: { height: '80px', fontSize: '4xl' },
  }
  
  const currentSize = sizes[size]
  
  // Color based on variant
  const textColor = variant === 'dark' || variant === 'white' ? 'white' : 'brand.800'
  const leafColor = '#4a9c2d'

  return (
    <Flex 
      as="a" 
      href="/" 
      align="center" 
      gap={2}
      _hover={{ opacity: 0.9 }} 
      transition="opacity 0.2s"
      {...props}
    >
      {/* G Icon with Leaf */}
      <Box position="relative" h={currentSize.height} w={currentSize.height}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* The G - C shape with bar */}
          <path
            d="M45 95C20.7 95 1 75.3 1 51S20.7 7 45 7c12.2 0 23.3 5 31.3 13l-10 10c-5.5-5.5-13-9-21.3-9C27.3 21 13 35.3 13 53s14.3 32 32 32c14 0 26-9 30.5-22H50V51h45v4c0 22-18 40-40 40h-10z"
            fill={textColor === 'white' ? 'white' : '#0d2818'}
          />
          {/* Horizontal bar of G */}
          <path
            d="M50 51h38v12H50z"
            fill={textColor === 'white' ? 'white' : '#0d2818'}
          />
          {/* Leaf */}
          <path
            d="M78 2c0 0 20 14 20 32 0 0-10 8-26-6 0 0-2-16 6-26z"
            fill={leafColor}
          />
          <path
            d="M78 2c4 10 5 20 2 26"
            stroke={leafColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </Box>
      
      {/* Text: LOBAL stacked with GATE */}
      <Box lineHeight="0.85" ml={-1}>
        <Text
          fontSize={currentSize.fontSize}
          fontFamily="'Bebas Neue', 'Oswald', Impact, sans-serif"
          fontWeight="400"
          color={textColor}
          letterSpacing="0.02em"
          lineHeight="0.9"
        >
          LOBAL
        </Text>
        <Text
          fontSize={currentSize.fontSize}
          fontFamily="'Bebas Neue', 'Oswald', Impact, sans-serif"
          fontWeight="400"
          color={textColor}
          letterSpacing="0.08em"
          lineHeight="0.9"
        >
          GATE
        </Text>
      </Box>
    </Flex>
  )
}

// Horizontal logo: G + "GLOBAL GATE" on one line  
function LogoHorizontal({ 
  variant = 'dark',
  size = 'md',
  showTagline = false,
  ...props 
}) {
  const sizes = {
    sm: { height: '28px', fontSize: 'md', tagSize: 'xs' },
    md: { height: '36px', fontSize: 'lg', tagSize: 'xs' },
    lg: { height: '48px', fontSize: 'xl', tagSize: 'sm' },
  }
  
  const currentSize = sizes[size]
  const textColor = variant === 'dark' || variant === 'white' ? 'white' : 'brand.800'
  const leafColor = '#4a9c2d'
  const taglineColor = variant === 'dark' ? 'accent.produce' : 'accent.leaf'

  return (
    <Flex 
      as="a" 
      href="/" 
      align="center" 
      gap={2}
      _hover={{ opacity: 0.9 }} 
      transition="opacity 0.2s"
      {...props}
    >
      {/* G Icon with Leaf */}
      <Box h={currentSize.height} w={currentSize.height} flexShrink={0}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* The G */}
          <path
            d="M45 95C20.7 95 1 75.3 1 51S20.7 7 45 7c12.2 0 23.3 5 31.3 13l-10 10c-5.5-5.5-13-9-21.3-9C27.3 21 13 35.3 13 53s14.3 32 32 32c14 0 26-9 30.5-22H50V51h45v4c0 22-18 40-40 40h-10z"
            fill={textColor === 'white' ? 'white' : '#0d2818'}
          />
          <path
            d="M50 51h38v12H50z"
            fill={textColor === 'white' ? 'white' : '#0d2818'}
          />
          {/* Leaf */}
          <path
            d="M78 2c0 0 20 14 20 32 0 0-10 8-26-6 0 0-2-16 6-26z"
            fill={leafColor}
          />
          <path
            d="M78 2c4 10 5 20 2 26"
            stroke={leafColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </Box>
      
      {/* Text */}
      <Flex direction="column" justify="center" lineHeight="1">
        <Text
          fontSize={currentSize.fontSize}
          fontFamily="'Bebas Neue', 'Oswald', Impact, sans-serif"
          fontWeight="400"
          color={textColor}
          letterSpacing="0.05em"
          lineHeight="1"
          whiteSpace="nowrap"
        >
          GLOBAL GATE
          {showTagline && (
            <Text as="span" color={taglineColor} ml={2}>
              PRODUCE
            </Text>
          )}
        </Text>
      </Flex>
    </Flex>
  )
}

// Simple G icon only (for favicon, small spaces)
function LogoMark({ size = 32, variant = 'dark' }) {
  const fillColor = variant === 'dark' || variant === 'white' ? '#ffffff' : '#0d2818'
  const leafColor = '#4a9c2d'
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The G */}
      <path
        d="M45 95C20.7 95 1 75.3 1 51S20.7 7 45 7c12.2 0 23.3 5 31.3 13l-10 10c-5.5-5.5-13-9-21.3-9C27.3 21 13 35.3 13 53s14.3 32 32 32c14 0 26-9 30.5-22H50V51h45v4c0 22-18 40-40 40h-10z"
        fill={fillColor}
      />
      <path
        d="M50 51h38v12H50z"
        fill={fillColor}
      />
      {/* Leaf */}
      <path
        d="M78 2c0 0 20 14 20 32 0 0-10 8-26-6 0 0-2-16 6-26z"
        fill={leafColor}
      />
      <path
        d="M78 2c4 10 5 20 2 26"
        stroke={leafColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export { Logo, LogoHorizontal, LogoIcon, LogoMark }
export default Logo
