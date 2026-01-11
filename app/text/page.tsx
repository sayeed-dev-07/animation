/* eslint-disable react-hooks/refs */
/* eslint-disable react-hooks/immutability */
'use client'
import React from 'react';
import { SplitText, ScrollSmoother, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';


gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger)
const Page = () => {
    const splitRef = useRef<SplitText | null>(null)
    const { contextSafe } = useGSAP(() => {
        const smoothScroll = ScrollSmoother.create({
            content: "#smooth-content",
            wrapper: "#smooth-wrapper",
            smooth: 1.2,
            effects: true
        })
        splitRef.current = SplitText.create('#button', {
            type: 'chars, lines, words',
            mask: 'lines',

        })

        const splitText = SplitText.create('#split', {
            type: 'lines, words',
            mask: 'lines',
        })
        gsap.from(splitText.words, {
            duration: 1.5,
            y: 100,       // animate from 100px below
            autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
            stagger: 0.05, // 0.05 seconds between each
            scrollTrigger: {
                trigger: '#split',
                start: 'top 80%',
                end: 'end 40%',
                // toggleActions: 'play pause resume reset',
                scrub: 1,
            }
        });


    })

    const hover = contextSafe(() => {
        if (!splitRef.current?.words) {
            return;
        }
        gsap.fromTo(
            splitRef.current.words,
            { y: 100, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                stagger: 0.05,
                duration: 0.3,
                ease: 'power1'
            }
        )

    })
    const hover2 = contextSafe(() => {
        if (!splitRef.current?.words) {
            return;
        }
        gsap.fromTo(
            splitRef.current.chars,
            { y: -100, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                stagger: {
                    from:'end',
                    amount:0.3
                },
                ease: 'power3.out'
            }
        )

    })
    return (
        <div id='smooth-wrapper'>
            <div id='smooth-content'>
                <div className='min-h-screen flex items-center justify-center bg-[skyblue]'>
                    <p id='button' onMouseEnter={hover} className=' px-6 py-3 text-3xl cursor-pointer rounded-md bg-black text-white'>Hover ME</p>
                </div>

                <div className='min-h-screen bg-slate-200 flex items-center justify-center text-black text-4xl'>
                    <p id='split' className='max-w-200  w-full px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda ut obcaecati voluptatibus vel porro alias dolore. Recusandae totam consectetur fugiat at! Porro!</p>
                </div>
                <div className='min-h-screen bg-[crimson]'>

                </div>
            </div>
        </div>
    );
};

export default Page;