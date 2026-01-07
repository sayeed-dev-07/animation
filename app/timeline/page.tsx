'use client'
import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Page = () => {
    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    

    useLayoutEffect(() => {
        

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true, defaults: { duration: 1.5, rotate: 360 } })
        tl.from(box1.current, {});
        tl.from(box2.current, {}, '-=20%');
        tl.from(box3.current, {}, '-=20%');

       

    }, [])

    return (
        <div className='bg-white min-h-screen text-[#0e0e0e] flex items-center justify-center flex-col gap-y-8'>
            <div ref={box1} className='h-24 w-24 bg-[#4db9e3] rounded-md '></div>
            <div ref={box2} className='h-24 w-24 bg-[#4db9e3] rounded-md'></div>
            <div ref={box3} className='h-24 w-24 bg-[#4db9e3] rounded-md'></div>
            <div className='m-12'>
                
            </div>
        </div>
    );
};

export default Page;