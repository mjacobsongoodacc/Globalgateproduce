/**
 * Product Focus Section
 * 
 * Highlights key products with real photos and specifications.
 * Uses web-sourced avocado image and local dragon fruit photos.
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
    color: 'brand.700',
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
    color: 'accent.magenta',
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
    color: 'accent.yellow',
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
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="400"
            mb={3}
          >
            What we ship
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
                bg={product.color}
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
                    fontSize="lg"
                    fontWeight="600"
                    fontFamily="body"
                    mb={1}
                  >
                    {product.name}
                  </Heading>
                  <Text fontSize="sm" color="brand.700" fontWeight="500">
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
                      <Text fontSize="xs" color="neutral.stone">
                        {spec.label}
                      </Text>
                      <Text fontSize="xs" fontWeight="500" textAlign="right">
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
        <Box ref={moreProductsRef} className="reveal" pt={4}>
          <Text fontSize="sm" color="neutral.stone" lineHeight="1.8">
            <Text as="span" fontWeight="500" color="neutral.charcoal">Also available:</Text>
            {' '}Limes · Lemons · Lychees · Rambutan · Star fruit · Mangosteen · Passion fruit · Frozen blueberries
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductFocus
