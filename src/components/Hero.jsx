/**
 * Hero Section
 * 
 * Main landing section with bold headline and brand styling.
 * Features the deep forest green from the logo.
 */

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react'

// Import hero image
import heroImage from '../assets/images/fruit-platter.png'

// Import reveal hook
import { useReveal } from '../hooks/useReveal'

// Import logo for large hero display
import { LogoIcon } from './Logo'

// Leaf pattern SVG for background
const leafPatternSvg = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10c0 0 15 15 15 30s-15 20-30 10c0 0 5-15 15-30z' fill='%23ffffff'/%3E%3C/svg%3E")`

function Hero() {
  // Reveal refs for text group and image
  const textRef = useReveal()
  const imageRef = useReveal({ variant: 'image', delay: 100 })
  
  return (
    <Box
      as="section"
      pt={{ base: '72px', md: '72px' }}
      bg="brand.800"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        bgImage={leafPatternSvg}
        bgRepeat="repeat"
      />
      
      <Container maxW="1200px" px={{ base: 4, md: 8 }} position="relative">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 8, lg: 12 }}
          py={{ base: 12, md: 16, lg: 20 }}
        >
          {/* Left: Text Content */}
          <VStack
            ref={textRef}
            className="reveal"
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={6}
            flex="1"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            {/* Small tagline */}
            <HStack spacing={3}>
              <Box w="40px" h="1px" bg="accent.produce" display={{ base: 'none', lg: 'block' }} />
              <Text
                fontSize="sm"
                fontWeight="600"
                color="accent.produce"
                textTransform="uppercase"
                letterSpacing="0.15em"
              >
                Rio Grande Valley, Texas
              </Text>
            </HStack>

            {/* Main Headline */}
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontFamily="'Bebas Neue', 'Oswald', sans-serif"
              fontWeight="400"
              lineHeight="1.05"
              maxW="600px"
              color="white"
              letterSpacing="0.02em"
            >
              AVOCADOS, DRAGON FRUIT & TROPICALS
              <Text as="span" color="accent.produce">
                —DIRECT FROM MEXICO
              </Text>
            </Heading>

            {/* Supporting text */}
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="whiteAlpha.800"
              maxW="500px"
              lineHeight="1.8"
            >
              We work with growers in Michoacán, Jalisco, and Yucatán. 
              You get export-ready produce, packed to spec, with all the 
              USDA paperwork handled.
            </Text>

            {/* CTA Buttons */}
            <HStack spacing={4} pt={4}>
              <Button
                variant="light"
                size="lg"
                px={8}
                as="a"
                href="#contact"
              >
                Get Pricing
              </Button>
              <Button
                variant="ghost"
                size="lg"
                px={8}
                color="white"
                border="2px solid"
                borderColor="whiteAlpha.400"
                _hover={{ 
                  bg: 'whiteAlpha.100',
                  borderColor: 'white'
                }}
                as="a"
                href="#products"
              >
                See What We Ship
              </Button>
            </HStack>

            {/* Brief credibility note */}
            <Text 
              pt={6} 
              color="whiteAlpha.600"
              fontSize="sm"
              letterSpacing="0.02em"
            >
              Women-owned, Rio Grande Valley–based since 2020.
            </Text>
          </VStack>

          {/* Right: Hero Image */}
          <Box
            ref={imageRef}
            className="reveal"
            flex="1"
            w={{ base: '100%', lg: 'auto' }}
            maxW={{ base: '500px', lg: 'none' }}
            position="relative"
          >
            {/* Decorative frame */}
            <Box
              position="absolute"
              top="-10px"
              right="-10px"
              bottom="10px"
              left="10px"
              border="2px solid"
              borderColor="accent.leaf"
              opacity="0.3"
              display={{ base: 'none', lg: 'block' }}
            />
            <Image
              src={heroImage}
              alt="Fresh exotic fruits including dragon fruit, blueberries, and more"
              objectFit="cover"
              w="100%"
              h={{ base: '280px', md: '360px', lg: '440px' }}
              position="relative"
              zIndex="1"
            />
          </Box>
        </Flex>
      </Container>
      
      {/* Bottom accent line */}
      <Box h="4px" bg="accent.produce" />
    </Box>
  )
}

export default Hero
