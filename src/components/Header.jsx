/**
 * Header Component
 * 
 * Fixed navigation with forest green background.
 * Changes to magenta with Zavaya logo when on Products page.
 * Logo uses mix-blend-mode to appear transparent on colored backgrounds.
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
import { Link as RouterLink, useLocation } from 'react-router-dom'

import { Logo } from './Logo'
import { useLanguage } from '../context/LanguageContext'
import ZavayaLogo from './ZavayaLogo'

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

// Globe icon for language toggle
const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t, language, toggleLanguage } = useLanguage()
  const location = useLocation()

  // Check if we're on the products page (for Zavaya branding)
  const isProductsPage = location.pathname === '/products' || location.pathname.startsWith('/products/')

  // Dynamic colors based on current page
  const headerBg = isProductsPage ? 'brand.primary' : 'brand.forest'
  const ctaHoverBg = isProductsPage ? 'brand.teal' : 'accent.leaf'

  // Navigation links
  const NAV_LINKS = [
    { label: t('nav.products'), href: '/products', isRoute: true },
    { label: t('nav.about'), href: '/#about', isAnchor: true },
    { label: t('nav.quality'), href: '/#quality', isAnchor: true },
    { label: t('nav.certifications'), href: '/certifications', isRoute: true },
    { label: t('nav.contact'), href: '/#contact', isAnchor: true },
  ]

  // Check if link is active
  const isActiveLink = (href) => {
    if (href.startsWith('/#')) return false
    return location.pathname === href || location.pathname.startsWith(href + '/')
  }

  // Handle navigation
  const handleNavClick = (link, e) => {
    if (link.isAnchor) {
      const targetId = link.href.replace('/#', '')
      if (location.pathname === '/') {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    onClose()
  }

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg={headerBg}
      zIndex="100"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <Flex h="72px" align="center" justify="space-between">
          
          {/* Logo + Zavaya logo on products page */}
          <HStack spacing={3}>
            <Box as={RouterLink} to="/">
              <Logo size="sm" />
            </Box>
            
            {/* Show divider and Zavaya logo when on products page */}
            {isProductsPage && (
              <>
                <Box h="40px" w="1px" bg="whiteAlpha.400" display={{ base: 'none', md: 'block' }} />
                <ZavayaLogo
                  height={{ base: '48px', md: '52px', lg: '56px' }}
                  display={{ base: 'none', md: 'block' }}
                />
              </>
            )}
          </HStack>

          {/* Desktop Navigation */}
          <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
            {NAV_LINKS.map((link) => (
              <Text
                key={link.label}
                as={RouterLink}
                to={link.href}
                onClick={(e) => handleNavClick(link, e)}
                fontSize="sm"
                fontWeight="500"
                color={isActiveLink(link.href) ? (isProductsPage ? 'brand.teal' : 'accent.leaf') : 'whiteAlpha.900'}
                _hover={{ color: isProductsPage ? 'brand.teal' : 'accent.leaf' }}
                transition="color 0.2s"
                letterSpacing="0.02em"
                position="relative"
                py={2}
              >
                {link.label}
              </Text>
            ))}
            
            {/* Language Toggle */}
            <HStack
              spacing={1}
              cursor="pointer"
              onClick={toggleLanguage}
              color="whiteAlpha.700"
              _hover={{ color: isProductsPage ? 'brand.teal' : 'accent.leaf' }}
              transition="color 0.2s"
              px={2}
              py={1}
              borderRadius="sm"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              <GlobeIcon />
              <Text fontSize="xs" fontWeight="600" letterSpacing="0.05em">
                {language.toUpperCase()}
              </Text>
            </HStack>
            
            <Button
              bg="transparent"
              color="white"
              border="1px solid"
              borderColor="whiteAlpha.400"
              _hover={{ bg: 'whiteAlpha.100', borderColor: ctaHoverBg }}
              size="sm"
              px={6}
              as={RouterLink}
              to="/#contact"
            >
              {t('nav.getPricing')}
            </Button>
          </HStack>

          {/* Mobile: Language Toggle + Menu Button */}
          <HStack spacing={2} display={{ base: 'flex', md: 'none' }}>
            {/* Language Toggle */}
            <HStack
              spacing={1}
              cursor="pointer"
              onClick={toggleLanguage}
              color="whiteAlpha.700"
              px={2}
              py={1}
            >
              <GlobeIcon />
              <Text fontSize="xs" fontWeight="600">
                {language.toUpperCase()}
              </Text>
            </HStack>
            
            <IconButton
              aria-label="Open menu"
              icon={<MenuIcon />}
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.100' }}
              onClick={onOpen}
            />
          </HStack>

          {/* Mobile Drawer */}
          <Drawer isOpen={isOpen} onClose={onClose} placement="right">
            <DrawerOverlay />
            <DrawerContent bg={headerBg}>
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
                  {/* Show Zavaya logo on mobile when on products page */}
                  {isProductsPage && (
                    <Box pb={4} borderBottom="1px solid" borderColor="whiteAlpha.200">
                      <ZavayaLogo height="48px" />
                    </Box>
                  )}
                  
                  {NAV_LINKS.map((link) => (
                    <Text
                      key={link.label}
                      as={RouterLink}
                      to={link.href}
                      onClick={(e) => handleNavClick(link, e)}
                      fontSize="lg"
                      fontWeight="500"
                      color={isActiveLink(link.href) ? (isProductsPage ? 'brand.teal' : 'accent.leaf') : 'whiteAlpha.900'}
                      _hover={{ color: isProductsPage ? 'brand.teal' : 'accent.leaf' }}
                      letterSpacing="0.02em"
                      pl={4}
                      borderLeft="3px solid"
                      borderColor={isActiveLink(link.href) ? (isProductsPage ? 'brand.teal' : 'accent.leaf') : 'transparent'}
                    >
                      {link.label}
                    </Text>
                  ))}
                  <Button
                    bg="transparent"
                    color="white"
                    border="1px solid"
                    borderColor="whiteAlpha.400"
                    _hover={{ bg: 'whiteAlpha.100' }}
                    size="lg"
                    as={RouterLink}
                    to="/#contact"
                    onClick={onClose}
                    mt={4}
                  >
                    {t('nav.getPricing')}
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
