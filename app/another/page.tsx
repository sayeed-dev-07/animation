'use client'

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

export default function Page() {
  useGSAP(() => {
    const cards = gsap.utils.toArray('.card') as HTMLDivElement[]
    let bigCard = cards.find(c => c.dataset.grid === 'img-0')!

    const swap = (clicked: HTMLDivElement) => {
      if (clicked === bigCard) return

      // 1) capture BEFORE
      const state = Flip.getState(cards)

      // 2) swap grid slots
      const tmp = bigCard.dataset.grid!
      bigCard.dataset.grid = clicked.dataset.grid!
      clicked.dataset.grid = tmp

      // 3) update reference
      bigCard = clicked

      // 4) animate
      Flip.from(state, {
        duration: 0.8,
        ease: 'power2.inOut',
        absolute: true,
      })
    }

    cards.forEach(card => {
      card.addEventListener('click', () => swap(card))
    })

    return () => {
      cards.forEach(card => {
        card.replaceWith(card.cloneNode(true))
      })
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <div className="grid grid-cols-6 grid-rows-6 w-[800px] h-[800px] isolate">
        {data.map((item, i) => (
          <div
            key={i}
            className="card relative cursor-pointer"
            data-grid={`img-${i}`}
          >
            <Image
              src={item.url}
              alt={item.name}
              fill
              className="object-cover rounded-lg"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
