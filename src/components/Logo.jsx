/**
 * Logo Component
 * 
 * Global Gate Produce logo with the distinctive G and leaf design.
 * Matches the official brand styling.
 */

import { Box, Text, Flex } from '@chakra-ui/react'

// SVG Logo Icon - The "G" with leaf
function LogoIcon({ size = 40, color = 'currentColor', leafColor = '#4a7c59' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The "G" shape */}
      <path
        d="M50 5C25.1 5 5 25.1 5 50C5 74.9 25.1 95 50 95C74.9 95 95 74.9 95 50C95 37.5 90 26.2 82 18L82 18C82 18 72 28 72 50C72 50 72 55 67 55L50 55L50 45L62 45C62 45 62 35 50 35C38 35 30 43 30 55C30 67 38 75 50 75C58 75 64.5 71 68 65"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* The leaf */}
      <path
        d="M75 8C75 8 85 18 85 30C85 30 75 35 65 25C65 25 70 15 75 8Z"
        fill={leafColor}
      />
      {/* Leaf stem */}
      <path
        d="M75 8C75 8 72 20 68 28"
        stroke={leafColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Full Logo with text
function Logo({ 
  variant = 'dark', // 'dark' | 'light' | 'white'
  size = 'md', // 'sm' | 'md' | 'lg'
  showIcon = true,
  ...props 
}) {
  // Size configurations
  const sizes = {
    sm: { icon: 28, text: 'lg', spacing: 2 },
    md: { icon: 36, text: 'xl', spacing: 2 },
    lg: { icon: 48, text: '2xl', spacing: 3 },
  }
  
  const currentSize = sizes[size]
  
  // Color configurations
  const colors = {
    dark: {
      primary: 'white',
      secondary: 'accent.produce',
      icon: 'white',
      leaf: '#4a7c59',
    },
    light: {
      primary: 'brand.800',
      secondary: 'accent.produce',
      icon: 'brand.800',
      leaf: '#4a7c59',
    },
    white: {
      primary: 'white',
      secondary: 'white',
      icon: 'white',
      leaf: '#7cb342',
    },
  }
  
  const currentColors = colors[variant]

  return (
    <Flex 
      as="a" 
      href="/" 
      align="center" 
      gap={currentSize.spacing}
      _hover={{ opacity: 0.9 }} 
      transition="opacity 0.2s"
      {...props}
    >
      {showIcon && (
        <Box color={currentColors.icon}>
          <LogoIcon 
            size={currentSize.icon} 
            color="currentColor"
            leafColor={currentColors.leaf}
          />
        </Box>
      )}
      <Box lineHeight="0.9">
        <Text
          fontSize={currentSize.text}
          fontFamily="'Bebas Neue', 'Oswald', sans-serif"
          fontWeight="400"
          color={currentColors.primary}
          letterSpacing="0.05em"
          lineHeight="1"
        >
          GLOBAL
        </Text>
        <Text
          fontSize={currentSize.text}
          fontFamily="'Bebas Neue', 'Oswald', sans-serif"
          fontWeight="400"
          color={currentColors.primary}
          letterSpacing="0.05em"
          lineHeight="1"
        >
          GATE
        </Text>
      </Box>
    </Flex>
  )
}

// Horizontal logo variant
function LogoHorizontal({ 
  variant = 'dark',
  size = 'md',
  showTagline = false,
  ...props 
}) {
  const sizes = {
    sm: { icon: 32, global: 'xl', gate: 'xl', produce: 'sm' },
    md: { icon: 40, global: '2xl', gate: '2xl', produce: 'sm' },
    lg: { icon: 56, global: '3xl', gate: '3xl', produce: 'md' },
  }
  
  const currentSize = sizes[size]
  
  const colors = {
    dark: {
      primary: 'white',
      produce: 'accent.produce',
      leaf: '#4a7c59',
    },
    light: {
      primary: 'brand.800',
      produce: 'accent.leaf',
      leaf: '#4a7c59',
    },
    white: {
      primary: 'white',
      produce: 'rgba(255,255,255,0.7)',
      leaf: '#7cb342',
    },
  }
  
  const currentColors = colors[variant]

  return (
    <Flex 
      as="a" 
      href="/" 
      align="center" 
      gap={3}
      _hover={{ opacity: 0.9 }} 
      transition="opacity 0.2s"
      {...props}
    >
      <Box color={currentColors.primary}>
        <LogoIcon 
          size={currentSize.icon} 
          color="currentColor"
          leafColor={currentColors.leaf}
        />
      </Box>
      <Box>
        <Text
          fontSize={currentSize.global}
          fontFamily="'Bebas Neue', 'Oswald', sans-serif"
          fontWeight="400"
          color={currentColors.primary}
          letterSpacing="0.08em"
          lineHeight="1"
        >
          GLOBAL GATE
          {showTagline && (
            <Text 
              as="span" 
              color={currentColors.produce}
              ml={2}
            >
              PRODUCE
            </Text>
          )}
        </Text>
      </Box>
    </Flex>
  )
}

export { Logo, LogoHorizontal, LogoIcon }
export default Logo
