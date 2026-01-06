'use client'
import { useEffect, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const items = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.from(items.current, {
      y: -100,
      rotate: 360,
      stagger: {
        each: 0.2,
        from: 'random'
      }
    })
  }, [])

  const box = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div ref={containerRef} className="min-h-screen bg-white w-full flex items-center justify-center  gap-5">
      {
        box.map((item, index) => (
          <div onClick={() => {
            gsap.to(
              items.current, {
              duration: 0.5,
              opacity: 0,
              y: -140,
              stagger: {
                from: index, 
                amount: 2 // spread the entire stagger out over 1 second
              },
              ease: "back.in",
              overwrite: "auto"

            })
          }} ref={(el) => { items.current[index] = el }} className="text-black px-12 py-12 rounded-md  bg-sky-400" key={index}>

          </div>
        ))
      }
    </div>
  );
}
