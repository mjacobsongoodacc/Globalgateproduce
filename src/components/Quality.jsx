/**
 * Quality & Certifications Section
 * 
 * Shows certification badges and quality commitment.
 * Updated with new brand styling.
 */

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
} from '@chakra-ui/react'

// Import reveal hook
import { useReveal, useStaggerReveal } from '../hooks/useReveal'

// Certifications list
const CERTIFICATIONS = [
  { id: 'usda', label: 'USDA' },
  { id: 'globalgap', label: 'GlobalGAP' },
  { id: 'senasica', label: 'SENASICA' },
  { id: 'haccp', label: 'HACCP' },
  { id: 'organic', label: 'Organic' },
  { id: 'fsma', label: 'FSMA' },
]

// Quality pillars
const QUALITY_PILLARS = [
  {
    title: 'Field Visits',
    description: "We inspect partner farms regularly. If something's off, we catch it early.",
    icon: '🌱',
  },
  {
    title: 'Temperature Logs',
    description: 'Continuous monitoring from packhouse to your receiving dock.',
    icon: '❄️',
  },
  {
    title: 'Full Traceability',
    description: 'Every box tracked back to the orchard it came from.',
    icon: '📦',
  },
]

// Leaf pattern SVG for background
const leafPatternSvg = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c0 0 10 10 10 20s-10 15-20 5c0 0 5-10 10-20z' fill='%23ffffff'/%3E%3C/svg%3E")`

function Quality() {
  // Reveal refs
  const headerRef = useReveal()
  const pillarRefs = useStaggerReveal(QUALITY_PILLARS.length, { staggerDelay: 80 })
  const certsRef = useReveal()

  return (
    <Box
      as="section"
      id="quality"
      py={{ base: 16, md: 24 }}
      bg="brand.800"
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative pattern */}
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
        {/* Header - left aligned */}
        <Box ref={headerRef} className="reveal" mb={{ base: 10, md: 14 }} maxW="550px">
          <Text
            fontSize="sm"
            fontWeight="600"
            color="accent.produce"
            textTransform="uppercase"
            letterSpacing="0.15em"
            mb={3}
          >
            Quality Assurance
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontFamily="'Bebas Neue', 'Oswald', sans-serif"
            fontWeight="400"
            color="white"
            mb={4}
            letterSpacing="0.02em"
          >
            THE PAPERWORK IS HANDLED
          </Heading>
          
          <Text
            fontSize="md"
            color="whiteAlpha.800"
            lineHeight="1.7"
          >
            Phyto certificates, USDA/APHIS clearance, certificates of origin—we 
            deal with it so you don't have to.
          </Text>
        </Box>

        {/* Quality Pillars */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={12}>
          {QUALITY_PILLARS.map((pillar, index) => (
            <VStack
              key={pillar.title}
              ref={pillarRefs(index)}
              className="reveal"
              align="flex-start"
              p={6}
              bg="whiteAlpha.50"
              borderLeft="3px solid"
              borderColor="accent.produce"
              _hover={{ bg: 'whiteAlpha.100' }}
              transition="background 0.2s"
            >
              <Text fontSize="2xl" mb={2}>{pillar.icon}</Text>
              <Text 
                fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                fontWeight="400" 
                color="white" 
                fontSize="xl"
                letterSpacing="0.05em"
              >
                {pillar.title.toUpperCase()}
              </Text>
              <Text fontSize="sm" color="whiteAlpha.700" lineHeight="1.7">
                {pillar.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Certification badges */}
        <Box 
          ref={certsRef} 
          className="reveal" 
          py={8}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
        >
          <HStack 
            spacing={{ base: 4, md: 8 }} 
            justify="center"
            flexWrap="wrap"
            gap={4}
          >
            {CERTIFICATIONS.map((cert) => (
              <Box
                key={cert.id}
                px={4}
                py={2}
                border="1px solid"
                borderColor="whiteAlpha.300"
                bg="whiteAlpha.50"
              >
                <Text 
                  fontSize="xs" 
                  fontWeight="600"
                  color="white"
                  letterSpacing="0.1em"
                >
                  {cert.label}
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Quality
