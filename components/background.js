import { useState, useRef, useEffect } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

export default function Background({ children }) {
  const [vantaEffect, setVantaEffect] = useState(0)

  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE,
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 4.0,
          backgroundColor: '#D2691E',
          spacing: 18.0,
          showDots: false
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return <div ref={vantaRef}>{children}</div>
}
