/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);



const Page = () => {
    const [endX, setEndX] = useState(0)
    const randomX = gsap.utils.random(-200, 200,1, true)
    const container = useRef<HTMLDivElement | null>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)
    useGSAP(()=>{
        gsap.from('p',{x:-400, delay:0.3, ease:'power3.Out'})
    })
    const { contextSafe } = useGSAP(() => {
        
        tl.current = gsap.timeline({defaults:{overwrite:'auto'}})
        .to('.box',{rotate: 360})
        .to('.circle',{ x : endX})


    },{dependencies:[endX]})

    const handleCLick = contextSafe(()=>{
        setEndX(randomX())
        
    })

    return (
        <div ref={container} className='bg-slate-600 text-black min-h-screen w-full flex items-center justify-center flex-col gap-y-6'>
            <p className='text-2xl text-white'>Hi</p>
            <button onClick={handleCLick} className='px-6 py-3 text-2xl cursor-pointer rounded-md bg-black text-white'>Start</button>
            <div className='flex flex-col gap-y-6'>
                <div className="box w-24 h-24 bg-[crimson] rounded-md"></div>
                <div className="circle w-24 h-24 bg-[skyblue] rounded-full">{endX}</div>
            </div>
        </div>
    );
};

export default Page;