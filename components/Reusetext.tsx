/* eslint-disable react-hooks/refs */
'use client';

import React, { ReactElement, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText, ScrollTrigger);

type Props = {
  children: ReactElement<
    React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>
  >;
  delay?: number;
};

const ReuseText = ({ children, delay = 0 }: Props) => {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const split = new SplitText(ref.current, {
        type: 'lines',
        mask:'lines',
        linesClass: 'line',
      });

      gsap.from(split.lines, {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.1,
        delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          once: true,
        },
      });

      // cleanup handled by GSAP context
      return () => {
        split.revert();
      };
    },
    { scope: ref }
  );

  return React.cloneElement(children, { ref:ref });
};

export default ReuseText;
