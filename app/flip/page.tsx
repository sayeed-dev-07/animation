/* eslint-disable react-hooks/refs */
'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { Flip } from 'gsap/all';


gsap.registerPlugin(Flip);

interface itemProp {
    id: number,
    color: string
}

const Page = () => {
    const [items, setItems] = useState([{ id: 1, color: 'crimson' }, { id: 2, color: 'teal' }, { id: 3, color: 'orange' }, { id: 4, color: 'purple' }, { id: 5, color: 'green' }, { id: 6, color: 'skyblue' }]);
    const FlipState = useRef<Flip.FlipState | null>(null)

    useGSAP(() => {
        if (!FlipState.current) return

        Flip.from(FlipState.current, {
            absolute: true, // Crucial for flex/grid layouts
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
                FlipState.current = null; // Clean up
            }
        })

    }, { dependencies: [items] })



    const removeItem = (value: { id: number, color: string }) => {

        const newItems = items.filter((item: itemProp) => item.id !== value.id)
        setItems(newItems)
    }

    const { contextSafe } = useGSAP()

    const handleDelete = contextSafe((item: itemProp, targetDom: HTMLDivElement) => {
        FlipState.current = Flip.getState('.box')
        gsap.to(targetDom, {
            opacity: 0,
            y: -180,
            duration: .5,
            ease: 'power1.out',
            onComplete: () => removeItem(item)
        })
    })

    return (
        <div className='w-full min-h-screen flex items-center justify-center gap-3 bg-slate-600'>
            {
                items.map((item: itemProp) => {
                    return <div onClick={(e) => handleDelete(item, e.currentTarget)} style={{ backgroundColor: item.color }} key={item.id} className={`h-24 box w-24  rounded-md `} />
                })
            }
        </div>
    );
};

export default Page;