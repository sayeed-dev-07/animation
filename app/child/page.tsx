/* eslint-disable react-hooks/refs */
'use client'

import Box from '@/components/Box'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Page = () => {
  const container = useRef<HTMLDivElement | null>(null)

    useGSAP(()=>{
       gsap.timeline()
        .to('.box', {x: -100, rotate: 360, repeat: -1, yoyo:true, repeatDelay:0.5}, 0.5)
    }, {scope:container})
  

  return (
    <div
      ref={container}
      className="bg-slate-400 flex items-center gap-y-12 justify-center min-h-screen w-full flex-col"
    >
      {/* <Text tl={tl.current} index={0} x={-200}>
        <p>Hii how are u</p>
      </Text> */}

      <Box/>
    </div>
  )
}

export default Page
