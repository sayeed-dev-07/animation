
'use client'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Page = () => {
    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)


    useEffect(() => {
        const tl = gsap.timeline()
        tl.from(box1.current, { x: -600, duration: 1, rotate: 360 });
        tl.from(box2.current, { x: -600, duration: 1, rotate: 360 } );
        tl.from(box3.current, { x: -600, duration: 1, rotate: 360 },'+=50%');
    }, [])

    return (
        <div className='bg-white min-h-screen text-[#0e0e0e] flex items-center justify-center flex-col gap-y-8'>
            <div ref={box1} className='h-24 w-24 bg-[#4db9e3] rounded-md '></div>
            <div ref={box2} className='h-24 w-24 bg-[#4db9e3] rounded-md'></div>
            <div ref={box3} className='h-24 w-24 bg-[#4db9e3] rounded-md'></div>

        </div>
    );
};

export default Page;