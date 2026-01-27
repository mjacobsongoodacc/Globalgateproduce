/**
 * Contact Form Section
 * 
 * Contact form with name, email, company, and message fields.
 * 
 * TO ADD FORM SUBMISSION:
 * Replace the handleSubmit function with your preferred method:
 * - Email service (EmailJS, Formspree, etc.)
 * - API endpoint
 * - CRM integration
 * 
 * Example with Formspree (free tier available):
 * 1. Sign up at formspree.io
 * 2. Create a form, get your form ID
 * 3. Replace the fetch URL with: https://formspree.io/f/YOUR_FORM_ID
 */

import { useState } from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  Image,
} from '@chakra-ui/react'

// Import Marie Leal photo
import marieLealImg from '../assets/images/Marieleal.png'

// Import reveal hook
import { useReveal } from '../hooks/useReveal'

function ContactForm() {
  // Reveal refs (text block has an image, use image variant)
  const textRef = useReveal({ variant: 'image' })
  const formRef = useReveal({ delay: 100 })

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // ============================================
      // REPLACE THIS SECTION WITH YOUR FORM HANDLER
      // ============================================
      
      // Option 1: Formspree (recommended for simple setup)
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      // if (!response.ok) throw new Error('Form submission failed')

      // Option 2: Your own API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      // if (!response.ok) throw new Error('Form submission failed')

      // Current: Just log and simulate success (for demo)
      console.log('Form submitted:', formData)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
      
      // ============================================
      // END REPLACEMENT SECTION
      // ============================================

      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      console.error('Form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: 16, md: 24 }}
      bg="neutral.cream"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 10, lg: 16 }}
        >
          {/* Left: Text Content */}
          <VStack
            ref={textRef}
            className="reveal"
            align="flex-start"
            spacing={5}
            flex="1"
          >
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="400"
            >
              Talk to us
            </Heading>
            
            <Text
              fontSize="md"
              color="neutral.stone"
              lineHeight="1.7"
              maxW="400px"
            >
              Tell us what you need—product, volume, sizing, delivery location. 
              We'll get back to you within a day with pricing.
            </Text>

            {/* Contact Info */}
            <VStack align="flex-start" spacing={4} pt={4}>
              <HStack spacing={4} align="flex-start">
                <Image
                  src={marieLealImg}
                  alt="Mariel Leal - Sales Manager"
                  boxSize="80px"
                  objectFit="cover"
                  objectPosition="center 20%"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="brand.700"
                />
                <HStack spacing={8} align="flex-start">
                  <Box>
                    <Text fontSize="sm" fontWeight="600" color="neutral.charcoal" mb={1}>
                      Mariel Leal
                    </Text>
                    <Text fontSize="xs" color="brand.700" fontWeight="500" mb={1}>
                      Sales Manager
                    </Text>
                    <Text fontSize="sm" color="neutral.stone">
                      +1 956 651 1021
                    </Text>
                    <Text fontSize="sm" color="neutral.stone">
                      sales@globalgateproduce.com
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" fontWeight="600" color="neutral.charcoal" mb={1}>
                      Sara Torres
                    </Text>
                    <Text fontSize="xs" color="brand.700" fontWeight="500" mb={1}>
                      Finance / CEO
                    </Text>
                    <Text fontSize="sm" color="neutral.stone">
                      +1 210 289 6663
                    </Text>
                    <Text fontSize="sm" color="neutral.stone">
                      finance@globalgateproduce.com
                    </Text>
                  </Box>
                </HStack>
              </HStack>

              <Box>
                <Text fontSize="sm" fontWeight="600" color="neutral.charcoal" mb={1}>
                  Location
                </Text>
                <Text fontSize="sm" color="neutral.stone">
                  Rio Grande Valley, Texas
                </Text>
              </Box>
            </VStack>
          </VStack>

          {/* Right: Form */}
          <Box ref={formRef} className="reveal" flex="1" maxW={{ lg: '500px' }}>
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg="white"
              p={{ base: 6, md: 8 }}
              borderTop="3px solid"
              borderColor="brand.700"
            >
              <VStack spacing={5}>
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <Alert status="success" borderRadius="2px">
                    <AlertIcon />
                    Thank you! We'll be in touch within 24 hours.
                  </Alert>
                )}
                {submitStatus === 'error' && (
                  <Alert status="error" borderRadius="2px">
                    <AlertIcon />
                    Something went wrong. Please email us directly.
                  </Alert>
                )}

                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="500" color="neutral.charcoal">
                    Name
                  </FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    size="lg"
                    borderRadius="2px"
                    borderColor="gray.200"
                    _hover={{ borderColor: 'gray.300' }}
                    _focus={{ borderColor: 'brand.700', boxShadow: 'none' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="500" color="neutral.charcoal">
                    Email
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    size="lg"
                    borderRadius="2px"
                    borderColor="gray.200"
                    _hover={{ borderColor: 'gray.300' }}
                    _focus={{ borderColor: 'brand.700', boxShadow: 'none' }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm" fontWeight="500" color="neutral.charcoal">
                    Company
                  </FormLabel>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company (optional)"
                    size="lg"
                    borderRadius="2px"
                    borderColor="gray.200"
                    _hover={{ borderColor: 'gray.300' }}
                    _focus={{ borderColor: 'brand.700', boxShadow: 'none' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="500" color="neutral.charcoal">
                    Message
                  </FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Products needed, volumes, delivery locations, timing..."
                    size="lg"
                    rows={5}
                    borderRadius="2px"
                    borderColor="gray.200"
                    _hover={{ borderColor: 'gray.300' }}
                    _focus={{ borderColor: 'brand.700', boxShadow: 'none' }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  w="100%"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                >
                  Send Message
                </Button>

                <Text fontSize="xs" color="neutral.stone" textAlign="center">
                  Or email us directly at sales@globalgateproduce.com
                </Text>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default ContactForm
