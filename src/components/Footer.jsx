/**
 * Footer Component
 * 
 * Footer with Global Gate Produce logo, nav links, and contact info.
 */

import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  Link,
  Heading,
} from '@chakra-ui/react'

// Tagline banner above footer
export function Tagline() {
  return (
    <Box
      py={{ base: 12, md: 16 }}
      bg="brand.700"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <Heading
          as="p"
          textAlign="center"
          fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
          fontWeight="400"
          fontStyle="italic"
          color="white"
          letterSpacing="0.02em"
        >
          Taste the rare, taste exotic from Mexico
        </Heading>
      </Container>
    </Box>
  )
}

// Footer nav links
const FOOTER_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      as="footer"
      py={{ base: 12, md: 16 }}
      bg="neutral.charcoal"
      color="white"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'flex-start' }}
          gap={{ base: 10, md: 16 }}
        >
          {/* Company Info with Logo */}
          <VStack align="flex-start" spacing={4} maxW="300px">
            {/* Global Gate Produce Logo */}
            <Text
              fontSize="xl"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="400"
              color="white"
              letterSpacing="-0.02em"
            >
              Global Gate
              <Text as="span" color="accent.orange"> Produce</Text>
            </Text>
            
            <Text fontSize="sm" color="whiteAlpha.700" lineHeight="1.7">
              Avocados, dragon fruit, and tropicals from Mexico. 
              Women-owned, Rio Grande Valley–based.
            </Text>
          </VStack>

          {/* Navigation Links */}
          <VStack align="flex-start" spacing={3}>
            <Text fontSize="sm" fontWeight="500" color="white" mb={1}>
              Quick Links
            </Text>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="sm"
                color="whiteAlpha.700"
                _hover={{ color: 'white' }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </VStack>

          {/* Contact Info */}
          <VStack align="flex-start" spacing={3}>
            <Text fontSize="sm" fontWeight="500" color="white" mb={1}>
              Contact Us
            </Text>
            <Link
              href="mailto:sales@globalgateproduce.com"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: 'white' }}
            >
              sales@globalgateproduce.com
            </Link>
            <Link
              href="tel:+19566511021"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: 'white' }}
            >
              +1 956 651 1021
            </Link>
            <Text fontSize="sm" color="whiteAlpha.700">
              Rio Grande Valley, Texas
            </Text>
          </VStack>
        </Flex>

        {/* Copyright */}
        <Box
          mt={{ base: 10, md: 12 }}
          pt={6}
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
        >
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', sm: 'center' }}
            gap={4}
          >
            <Text fontSize="xs" color="whiteAlpha.500">
              © {currentYear} Global Gate Produce LLC. All rights reserved.
            </Text>
            <Link
              href="https://www.globalgateproduce.com"
              fontSize="xs"
              color="whiteAlpha.500"
              _hover={{ color: 'whiteAlpha.700' }}
              isExternal
            >
              globalgateproduce.com
            </Link>
          </Flex>
        </Box>

      </Container>
    </Box>
  )
}

export default Footer
