'use client';

import { useGSAP } from '@gsap/react';
import { CustomEase } from 'gsap/CustomEase';
import gsap from 'gsap';

gsap.registerPlugin(CustomEase);
CustomEase.create('hop', '0.9, 0, 0.1, 1');

export function useRevealer() {
  useGSAP(() => {
    const revealTl = gsap.timeline();
    revealTl.to('.revealer', {
      transformOrigin: 'top',
	  scaleY: 1,
      duration: 1,
	  delay: 1,
      ease: 'hop',
    });
    revealTl.to('.revealer', {
      transformOrigin: 'bottom',
      scaleY: 0,
      duration: 1,
      ease: 'hop',
    });
  });
}
