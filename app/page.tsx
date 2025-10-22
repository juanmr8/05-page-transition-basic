'use client';
import { useRevealer } from '@/hooks/useRevealer';
import { motion } from 'framer-motion';
import { LenisProvider } from './lenis-provider';
import Revealer from '@/components/revealer';

export default function Page() {
  useRevealer();
  return (
    <LenisProvider>
      <Revealer />
      <motion.div
        className='home max-h-screen overflow-hidden bg-white'
      >
        <img
          src='/imgs/main-img.jpg'
          alt='Hero'
          className='absolute inset-0 max-h-screen min-w-screen overflow-hidden object-cover '
        />
        <div className='header grid h-screen w-full place-items-center relative z-10'>
          <h1 className='text-4xl font-bold'>Brand</h1>
        </div>
      </motion.div>
    </LenisProvider>
  );
}
