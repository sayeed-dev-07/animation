/* eslint-disable react-hooks/refs */
'use client'
import React, { useRef } from 'react';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import gsap, { clamp } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);




const Page = () => {
    const smotherRef = useRef<ScrollSmoother | null>(null)
    const { contextSafe } = useGSAP(() => {
        smotherRef.current = ScrollSmoother.create({
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
            smoothTouch: 0.1,
        })
        // smotherRef.current.effects('.w-24',{
        //     speed: 0.5,
        //     lag:(i)=> i * 0.2
        // })
        gsap.to('.w-24', {
            rotate: 360,
            scrollTrigger: {
                trigger: '.w-24',
                start: 'center center',
                markers: true,
                scrub: true,
            }
        })
        gsap.to('.box2', {
            rotate: 360,
            scrollTrigger: {
                trigger: '.box2',
                start: 'center center',
                markers: true,
                scrub: true,
                pin: '.special'
            }
        })


    })

    const handleClick = contextSafe((name: string) => {
        smotherRef.current?.scrollTo(name, true, 'top top')
    })

    return (
        <div>

            <div id='smooth-content'>
                <div className='flex items-center justify-center gap-x-6 font-semibold text-3xl p-6'>
                    <p className='cursor-pointer' onClick={() => handleClick('#home')}>Home</p>
                    <p className='cursor-pointer' onClick={() => handleClick('#about')}>About</p>
                    <p className='cursor-pointer' onClick={() => handleClick('#contact')}>COntact</p>
                </div>
                <div id='home' className='h-screen flex items-center justify-center gap-x-6 bg-[skyblue]'>
                    <div data-speed='clamp(0.9)' className='w-24 h-24 bg-slate-400 rounded-md'></div>
                    <div data-speed='clamp(1.2)' className='w-24 h-24 bg-slate-400 rounded-md'></div>
                    <div data-speed='clamp(0.7)' className='w-24 h-24 bg-slate-400 rounded-md'></div>

                </div>
                <div id='about' className='h-screen bg-[crimson] flex items-center justify-center gap-x-6'>
                    <div data-lag='clamp(1)' className='w-24 box2 h-24 bg-slate-400 rounded-md'></div>
                    <div data-lag='clamp(1.2)' className='w-24 box2 special h-24 bg-slate-400 rounded-md'></div>
                    <div data-lag='clamp(0.7)' className='w-24  box2 h-24 bg-slate-400 rounded-md'></div>
                </div>
                <div id='contact' className='h-screen bg-[orange] flex items-center justify-center gap-x-6'>
                    <div data-speed='clamp(1.2)' className='w-24 h-24 bg-slate-400 rounded-md'></div>
                    <div data-speed='clamp(1)' className='w-24 special h-24 bg-slate-400 rounded-md'></div>
                    <div data-speed='clamp(1)' className='w-24 h-24 bg-slate-400 rounded-md'></div>
                    



                

                </div>


            </div>

        </div>
    );
};

export default Page;