import React from 'react'
import { motion } from 'framer-motion'

const AnimatedCheck = ({ size = 48, strokeWidth = 2.5, color = "currentColor" }) => {
  const checkVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "tween",
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1
        },
        opacity: {
          duration: 0.05,
          delay: 0.1
        }
      }
    }
  }

  const circleVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.3
      }
    }
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      {/* Círculo minimalista */}
      <motion.circle
        cx="12"
        cy="12"
        r="10.5"
        stroke={color}
        strokeWidth={1.5}
        fill="none"
        variants={circleVariants}
      />
      
      {/* Check mark minimalista */}
      <motion.path
        d="M8.5 12l2.5 2.5L15.5 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={checkVariants}
      />
    </motion.svg>
  )
}

export default AnimatedCheck
