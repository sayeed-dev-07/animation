'use client'
import { useEffect, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const items = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(()=>{
    

      gsap.to(
              '.box', {
              duration: 1,
              y: 140,
              stagger: {
                amount: 1.5 
              },
              ease: "back.in",
              overwrite: "auto"

            })
  },{scope: containerRef})

  const box = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div ref={containerRef} className="min-h-screen bg-white w-full flex items-center justify-center  gap-5">
      {
        box.map((item, index) => (
          <div onClick={()=>{
            gsap.to(
              '.box', {
              duration: 0.5,
              opacity: 0,
              y: -140,
              stagger: {
                from: index, 
                amount: 1.5 // spread the entire stagger out over 1 second
              },
              ease: "back.in",
              overwrite: "auto"

            })
          }}  className="text-black px-12 py-12 rounded-md box bg-sky-400" key={index}>
          </div>
        ))
      }
    </div>
  );
}
