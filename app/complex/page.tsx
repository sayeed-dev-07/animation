'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react';
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);




const Page = () => {
    const el = useRef<HTMLDivElement | null>(null)

    function box() {

        return <div ref={el} className='h-24 w-24 rounded-md bg-[skyblue]'></div>
    }
    function circle() {
        return <div ref={el} className='h-24 w-24 rounded-full bg-[crimson]'></div>
    }


    return (
        <div className='bg-slate-600 h-screen flex items-center justify-center flex-col gap-y-12'>


        </div>
    );
};

export default Page;