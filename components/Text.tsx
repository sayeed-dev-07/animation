'use client'

import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

export interface ChildProp {
  tl?: gsap.core.Timeline | null
  children?: React.ReactNode
  x: number
  rotation?: number
  index: number
}

const Text = ({ tl, x, children, index }: ChildProp) => {
  const el = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (!tl || !el.current) return

    tl.to(
      el.current,
      {
        x
      },
      index * 0.5
    )
  }, [])

  return (
    <div ref={el} className="flex text-2xl font-semibold items-center justify-center">
      {children}
    </div>
  )
}

export default Text
