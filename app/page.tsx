'use client';
import { LenisProvider } from './lenis-provider';

export default function Page() {
	return (
		<LenisProvider>
			<div
				// id='content'
				className='home h-[200vh] overflow-hidden bg-black'
			>
				<img
					src='/imgs/main-img.jpg'
					alt='Hero'
					className='absolute inset-0 max-h-screen min-w-screen overflow-hidden object-cover'
				/>
				<div className='header relative z-10 grid h-screen w-full place-items-center'>
					<h1 className='text-4xl font-bold'>Brand</h1>
				</div>
			</div>
		</LenisProvider>
	);
}
