'use client';
import React from 'react'
import { motion } from 'framer-motion';

function Revealer() {
  return (
	<div className='revealer fixed  inset-0 z-75 pointer-events-none' style={{ backgroundColor: '#ef1214', transformOrigin: 'center bottom', transform: 'scaleY(0)' }}></div>
  )
}

export default Revealer
