'use client'
import React from 'react';
import { SplitText, ScrollTrigger, ScrollSmoother, gsap } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ReactLenis from 'lenis/react';
import Reusetext from '@/components/Reusetext';
gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother) 

const Page = () => {
    return (
        <ReactLenis root>
            <div className='min-h-screen px-[10%] text-3xl text-black bg-slate-200'>
                <div className='h-screen flex items-center justify-center'>
                    <Reusetext>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a incidunt sint debitis ea est in quo eius deleniti illum at, soluta ipsa saepe illo consequatur nihil recusandae molestiae quibusdam earum quod?</p>
                    </Reusetext>
            </div>
            <Reusetext>
                <p>hello World</p>
            </Reusetext>
            <div className='h-screen'>
                <Reusetext>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis non molestiae animi, dolorum quaerat, similique repellat dolore itaque eaque sapiente. Laudantium sequi libero doloribus quibusdam necessitatibus adipisci. Asperiores soluta in dolorum facilis ducimus sed laborum porro nam, quasi, animi odio veniam distinctio!</p>
                </Reusetext>
            </div>
            <div className='h-screen'>
                <Reusetext>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis non molestiae animi, dolorum quaerat, similique repellat dolore itaque eaque sapiente. Laudantium sequi libero doloribus quibusdam necessitatibus adipisci. Asperiores soluta in dolorum facilis ducimus sed laborum porro nam, quasi, animi odio veniam distinctio!</p>
                </Reusetext>
            </div>
            <div className='h-screen'>
                <Reusetext>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis non molestiae animi, dolorum quaerat, similique repellat dolore itaque eaque sapiente. Laudantium sequi libero doloribus quibusdam necessitatibus adipisci. Asperiores soluta in dolorum facilis ducimus sed laborum porro nam, quasi, animi odio veniam distinctio!</p>
                </Reusetext>
            </div>
            <div className='h-screen'>
                <Reusetext>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis non molestiae animi, dolorum quaerat, similique repellat dolore itaque eaque sapiente. Laudantium sequi libero doloribus quibusdam necessitatibus adipisci. Asperiores soluta in dolorum facilis ducimus sed laborum porro nam, quasi, animi odio veniam distinctio!</p>
                </Reusetext>
            </div>
            <div className='h-screen'>
                <Reusetext>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis non molestiae animi, dolorum quaerat, similique repellat dolore itaque eaque sapiente. Laudantium sequi libero doloribus quibusdam necessitatibus adipisci. Asperiores soluta in dolorum facilis ducimus sed laborum porro nam, quasi, animi odio veniam distinctio!</p>
                </Reusetext>
            </div>
            <div className='h-screen'>
                <Reusetext>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, omnis non molestiae animi, dolorum quaerat, similique repellat dolore itaque eaque sapiente. Laudantium sequi libero doloribus quibusdam necessitatibus adipisci. Asperiores soluta in dolorum facilis ducimus sed laborum porro nam, quasi, animi odio veniam distinctio!</p>
                </Reusetext>
            </div>
        </div>
        </ReactLenis>
    );
};

export default Page;