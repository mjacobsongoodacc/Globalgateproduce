/**
 * Header Component
 * 
 * Fixed navigation with Global Gate Produce logo and nav links.
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
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.100"
      zIndex="100"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <Flex h="72px" align="center" justify="space-between">
          
          {/* Global Gate Produce Logo */}
          <Box 
            as="a" 
            href="/" 
            _hover={{ opacity: 0.8 }} 
            transition="opacity 0.2s"
          >
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="400"
              color="brand.700"
              letterSpacing="-0.02em"
            >
              Global Gate
              <Text as="span" color="accent.orange"> Produce</Text>
            </Text>
          </Box>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {NAV_LINKS.map((link) => (
              <Text
                key={link.label}
                as="a"
                href={link.href}
                fontSize="sm"
                fontWeight="500"
                color="neutral.stone"
                _hover={{ color: 'brand.700' }}
                transition="color 0.2s"
              >
                {link.label}
              </Text>
            ))}
<Button
                variant="primary"
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
            color="brand.700"
            onClick={onOpen}
          />

          {/* Mobile Drawer */}
          <Drawer isOpen={isOpen} onClose={onClose} placement="right">
            <DrawerOverlay />
            <DrawerContent bg="white">
              <Flex justify="flex-end" p={4}>
                <IconButton
                  aria-label="Close menu"
                  icon={<CloseIcon />}
                  variant="ghost"
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
                      color="neutral.charcoal"
                      onClick={onClose}
                      _hover={{ color: 'brand.700' }}
                    >
                      {link.label}
                    </Text>
                  ))}
                  <Button
                    variant="primary"
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
