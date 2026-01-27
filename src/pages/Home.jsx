/**
 * Home Page
 * 
 * Main landing page - clean sections without problematic images.
 */

import { Box } from '@chakra-ui/react'

// Import all sections
import Header from '../components/Header'
import Hero from '../components/Hero'
import Capabilities from '../components/Capabilities'
import ProductFocus from '../components/ProductFocus'
import Quality from '../components/Quality'
import ContactForm from '../components/ContactForm'
import Footer, { Tagline } from '../components/Footer'

function Home() {
  return (
    <Box>
      {/* Fixed header navigation */}
      <Header />
      
      {/* Main content sections */}
      <main>
        {/* Hero: Main headline and CTA */}
        <Hero />
        
        {/* Capabilities: What we do */}
        <Capabilities />
        
        {/* Products: Avocados, dragon fruit with specs */}
        <ProductFocus />
        
        {/* Quality: Certifications */}
        <Quality />
        
        {/* Contact: Form and info */}
        <ContactForm />
      </main>
      
      {/* Tagline banner */}
      <Tagline />
      
      {/* Footer */}
      <Footer />
    </Box>
  )
}

export default Home
