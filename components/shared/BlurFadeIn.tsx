"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface BlurFadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "left" | "none"
  className?: string
  once?: boolean
}

export default function BlurFadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
  once = true,
}: BlurFadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  const initial = {
    opacity: 0,
    y: direction === "up" ? 20 : 0,
    x: direction === "left" ? -20 : 0,
    filter: "blur(4px)",
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" }
          : initial
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
