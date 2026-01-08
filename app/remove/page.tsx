'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react';

interface itemProp {
    id: number,
    color: string
}

const Page = () => {


    const [items, setItems] = useState([{ id: 1, color: 'crimson' }, { id: 2, color: 'teal' }, { id: 3, color: 'orange' }, { id: 4, color: 'purple' }, { id: 5, color: 'green' }, { id: 6, color: 'skyblue' }]);

    const removeItem = (value: { id: number, color: string }) => {
        const newItems = items.filter((item:itemProp) => item.id !== value.id)
        setItems(newItems)
    }

    const { contextSafe } = useGSAP()

    const handleDelete = contextSafe((item: itemProp, targetDom: HTMLDivElement) => {
        gsap.to(targetDom, {
            opacity: 0,
            y: -30,
            onComplete: () => removeItem(item)
        })
    })

    return (
        <div className='w-full min-h-screen flex items-center justify-center gap-3 bg-slate-600'>
            {
                items.map((item: itemProp) => {
                    return <div onClick={(e) => handleDelete(item, e.currentTarget)} style={{ backgroundColor: item.color }} key={item.id} className={`h-24 w-24  rounded-md `} />
                })
            }
        </div>
    );
};

export default Page;