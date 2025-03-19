import { motion, usePresence } from 'framer-motion'
import React, { useLayoutEffect } from 'react'
import './bubble.css'

const transition = {
  type: 'spring',
  stiffness: 500,
  damping: 50,
  default: {
    duration: 0.4
  }
}

interface BubbleProps {
  id: number
  dy: number
  children: React.ReactNode
  fillColour: string
  strokeColour: string
  backgroundColor: string
}

const Bubble = ({
  id,
  children,
  dy,
  fillColour,
  strokeColour,
  backgroundColor
}: BubbleProps) => {
  const [isPresent, safeToRemove] = usePresence()

  const animations = {
    layout: true,
    initial: 'out',
    animate: 'in',
    variants: {
      in: { opacity: 1, translateY: 0 },
      out: { opacity: 1, translateY: `${dy}px` }
    },
    exit: { opacity: 0, translateY: 0 },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition
  }

  useLayoutEffect(() => {
    const bubbleContent = document.querySelector('.bubble-content')
    if (bubbleContent) {
      const styleSheet = document.styleSheets[0] as CSSStyleSheet
      styleSheet.insertRule(
        `
        .bubble-content::after {
          background-color: ${backgroundColor} !important;
        }
      `,
        styleSheet.cssRules.length
      )
    }
  }, [backgroundColor])

  return (
    <motion.div key={id} className="bubble" {...animations}>
      <div style={{ position: 'static' }}>
        <style>{`
        .bubble:last-child .bubble-content:after,
        .bubble:nth-last-child(2) .bubble-content:after {
          background: ${backgroundColor} !important;
        }
        

        
        `}</style>

        <div
          className="bubble-content"
          style={{
            backgroundColor: fillColour,
            color: strokeColour
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export default Bubble
