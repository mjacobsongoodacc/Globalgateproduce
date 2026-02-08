/**
 * ZavayaLogo Component
 * 
 * Uses the original logo PNG with mix-blend-mode: lighten
 * to show only the white text and hide the background.
 */

import { Image } from '@chakra-ui/react'
import zavayaLogo from '../assets/images/Zavayawhitelogo.png'

function ZavayaLogo({ 
  width = 'auto', 
  height = '64px', 
  className = '', 
  alt = 'Zavaya Logo',
  ...props 
}) {
  return (
    <Image
      src={zavayaLogo}
      alt={alt}
      width={width}
      height={height}
      className={className}
      objectFit="contain"
      mixBlendMode="lighten"
      {...props}
    />
  )
}

export default ZavayaLogo
