'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ScrollGsapDemo() {

    useGSAP(() => {
        // ScrollSmoother.create({
        //     content: "#smooth-content",
        //     wrapper: "#smooth-wrapper",
        //     smooth: 1.5,
        //     effects: true
        // })
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
            .from('.card-1', { xPercent: -100, duration: 1.6 })
            .addLabel('card2')
            .from('.card-2', { xPercent: 100 })
            .addLabel('card3')
            .from('.card-3', { yPercent: -100 })
            .addLabel('end');
    });


    return (
        <div id='smooth-wrapper'>
            <div id='smooth-content'>
                <div className="first-div bg-slate-400 h-screen" />

            <div className="wrapper relative flex h-screen items-center justify-center overflow-hidden bg-blue-600 text-4xl text-black">
                first

                <div className="card-1 absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-[crimson]">
                    1
                </div>

                <div className="card-2 absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-[skyblue]">
                    2
                </div>

                <div className="card-3 absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-[#ffa200d2]">
                    3
                </div>
            </div>
            </div>
        </div>

    );
}
