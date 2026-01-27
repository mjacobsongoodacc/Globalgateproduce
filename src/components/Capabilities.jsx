/**
 * Capabilities Section
 * 
 * Three-column grid with real photos showing sourcing, packing, and logistics.
 */

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
} from '@chakra-ui/react'

// Import capability images from your farm photos
import farmHarvestImg from '../assets/images/farm-harvest.png'
import packingGradingImg from '../assets/images/Packingandgrading.jpeg'
import coldchainImg from '../assets/images/coldchain.jpeg'

// Import reveal hook
import { useReveal, useStaggerReveal } from '../hooks/useReveal'

// Capability data with real farm/warehouse photos
const CAPABILITIES = [
  {
    id: 'sourcing',
    title: 'Sourcing',
    description: 'We know the growers personally. Certified orchards in Michoacán, Jalisco, and Yucatán—no brokers, no surprises.',
    accent: 'brand.700',
    image: farmHarvestImg,
    imageAlt: 'Fresh produce being harvested at the farm',
  },
  {
    id: 'packing',
    title: 'Packing',
    description: "Every piece gets inspected and size-graded at our packhouses. Tell us your specs—we'll match them.",
    accent: 'accent.orange',
    image: packingGradingImg,
    imageAlt: 'Team member with packaged dragon fruit in our facility',
  },
  {
    id: 'logistics',
    title: 'Shipping',
    description: 'Cold chain from farm to your dock. We handle phyto certificates, USDA clearance, and temperature logs.',
    accent: 'accent.teal',
    image: coldchainImg,
    imageAlt: 'Pallets of dragon fruit boxes ready for cold chain transport',
  },
]

function Capabilities() {
  // Reveal ref for section header
  const headerRef = useReveal()
  // Staggered reveal for capability cards with images (slower timing)
  const cardRefs = useStaggerReveal(CAPABILITIES.length, { variant: 'image', staggerDelay: 120 })

  return (
    <Box
      as="section"
      id="about"
      py={{ base: 16, md: 24 }}
      bg="neutral.cream"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Section Header - left aligned for variety */}
        <Box ref={headerRef} className="reveal" mb={{ base: 10, md: 14 }} maxW="600px">
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="400"
            mb={4}
          >
            How it works
          </Heading>
          <Text
            fontSize="md"
            color="neutral.stone"
            lineHeight="1.7"
          >
            We started in 2020 with a handful of grower relationships. 
            Now we move produce from three Mexican states into the U.S. and beyond.
          </Text>
        </Box>

        {/* Capability Cards with Images */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 6 }}>
          {CAPABILITIES.map((cap, index) => (
            <VStack
              key={cap.id}
              ref={cardRefs(index)}
              className="reveal"
              align="stretch"
              spacing={0}
              bg="white"
              overflow="hidden"
              borderTop="3px solid"
              borderColor={cap.accent}
              h="100%"
            >
              {/* Image */}
              <Box h="200px" overflow="hidden" bg="gray.100">
                <Image
                  src={cap.image}
                  alt={cap.imageAlt}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  transition="transform 0.3s"
                  _hover={{ transform: 'scale(1.05)' }}
                />
              </Box>
              
              {/* Content */}
              <VStack align="flex-start" spacing={3} p={6} flex="1">
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontWeight="600"
                  fontFamily="body"
                >
                  {cap.title}
                </Heading>
                
                <Text
                  fontSize="sm"
                  color="neutral.stone"
                  lineHeight="1.7"
                >
                  {cap.description}
                </Text>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Capabilities
