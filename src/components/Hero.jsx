/**
 * Hero Section
 * 
 * Main landing section with headline, fruit platter image, and CTAs.
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

function Hero() {
  // Reveal refs for text group and image
  const textRef = useReveal()
  const imageRef = useReveal({ variant: 'image', delay: 100 })
  return (
    <Box
      as="section"
      pt={{ base: '120px', md: '140px' }}
      pb={{ base: 16, md: 24 }}
      bg="white"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 12, lg: 16 }}
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
            <Text
              fontSize="sm"
              fontWeight="600"
              color="accent.orange"
              textTransform="uppercase"
              letterSpacing="0.1em"
            >
              Rio Grande Valley, Texas
            </Text>

            {/* Main Headline */}
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="400"
              lineHeight="1.15"
              maxW="560px"
            >
              Avocados, dragon fruit, and tropicals—
              <Text as="span" color="brand.700">
                direct from Mexico
              </Text>
            </Heading>

            {/* Supporting text */}
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="neutral.stone"
              maxW="480px"
              lineHeight="1.7"
            >
              We work with growers in Michoacán, Jalisco, and Yucatán. 
              You get export-ready produce, packed to spec, with all the 
              USDA paperwork handled.
            </Text>

            {/* CTA Buttons */}
            <HStack spacing={4} pt={4}>
              <Button
                variant="primary"
                size="lg"
                px={8}
                as="a"
                href="#contact"
              >
                Get Pricing
              </Button>
              <Button
                variant="secondary"
                size="lg"
                px={8}
                as="a"
                href="#products"
              >
                See What We Ship
              </Button>
            </HStack>

            {/* Brief credibility note - not a checklist */}
            <Text 
              pt={6} 
              color="neutral.stone"
              fontSize="sm"
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
          >
            <Image
              src={heroImage}
              alt="Fresh exotic fruits including dragon fruit, blueberries, and more"
              objectFit="cover"
              w="100%"
              h={{ base: '300px', md: '400px', lg: '480px' }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Hero
