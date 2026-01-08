/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { ReactNode, useState } from 'react';
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);

interface prop {
    children?: React.ReactNode,
    timeline: gsap.core.Timeline | null,
    index: number,
    rotation?: number
}
const Page = () => {


    function Box({ children, timeline, index, rotation }: prop) {
        const el = useRef<HTMLDivElement | null>(null)
        useGSAP(() => {
            (timeline && timeline.to(el.current, {
                x: 100,
                rotate: rotation
            }, 0.5 * index))
        }, { dependencies: [timeline, index, rotation] })



        return <div ref={el} className='h-24 w-24 rounded-md bg-[skyblue]'>{children}</div>
    }
    function Circle({ children=null, timeline, index }: prop) {

        const el = useRef<HTMLDivElement | null>(null)

        useGSAP(()=>{
            timeline && timeline.to(el.current, {
                x:-200
            }, 0.5 * index) 
        },{ dependencies: [timeline, index] })

        return <div ref={el} className='h-24 w-24 rounded-full bg-[crimson] flex items-center justify-center'>{children}</div>
    }


    const [tl, setTl] = useState<gsap.core.Timeline | null>(null)
    const {contextSafe} = useGSAP(() => {
        const timeLIne = gsap.timeline({delay: 1})
        setTl(timeLIne)
    })
    const toggle = contextSafe(()=>{
        tl?.reversed(!tl.reversed())
    })
    return (
        <div className='bg-slate-600 h-screen flex items-center justify-center flex-col gap-y-12'>
            <button onClick={toggle}>Toggle</button>
            <Box index={0} rotation={360} timeline={tl} />
            <Circle  index={0} rotation={360} timeline={tl}>
                <p>hi</p>
            </Circle>

        </div>
    );
};

export default Page;