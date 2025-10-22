'use client';
import React from 'react';
import { LenisProvider } from '../lenis-provider';
import Revealer from '@/components/revealer';
import { useRevealer } from '@/hooks/useRevealer';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/imgs/img-7.png',
    alt: 'Image 7',
    className: 'absolute top-[34%] left-[5%]',
    size: '4',
  },
  {
    src: '/imgs/img-8.png',
    alt: 'Image 8',
    className: 'absolute top-[80%] left-[15%]',
    size: '4',
  },
  {
    src: '/imgs/img-9.png',
    alt: 'Image 9',
    className: 'absolute top-[0] left-[33%]',
    size: '4',
  },
  {
    src: '/imgs/img-13.png',
    alt: 'Image 9',
    className: 'absolute top-[85%] left-[53%]',
    size: '4',
  },
  {
    src: '/imgs/img-10.png',
    alt: 'Image 10',
    className: 'absolute top-[5%] left-[5%]',
    size: '4',
  },
  {
    src: '/imgs/img-1.png',
    alt: 'Image 1',
    className: 'absolute top-[5%] left-[50%]',
    size: '8',
  },
  {
    src: '/imgs/img-3.png',
    alt: 'Image 3',
    className: 'absolute top-[14%] left-[86%]',
    size: '8',
  },
  {
    src: '/imgs/img-6.png',
    alt: 'Image 6',
    className: 'absolute bottom-[15%] right-[10%]',
    size: '8',
  },
  {
    src: '/imgs/img-5.png',
    alt: 'Image 5',
    className: 'absolute bottom-[10%] left-[65%]',
    size: '10',
  },
  {
    src: '/imgs/img-2.png',
    alt: 'Image 2',
    className: 'absolute top-[15%] left-[25%]',
    size: '12',
  },
  {
    src: '/imgs/img-4.png',
    alt: 'Image 4',
    className: 'absolute top-[32%] left-[75%]',
    size: '12',
  },
  {
    src: '/imgs/img-11.png',
    alt: 'Image 4',
    className: 'absolute top-[52%] left-[15%]',
    size: '14',
  },
  {
    src: '/imgs/img-12.png',
    alt: 'Image 12',
    className: 'absolute top-[62%] left-[35%]',
    size: '14',
  },
];

function Page() {
  useRevealer();
  return (
    <LenisProvider>
      <Revealer />
      <motion.div className='home '>
        <div className='header flex w-full flex-col items-center justify-center gap-[32px] pt-[100px]'>
          {images.map(image => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={'size-[500px]'}
            />
          ))}
        </div>
      </motion.div>
    </LenisProvider>
  );
}
export default Page;
