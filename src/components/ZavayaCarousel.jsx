import { useState, useEffect, useCallback } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  Flex,
} from '@chakra-ui/react'

import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

import imgCratePortrait from '../assets/images/AvocadoCratePortrait.jpeg'
import imgCratesReal from '../assets/images/avocado-crates-real.jpeg'
import imgHassAvocado from '../assets/images/Hassavocado.jpeg'
import imgHassAvocadoPng from '../assets/images/Hassavocado.png'
import imgHassCrate from '../assets/images/Hassavocadoscrate.jpeg'
import imgHassCratePng from '../assets/images/Hassavocadoscrate.png'
import imgHomepageCrate from '../assets/images/Homepageavocadocrate.png'
import imgHomepageAvocados from '../assets/images/Homepageavocados.png'

const slides = [
  { src: imgHomepageAvocados, alt: 'Zavaya branded crate of fresh Hass avocados' },
  { src: imgHomepageCrate, alt: 'Zavaya Tropical Mix avocado box' },
  { src: imgHassCratePng, alt: 'Zavaya crate on pallets of branded avocado boxes' },
  { src: imgHassCrate, alt: 'Zavaya wooden crate of Hass avocados in facility' },
  { src: imgCratePortrait, alt: 'Zavaya branded avocado crate close-up' },
  { src: imgCratesReal, alt: 'Fresh Hass avocados packed in export boxes' },
  { src: imgHassAvocadoPng, alt: 'Ripe Hass avocados on marble' },
  { src: imgHassAvocado, alt: 'Hass avocado halves on plate' },
]

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
)

function ZavayaCarousel() {
  const { t } = useLanguage()
  const headerRef = useReveal()
  const carouselRef = useReveal({ variant: 'image', delay: 100 })
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goTo = useCallback((index) => {
    setCurrent(index)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  return (
    <Box as="section" py={{ base: 14, md: 20 }} bg="brand.forestDark" position="relative" overflow="hidden">
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <Box ref={headerRef} className="reveal" mb={{ base: 8, md: 10 }} textAlign="center">
          <HStack spacing={3} justify="center" mb={3}>
            <Box w="40px" h="2px" bg="accent.leaf" />
            <Text
              fontSize="sm"
              fontWeight="600"
              color="accent.leaf"
              textTransform="uppercase"
              letterSpacing="0.15em"
            >
              {t('carousel.label')}
            </Text>
            <Box w="40px" h="2px" bg="accent.leaf" />
          </HStack>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontFamily="'Bebas Neue', 'Oswald', sans-serif"
            fontWeight="400"
            color="white"
            letterSpacing="0.04em"
          >
            {t('carousel.title')}
          </Heading>
        </Box>

        <Box
          ref={carouselRef}
          className="reveal"
          position="relative"
          mx="auto"
          maxW="900px"
          role="group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Box
            position="relative"
            overflow="hidden"
            borderRadius="4px"
            h={{ base: '300px', sm: '380px', md: '520px', lg: '580px' }}
            bg="brand.forestDark"
          >
            {slides.map((slide, index) => (
              <Box
                key={index}
                as="img"
                src={slide.src}
                alt={slide.alt}
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                objectFit="cover"
                opacity={index === current ? 1 : 0}
                transition="opacity 0.8s ease-in-out"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}

            <Flex
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              align="center"
              justify="space-between"
              px={{ base: 2, md: 4 }}
              pointerEvents="none"
            >
              <Box
                as="button"
                onClick={prev}
                p={2}
                borderRadius="full"
                bg="blackAlpha.500"
                color="white"
                _hover={{ bg: 'blackAlpha.700' }}
                transition="all 0.2s"
                opacity={{ base: 0.7, md: 0 }}
                _groupHover={{ opacity: 1 }}
                cursor="pointer"
                aria-label="Previous image"
                pointerEvents="auto"
              >
                <ChevronLeft />
              </Box>
              <Box
                as="button"
                onClick={next}
                p={2}
                borderRadius="full"
                bg="blackAlpha.500"
                color="white"
                _hover={{ bg: 'blackAlpha.700' }}
                transition="all 0.2s"
                opacity={{ base: 0.7, md: 0 }}
                _groupHover={{ opacity: 1 }}
                cursor="pointer"
                aria-label="Next image"
                pointerEvents="auto"
              >
                <ChevronRight />
              </Box>
            </Flex>

            <Text
              position="absolute"
              bottom={3}
              right={4}
              fontSize="xs"
              color="whiteAlpha.800"
              fontWeight="600"
              letterSpacing="0.1em"
              bg="blackAlpha.500"
              px={2}
              py={1}
              borderRadius="2px"
            >
              {current + 1} / {slides.length}
            </Text>
          </Box>

          <HStack spacing={2} justify="center" mt={5}>
            {slides.map((_, index) => (
              <Box
                key={index}
                as="button"
                onClick={() => goTo(index)}
                w={index === current ? '24px' : '8px'}
                h="8px"
                borderRadius="full"
                bg={index === current ? 'accent.leaf' : 'whiteAlpha.400'}
                transition="all 0.3s"
                cursor="pointer"
                _hover={{ bg: index === current ? 'accent.leaf' : 'whiteAlpha.600' }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

export default ZavayaCarousel
