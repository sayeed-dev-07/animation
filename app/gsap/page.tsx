/* eslint-disable react-hooks/refs */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Page = () => {
    // We use one main ref to "scope" all our animations
    const container = useRef<HTMLDivElement>(null);
    const onLoad = useRef<HTMLDivElement>(null);
    const hoverTl = useRef<gsap.core.Timeline | null>(null);
    
    const { contextSafe } = useGSAP(() => {
        // 1. On-load animation
        gsap.to(onLoad.current, {
            rotate: 360,
            repeat: -1,
            repeatDelay: 0.5,
            duration: 1
        });

        // 2. Set the starting position of the hover element (removes need for Tailwind translate class)
        gsap.set('.hover-part', { xPercent: -101 });

        // 3. Setup the timeline (Scoped to 'container')
        hoverTl.current = gsap.timeline({ paused: true })
            .to('.hover-part', {
                xPercent: 0,
                duration: 0.4,
                ease: "power2.out"
            });

    }, { scope: container }); // All selectors inside stay inside this component

    const handleClick = contextSafe(() => {
        gsap.to('.clickbox', {
            rotate: "+=360",
            x: "+=100",
            duration: 1,
            ease: "power2.out",
            overwrite: "auto",
        });
    });

    // Control the timescale specifically for each action
    const handleMouseEnter = contextSafe(() => {
        hoverTl.current?.timeScale(1).play();
    });
    
    const handleMouseLeave = contextSafe(() => {
        hoverTl.current?.timeScale(2).reverse();
    });

    return (
        <div ref={container} className='text-white overflow-hidden min-h-screen w-full flex items-center justify-center bg-slate-600 flex-col gap-y-12'>
            {/* Box 1: On Load */}
            <div ref={onLoad} className='w-24 h-24 bg-[crimson] rounded-md'></div>
            
            {/* Box 2: On Click */}
            <div onClick={handleClick} className='w-24 h-24 clickbox bg-[skyblue] rounded-md cursor-pointer'></div>
            
            {/* Box 3: Hover Interaction */}
            <div 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                className='h-12 w-24 flex items-center justify-center text-2xl cursor-pointer border-2 border-white relative overflow-hidden rounded-md bg-[#0e0e0e]'
            >
                {/* Removed Tailwind -translate-x-30; handled by gsap.set now */}
                <div className='h-12 hover-part w-full absolute bg-[#cf0c0c] z-0'></div>
                <p className='text-white z-10 pointer-events-none'>hello</p>
            </div>
        </div>
    );
};

export default Page;