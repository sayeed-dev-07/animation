/* eslint-disable react-hooks/refs */
'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { relative } from 'path'

gsap.registerPlugin(Flip)

export default function SimpleFlipFit() {
    const smallRef = useRef<HTMLDivElement | null>(null)
    const bigRef = useRef<HTMLDivElement | null>(null)
    const { contextSafe } = useGSAP()
    const run = contextSafe(() => {
        if (!smallRef.current || !bigRef.current) return

        Flip.fit(smallRef.current, bigRef.current, {
            duration: 0.8,
            ease: 'power2.inOut',
            absolute: true,
            scale: true,
            rotate: 180,
        })
    }
    )

    return (
        <div style={{ padding: 40, display: 'flex', gap: 40 }}>

            {/* small box */}
            <div className='relative w-[200px] h-[200px]'>
                <div
                ref={smallRef}
                onClick={run}
                style={{
                    width: 100,
                    height: 100,
                    background: 'red',
                    cursor: 'pointer',
                }}
            />
            </div>

            {/* big target */}
            <div
                ref={bigRef}
                style={{
                    width: 400,
                    height: 300,
                    border: '2px dashed gray',
                    
                }}
            />
        </div>
    )
}
