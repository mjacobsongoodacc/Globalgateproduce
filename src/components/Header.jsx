/**
 * Header Component
 * 
 * Fixed navigation with Global Gate Produce logo and nav links.
 * Updated with new brand styling.
 */

import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Container,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'

// Import logo component
import { Logo, LogoHorizontal } from './Logo'

// Simple hamburger icon for mobile
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Close icon for mobile drawer
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Navigation links
const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="brand.800"
      zIndex="100"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <Flex h="72px" align="center" justify="space-between">
          
          {/* Global Gate Produce Logo */}
          <Logo variant="dark" size="sm" />

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {NAV_LINKS.map((link) => (
              <Text
                key={link.label}
                as="a"
                href={link.href}
                fontSize="sm"
                fontWeight="500"
                color="whiteAlpha.800"
                _hover={{ color: 'white' }}
                transition="color 0.2s"
                letterSpacing="0.02em"
              >
                {link.label}
              </Text>
            ))}
            <Button
              variant="light"
              size="sm"
              px={6}
              as="a"
              href="#contact"
            >
              Get Pricing
            </Button>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label="Open menu"
            icon={<MenuIcon />}
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.100' }}
            onClick={onOpen}
          />

          {/* Mobile Drawer */}
          <Drawer isOpen={isOpen} onClose={onClose} placement="right">
            <DrawerOverlay />
            <DrawerContent bg="brand.800">
              <Flex justify="flex-end" p={4}>
                <IconButton
                  aria-label="Close menu"
                  icon={<CloseIcon />}
                  variant="ghost"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.100' }}
                  onClick={onClose}
                />
              </Flex>
              <DrawerBody>
                <VStack spacing={6} align="stretch" pt={8}>
                  {NAV_LINKS.map((link) => (
                    <Text
                      key={link.label}
                      as="a"
                      href={link.href}
                      fontSize="lg"
                      fontWeight="500"
                      color="white"
                      onClick={onClose}
                      _hover={{ color: 'accent.produce' }}
                      letterSpacing="0.02em"
                    >
                      {link.label}
                    </Text>
                  ))}
                  <Button
                    variant="light"
                    size="lg"
                    as="a"
                    href="#contact"
                    onClick={onClose}
                    mt={4}
                  >
                    Get Pricing
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
