'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { Flip } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(Flip)

const data = [
  { url: 'https://i.pinimg.com/1200x/4b/23/53/4b23537f86f0f445fa99cd2a972b740b.jpg', name: 'Mountain' },
  { url: 'https://i.pinimg.com/1200x/90/4a/36/904a36330abaecc708b097b043fe3cd7.jpg', name: 'Ocean' },
  { url: 'https://i.pinimg.com/1200x/5d/9c/6e/5d9c6e21c1c16fd65114ac1b9a60a917.jpg', name: 'Desert' },
  { url: 'https://i.pinimg.com/1200x/57/e5/9a/57e59a4ae42122a78c5668d55f2366bb.jpg', name: 'Forest' },
  { url: 'https://i.pinimg.com/1200x/0e/41/79/0e41797f10c9530693874de8f67f3dd0.jpg', name: 'Canyon' },
  { url: 'https://i.pinimg.com/1200x/29/85/be/2985be2f675c68fa20c0f327cb6fbe20.jpg', name: 'City' },
]

// Fixed grid slots
const slots = [
  '1 / 1 / 5 / 5', // BIG
  '3 / 5 / 5 / 7',
  '1 / 5 / 3 / 7',
  '5 / 5 / 7 / 7',
  '5 / 3 / 7 / 5',
  '5 / 1 / 7 / 3',
]

export default function Page() {
  /**
   * order[cardIndex] = slotIndex
   * slotIndex 0 === BIG SLOT
   */
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5])
  const flipState = useRef<Flip.FlipState | null>(null)

  useGSAP(() => {
    if (!flipState.current) return

    Flip.from(flipState.current, {
      duration: 0.8,
      ease: 'power2.inOut',
      absolute: true,
      spin:true,
      onComplete: () => {
        flipState.current = null
      },
    })
  }, [order])

  const swapWithBig = (clickedCardIndex: number) => {
    const bigCardIndex = order.indexOf(0)
    if (clickedCardIndex === bigCardIndex) return

    // capture BEFORE layout change
    flipState.current = Flip.getState('.card')

    setOrder(prev => {
      const next = [...prev]
      ;[next[bigCardIndex], next[clickedCardIndex]] = [
        next[clickedCardIndex],
        next[bigCardIndex],
      ]
      return next
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="grid grid-cols-6 grid-rows-6 w-[800px] h-[800px] isolate">

        {data.map((item, cardIndex) => (
          <div
            key={cardIndex} data-flip-id={`${cardIndex}`}
            className="card relative cursor-pointer"
            style={{ gridArea: slots[order[cardIndex]] }}
            onClick={() => swapWithBig(cardIndex)}
          >
            <Image
              src={item.url}
              alt={item.name}
              fill
              className="object-cover rounded-lg"
              priority={order[cardIndex] === 0}
            />
          </div>
        ))}

      </div>
    </div>
  )
}
