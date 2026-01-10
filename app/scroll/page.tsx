'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollGsapDemo() {

  useGSAP(
    () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.box',
          start: 'bottom 80%', // element bottom hits viewport bottom
          end: 'top 20%',
          pin: '.ghost',
          scrub: true,
          markers: true,
        }
      })
        .to('.box', { x: 720, duration: 3 })
        .to('.box', { rotate: 360, duration: 4 })
        .to('.box', { x: '+=720', duration: 3 })
    },

  );

  return (
    <div className='mx-auto container'>
      <div className='h-screen bg-amber-300 second'></div>
      <div className='h-screen third bg-slate-500 relative'>
        <div className='box h-24 w-24  bg-[crimson] rounded-md'>
          
        </div>
        <div className='ghost top-0 left-0 absolute h-24 w-24 bg-[cyan] rounded-md'></div>
      </div>
      <div className='h-screen bg-sky-500'></div>
    </div>
  );
}
