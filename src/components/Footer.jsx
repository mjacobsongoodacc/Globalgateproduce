/**
 * Footer Component
 * 
 * Footer with Global Gate Produce logo, nav links, and contact info.
 * Updated with new brand styling.
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

// Import logo component
import { Logo } from './Logo'

// Leaf pattern SVG for background
const leafPatternSvg = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c0 0 10 10 10 20s-10 15-20 5c0 0 5-10 10-20z' fill='%23ffffff'/%3E%3C/svg%3E")`

// Tagline banner above footer
export function Tagline() {
  return (
    <Box
      py={{ base: 16, md: 20 }}
      bg="brand.800"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative leaf pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        bgImage={leafPatternSvg}
        bgRepeat="repeat"
      />
      <Container maxW="1200px" px={{ base: 4, md: 8 }} position="relative">
        <Heading
          as="p"
          textAlign="center"
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
          fontFamily="'Bebas Neue', 'Oswald', sans-serif"
          fontWeight="400"
          color="white"
          letterSpacing="0.05em"
        >
          TASTE THE RARE, TASTE EXOTIC
          <Text as="span" color="accent.produce"> FROM MEXICO</Text>
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
      bg="brand.900"
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
            <Logo variant="white" size="md" />
            
            <Text fontSize="sm" color="whiteAlpha.700" lineHeight="1.7" pt={2}>
              Avocados, dragon fruit, and tropicals from Mexico. 
              Women-owned, Rio Grande Valley–based.
            </Text>
          </VStack>

          {/* Navigation Links */}
          <VStack align="flex-start" spacing={3}>
            <Text 
              fontSize="sm" 
              fontWeight="600" 
              color="accent.produce" 
              mb={1}
              letterSpacing="0.05em"
            >
              QUICK LINKS
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
            <Text 
              fontSize="sm" 
              fontWeight="600" 
              color="accent.produce" 
              mb={1}
              letterSpacing="0.05em"
            >
              CONTACT US
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
