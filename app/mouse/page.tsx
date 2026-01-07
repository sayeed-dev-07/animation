/* eslint-disable react-hooks/refs */
'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Page = () => {
  const container = useRef<HTMLDivElement | null>(null)

  const xTo = useRef<((value: number) => gsap.core.Tween) | null>(null)
  const yTo = useRef<((value: number) => gsap.core.Tween) | null>(null)

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo('.box', 'x', {
        duration: 0.4,
        ease: 'power3.out',
      })

      yTo.current = gsap.quickTo('.box', 'y', {
        duration: 0.4,
        ease: 'power3.out',
      })
    },
    { scope: container }
  )

  const moveShape = contextSafe(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      xTo.current?.(x)
      yTo.current?.(y)
    }
  )

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div
        ref={container}
        onMouseMove={moveShape}
        className="h-[50vh] w-[80vw] bg-slate-600 rounded-md overflow-hidden relative"
      >
        <div className="box w-24 -translate-x-[50%] -translate-y-[50%] h-24 rounded-full bg-[crimson] absolute" />
      </div>
    </div>
  )
}

export default Page
