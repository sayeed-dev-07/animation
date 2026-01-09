/* eslint-disable react-hooks/refs */
'use client'
import React, { useRef, useState } from 'react';
import { Flip } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(Flip);
const Page = () => {
    const flipRef = useRef<Flip.FlipState | null>(null)
    const [isRow, setIsRow] = useState<boolean>(true)
    const { contextSafe } = useGSAP(() => {
        if (!flipRef.current) return
        Flip.from(flipRef.current, {
            absolute: true,
            ease: 'power2.inOut',
            nested: true,
            duration:1,
            onComplete: () => { flipRef.current = null }
        })
    }, { dependencies: [isRow] })


    const handleCLick = contextSafe(() => {
        flipRef.current = Flip.getState(['.box', '.box-container', '.button'],{props: 'backgroundColor, color',})
        setIsRow(!isRow)
    })

    return (
        <div className='min-h-screen bg-slate-600 text-black p-6 flex items-center justify-center flex-col gap-y-12 text-2xl'>
            <button onClick={handleCLick} className='px-6 py-1.5 border-2  rounded-md bg-white cursor-pointer button'>Toggle</button>
            <div  className={`box-container border-8 p-7 flex ${isRow ? 'flex-row ' : 'flex-col '} items-center  justify-center gap-4`}>
                <div className={`box p-6 border-2 w-full } bg-slate-400`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis sint officiis? Vel deleniti temporibus eos excepturi laborum consectetur quaerat non, debitis veniam.</p>
                </div>
                <div className="box p-6 border-2 w-full bg-slate-400">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis sint officiis? Vel deleniti temporibus eos excepturi laborum consectetur quaerat non, debitis veniam.</p>
                </div>
                <div className="box w-full p-6 border-2 bg-slate-400">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis sint officiis? Vel deleniti temporibus eos excepturi laborum consectetur quaerat non, debitis veniam.</p>
                </div>
                <div className="box w-full p-6 border-2 bg-slate-400">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis sint officiis? Vel deleniti temporibus eos excepturi laborum consectetur quaerat non, debitis veniam.</p>
                </div>
                <div className="box w-full p-6 border-2 bg-slate-400">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis sint officiis? Vel deleniti temporibus eos excepturi laborum consectetur quaerat non, debitis veniam.</p>
                </div>
            </div>
        </div>
    );
};

export default Page;