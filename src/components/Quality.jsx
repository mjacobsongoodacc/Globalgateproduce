/**
 * Quality & Certifications Section
 * 
 * Shows certification badges and quality commitment.
 * No images to avoid loading issues.
 */

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'

// Import reveal hook
import { useReveal, useStaggerReveal } from '../hooks/useReveal'

// Certifications list
const CERTIFICATIONS = [
  { id: 'usda', label: 'USDA Approved' },
  { id: 'globalgap', label: 'GlobalGAP' },
  { id: 'senasica', label: 'SENASICA' },
  { id: 'haccp', label: 'HACCP' },
  { id: 'organic', label: 'Organic Options' },
  { id: 'fsma', label: 'FSMA Compliant' },
]

// Quality pillars
const QUALITY_PILLARS = [
  {
    title: 'Field visits',
    description: "We inspect partner farms regularly. If something's off, we catch it early.",
  },
  {
    title: 'Temperature logs',
    description: 'Continuous monitoring from packhouse to your receiving dock.',
  },
  {
    title: 'Full traceability',
    description: 'Every box tracked back to the orchard it came from.',
  },
]

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
      bg="brand.700"
      color="white"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Header - left aligned */}
        <Box ref={headerRef} className="reveal" mb={{ base: 10, md: 14 }} maxW="550px">
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="400"
            color="white"
            mb={4}
          >
            The paperwork is handled
          </Heading>
          
          <Text
            fontSize="md"
            color="brand.200"
            lineHeight="1.7"
          >
            Phyto certificates, USDA/APHIS clearance, certificates of origin—we 
            deal with it so you don't have to.
          </Text>
        </Box>

        {/* Quality Pillars */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={12}>
          {QUALITY_PILLARS.map((pillar, index) => (
            <VStack
              key={pillar.title}
              ref={pillarRefs(index)}
              className="reveal"
              align="flex-start"
              p={6}
              bg="whiteAlpha.100"
              borderRadius="4px"
            >
              <Text fontWeight="600" color="white" fontSize="lg">
                {pillar.title}
              </Text>
              <Text fontSize="sm" color="whiteAlpha.700" lineHeight="1.7">
                {pillar.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Certification list - centered */}
        <Box ref={certsRef} className="reveal" textAlign="center">
          <Text 
            fontSize="sm" 
            color="brand.200"
            letterSpacing="0.02em"
          >
            USDA · GlobalGAP · SENASICA · HACCP · FSMA compliant · Organic options available
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Quality
