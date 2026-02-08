/**
 * App Component
 * 
 * Main application with React Router for multi-page navigation.
 */

import { useEffect } from 'react'
import { Routes, Route, useParams, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Certifications from './pages/Certifications'

// Wrapper component for ProductDetail to pass slug
function ProductDetailWrapper() {
  const { slug } = useParams()
  return <ProductDetail slug={slug} />
}

// Scroll to top on route change, or to hash target if present
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait a tick for the page to render, then scroll to the element
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductDetailWrapper />} />
      <Route path="/certifications" element={<Certifications />} />
    </Routes>
    </>
  )
}

export default App
