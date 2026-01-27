/**
 * useReveal Hook
 * 
 * One-time scroll-reveal animation using IntersectionObserver.
 * Elements fade in when entering viewport and stay visible forever.
 * Respects prefers-reduced-motion for accessibility.
 * 
 * Usage:
 *   const ref = useReveal()
 *   <Box ref={ref} className="reveal">...</Box>
 * 
 * For images (slower reveal, triggers deeper in viewport):
 *   const ref = useReveal({ variant: 'image' })
 *   <Box ref={ref} className="reveal reveal--image">...</Box>
 * 
 * For staggered items:
 *   const setRef = useStaggerReveal(items.length, { staggerDelay: 100 })
 *   items.map((item, i) => <Box ref={setRef(i)} className="reveal">...</Box>)
 */

import { useRef, useEffect, useCallback } from 'react'

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}

/**
 * Preset configurations for different reveal variants
 */
const VARIANTS = {
  default: {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
  },
  image: {
    threshold: 0.15,
    rootMargin: '0px 0px -25% 0px', // Triggers later (deeper in viewport)
  },
}

/**
 * Hook to reveal elements on scroll (one-time only)
 * @param {Object} options
 * @param {string} options.variant - Preset variant ('default' | 'image')
 * @param {number} options.delay - Delay in ms before reveal (for stagger effect)
 * @param {number} options.threshold - Intersection threshold (0-1), overrides variant
 * @param {string} options.rootMargin - Root margin for observer, overrides variant
 * @returns {React.RefObject} Ref to attach to the element
 */
export function useReveal({ 
  variant = 'default',
  delay = 0, 
  threshold,
  rootMargin,
} = {}) {
  const ref = useRef(null)
  const timeoutRef = useRef(null)
  const isRevealedRef = useRef(false)

  // Get variant config, allow overrides
  const config = VARIANTS[variant] || VARIANTS.default
  const finalThreshold = threshold ?? config.threshold
  const finalRootMargin = rootMargin ?? config.rootMargin

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // If user prefers reduced motion, reveal immediately without animation
    if (prefersReducedMotion()) {
      element.setAttribute('data-revealed', 'true')
      isRevealedRef.current = true
      return
    }

    // Add variant class for CSS styling
    if (variant === 'image') {
      element.classList.add('reveal--image')
    }

    // Set initial delay as CSS custom property for stagger
    if (delay > 0) {
      element.style.setProperty('--reveal-delay', `${delay}ms`)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Clear any pending timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
          }

          // Once revealed, stay revealed forever
          if (isRevealedRef.current) return

          // Reveal when element enters viewport
          if (entry.isIntersecting) {
            if (delay > 0) {
              timeoutRef.current = setTimeout(() => {
                entry.target.setAttribute('data-revealed', 'true')
                isRevealedRef.current = true
              }, delay)
            } else {
              entry.target.setAttribute('data-revealed', 'true')
              isRevealedRef.current = true
            }

            // Unobserve since we only reveal once
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: finalThreshold,
        rootMargin: finalRootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      observer.disconnect()
    }
  }, [delay, finalThreshold, finalRootMargin, variant])

  return ref
}

/**
 * Hook for staggered reveal of multiple items (one-time only)
 * Returns a function to create refs for each item
 * 
 * Usage:
 *   const setRef = useStaggerReveal(items.length, { staggerDelay: 100 })
 *   items.map((item, i) => <Box ref={setRef(i)} className="reveal">...</Box>)
 * 
 * @param {number} count - Number of items
 * @param {Object} options
 * @param {string} options.variant - Preset variant ('default' | 'image')
 * @param {number} options.staggerDelay - Delay between each item (default 100ms)
 * @param {number} options.threshold - Intersection threshold
 * @param {string} options.rootMargin - Root margin for observer
 * @returns {Function} Function to set ref for each index
 */
export function useStaggerReveal(count, { 
  variant = 'default',
  staggerDelay = 100, 
  threshold,
  rootMargin,
} = {}) {
  const refs = useRef([])
  const timeouts = useRef({})
  const revealedState = useRef({})

  // Get variant config, allow overrides
  const config = VARIANTS[variant] || VARIANTS.default
  const finalThreshold = threshold ?? config.threshold
  const finalRootMargin = rootMargin ?? config.rootMargin

  useEffect(() => {
    const elements = refs.current.filter(Boolean)
    if (elements.length === 0) return

    // If user prefers reduced motion, reveal immediately
    if (prefersReducedMotion()) {
      elements.forEach((el, index) => {
        el.setAttribute('data-revealed', 'true')
        revealedState.current[index] = true
      })
      return
    }

    // Add variant class for CSS styling
    if (variant === 'image') {
      elements.forEach(el => el.classList.add('reveal--image'))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elements.indexOf(entry.target)
          if (index === -1) return

          // Clear any pending timeout for this element
          if (timeouts.current[index]) {
            clearTimeout(timeouts.current[index])
            timeouts.current[index] = null
          }

          // Once revealed, stay revealed forever
          if (revealedState.current[index]) return

          // Reveal when element enters viewport
          if (entry.isIntersecting) {
            const delay = index * staggerDelay

            timeouts.current[index] = setTimeout(() => {
              entry.target.setAttribute('data-revealed', 'true')
              revealedState.current[index] = true
            }, delay)

            // Unobserve since we only reveal once
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: finalThreshold,
        rootMargin: finalRootMargin,
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      // Clean up all timeouts
      Object.values(timeouts.current).forEach((timeout) => {
        if (timeout) clearTimeout(timeout)
      })
      observer.disconnect()
    }
  }, [count, staggerDelay, finalThreshold, finalRootMargin, variant])

  // Return a function to set refs
  const setRef = useCallback((index) => (el) => {
    refs.current[index] = el
  }, [])

  return setRef
}

export default useReveal
