/**
 * Capabilities Section
 * 
 * Three-column grid with real photos showing sourcing, packing, and logistics.
 * Updated with new brand styling.
 */

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  HStack,
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
    accent: 'brand.800',
    image: farmHarvestImg,
    imageAlt: 'Fresh produce being harvested at the farm',
    number: '01',
  },
  {
    id: 'packing',
    title: 'Packing',
    description: "Every piece gets inspected and size-graded at our packhouses. Tell us your specs—we'll match them.",
    accent: 'accent.leaf',
    image: packingGradingImg,
    imageAlt: 'Team member with packaged dragon fruit in our facility',
    number: '02',
  },
  {
    id: 'logistics',
    title: 'Shipping',
    description: 'Cold chain from farm to your dock. We handle phyto certificates, USDA clearance, and temperature logs.',
    accent: 'accent.produce',
    image: coldchainImg,
    imageAlt: 'Pallets of dragon fruit boxes ready for cold chain transport',
    number: '03',
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
          <Text
            fontSize="sm"
            fontWeight="600"
            color="accent.leaf"
            textTransform="uppercase"
            letterSpacing="0.15em"
            mb={3}
          >
            How It Works
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontFamily="'Bebas Neue', 'Oswald', sans-serif"
            fontWeight="400"
            mb={4}
            letterSpacing="0.02em"
            color="brand.800"
          >
            FROM ORCHARD TO YOUR DOCK
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
              h="100%"
              position="relative"
            >
              {/* Number badge */}
              <Box
                position="absolute"
                top="4"
                left="4"
                bg={cap.accent}
                color="white"
                px={3}
                py={1}
                fontSize="xs"
                fontWeight="600"
                letterSpacing="0.1em"
                zIndex="2"
              >
                {cap.number}
              </Box>
              
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
              <VStack align="flex-start" spacing={3} p={6} flex="1" borderTop="3px solid" borderColor={cap.accent}>
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                  fontWeight="400"
                  letterSpacing="0.05em"
                  color="brand.800"
                >
                  {cap.title.toUpperCase()}
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
