/**
 * Product Focus Section
 * 
 * Highlights key products with real photos and specifications.
 * Updated with new brand styling.
 */

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Image,
} from '@chakra-ui/react'

// Import dragon fruit images from your photos
import dragonfruitRedImg from '../assets/images/dragonfruit-package.png'
import dragonfruitYellowImg from '../assets/images/dragonfruit-green.png'

// Import reveal hook
import { useReveal, useStaggerReveal } from '../hooks/useReveal'

// Web-sourced avocado image (royalty-free from Unsplash)
const AVOCADO_IMAGE_URL = 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop'

// Product data with images
const PRODUCTS = [
  {
    id: 'avocado',
    name: 'Hass Avocados',
    origin: 'Michoacán & Jalisco',
    description: 'Year-round from certified orchards. We can match most size and pack specs.',
    specs: [
      { label: 'Sizes', value: '32, 36, 40, 48, 60, 70, 84 ct' },
      { label: 'Pack', value: '10kg / 25lb boxes' },
      { label: 'Season', value: 'Year-round' },
    ],
    color: 'brand.800',
    imageUrl: AVOCADO_IMAGE_URL,
    imageAlt: 'Fresh Hass avocados',
  },
  {
    id: 'dragon-red',
    name: 'Red Dragon Fruit',
    origin: 'Yucatán Peninsula',
    description: 'Magenta flesh, export-ready packaging. Organic available.',
    specs: [
      { label: 'Flesh', value: 'Red / Magenta' },
      { label: 'Pack', value: '5kg clamshells, 10lb boxes' },
      { label: 'Season', value: 'May–Nov peak' },
    ],
    color: '#c2185b',
    image: dragonfruitRedImg,
    imageAlt: 'Red dragon fruit in packaging',
  },
  {
    id: 'dragon-yellow',
    name: 'Yellow Dragon Fruit',
    origin: 'Yucatán Peninsula',
    description: 'Sweet white flesh. Limited supply—ask about availability.',
    specs: [
      { label: 'Flesh', value: 'White / Sweet' },
      { label: 'Pack', value: '5kg clamshells' },
      { label: 'Season', value: 'Limited' },
    ],
    color: 'accent.produce',
    image: dragonfruitYellowImg,
    imageAlt: 'Yellow dragon fruit',
  },
]

// Additional products offered
const MORE_PRODUCTS = [
  'Limes',
  'Lemons', 
  'Lychees',
  'Rambutan',
  'Star Fruit',
  'Mangosteen',
  'Passion Fruit',
  'Frozen Blueberries',
]

function ProductFocus() {
  // Reveal refs
  const headerRef = useReveal()
  // Product cards have images, use slower image variant
  const productRefs = useStaggerReveal(PRODUCTS.length, { variant: 'image', staggerDelay: 120 })
  const moreProductsRef = useReveal()

  return (
    <Box
      as="section"
      id="products"
      py={{ base: 16, md: 24 }}
      bg="white"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Section Header */}
        <Box ref={headerRef} className="reveal" mb={{ base: 10, md: 14 }} maxW="500px">
          <Text
            fontSize="sm"
            fontWeight="600"
            color="accent.leaf"
            textTransform="uppercase"
            letterSpacing="0.15em"
            mb={3}
          >
            Our Products
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontFamily="'Bebas Neue', 'Oswald', sans-serif"
            fontWeight="400"
            mb={3}
            letterSpacing="0.02em"
            color="brand.800"
          >
            WHAT WE SHIP
          </Heading>
          <Text fontSize="md" color="neutral.stone" lineHeight="1.7">
            Our main lines, plus seasonal and specialty items by request.
          </Text>
        </Box>

        {/* Product Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 8, lg: 8 }} mb={16}>
          {PRODUCTS.map((product, index) => (
            <Box
              key={product.id}
              ref={productRefs(index)}
              className="reveal"
              bg="neutral.cream"
              overflow="hidden"
            >
              {/* Product Image */}
              <Box
                h="220px"
                position="relative"
                overflow="hidden"
              >
                <Image
                  src={product.imageUrl || product.image}
                  alt={product.imageAlt}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  transition="transform 0.3s"
                  _hover={{ transform: 'scale(1.05)' }}
                />
                {/* Color accent overlay */}
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="4px"
                  bg={product.color}
                />
              </Box>

              {/* Product Info */}
              <VStack
                align="flex-start"
                spacing={4}
                p={6}
              >
                <Box>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                    fontWeight="400"
                    letterSpacing="0.05em"
                    mb={1}
                    color="brand.800"
                  >
                    {product.name.toUpperCase()}
                  </Heading>
                  <Text fontSize="sm" color="accent.leaf" fontWeight="600">
                    {product.origin}
                  </Text>
                </Box>

                <Text fontSize="sm" color="neutral.stone" lineHeight="1.6">
                  {product.description}
                </Text>

                {/* Specs Table */}
                <VStack align="stretch" spacing={0} w="100%" pt={2}>
                  {product.specs.map((spec, idx) => (
                    <HStack
                      key={spec.label}
                      justify="space-between"
                      py={2}
                      borderTop={idx === 0 ? '1px solid' : 'none'}
                      borderBottom="1px solid"
                      borderColor="gray.200"
                    >
                      <Text fontSize="xs" color="neutral.stone" textTransform="uppercase" letterSpacing="0.05em">
                        {spec.label}
                      </Text>
                      <Text fontSize="xs" fontWeight="600" textAlign="right" color="brand.800">
                        {spec.value}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Additional Products - simple list */}
        <Box 
          ref={moreProductsRef} 
          className="reveal" 
          pt={4}
          p={6}
          bg="brand.800"
          color="white"
        >
          <Text 
            fontSize="sm" 
            lineHeight="1.8"
            textAlign="center"
          >
            <Text 
              as="span" 
              fontWeight="600" 
              color="accent.produce"
              textTransform="uppercase"
              letterSpacing="0.1em"
            >
              Also Available:
            </Text>
            {' '}Limes · Lemons · Lychees · Rambutan · Star fruit · Mangosteen · Passion fruit · Frozen blueberries
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductFocus
