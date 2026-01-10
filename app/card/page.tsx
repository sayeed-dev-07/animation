'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollGsapDemo() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.wrapper',
                start: 'top top',
                end: '+=300%',
                pin: true,
                scrub: 1,
                markers: true,
                snap: {
                    snapTo: 'labels',
                    duration: { min: 0.2, max: 0.6 },
                    delay: 0.1,
                    ease: 'power1.inOut',
                },
            },
        });

        tl.addLabel('card1')
            .from('.card-1', { xPercent: -100, duration:1.6 })
            .addLabel('card2')
            .from('.card-2', { xPercent: 100 })
            .addLabel('card3')
            .from('.card-3', { yPercent: -100 })
            .addLabel('end');
    });


    return (
        <div> <div className='first-div bg-slate-400 h-screen'></div> <div className='wrapper flex items-center justify-center text-4xl text-black overflow-hidden bg-blue-600 relative h-screen'>first <div className='card-1 flex items-center justify-center h-screen bg-[crimson] w-full absolute top-0 left-0'>1</div> <div className='card-2 flex items-center justify-center h-screen bg-[skyblue] w-full absolute top-0 left-0'>2</div> <div className='card-3 flex items-center justify-center h-screen bg-[#ffa200d2] w-full absolute top-0 left-0'>3</div> </div> </div>
    );
}
