'use client';
import Title from '@/components/title';
import { LenisProvider } from './lenis-provider';

export default function Page() {
	return (
		<LenisProvider>
			<div className='bg-[#F5F5F5]'>
				<div
					// id='content'
					className='home ml-[50px] overflow-hidden bg-[#F5F5F5] lg:grid lg:grid-cols-12 lg:gap-4'
				>
					<div className='col-span-12 h-fit'>
						<Title className='font-sans px-[32px] pt-[64px] text-center text-[12vw] leading-[0.85] font-semibold uppercase'>
							We are TWIST
						</Title>
					</div>
					<div className='col-span-12 mx-[32px]'>
						<img
							src='/img-hero.jpg'
							alt='TWIST'
							className='aspect-1383/646 size-full object-cover'
						/>
					</div>
					<div className='relative'></div>
					<div className='col-span-12 pt-[32px] text-center'>
						<p>
							MEET YOUR NEW ART SCHOOL{' '}
							<span className='pb-8 font-serif font-light underline'>
								WITH A TWIST
							</span>
						</p>
					</div>
				</div>
				<BottomPart />
			</div>
		</LenisProvider>
	);
}

const BottomPart = () => {
	return (
		<div className='grid w-full grid-cols-12 flex-col gap-4 bg-[#F5F5F5] pl-[82px] py-[80px]'>
			{/** Row 1  */}
			<div className='col-span-4 col-start-2 w-full'>
				<img
					src='/img-home-1.jpg'
					className='aspect-1383/646 size-full object-cover'
				/>
			</div>
			<Title className='text-[] col-span-5 col-start-7 font-serif text-[108px] leading-[0.85] uppercase'>
				Artists
			</Title>
			{/** Row 2 */}
			<div className='col-span-7 col-start-5 h-px bg-[#F5F5F5]'>
				<svg
					width='635'
					height='422'
					viewBox='0 0 635 422'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='mt-[-108px]'
				>
					<path
						d='M632.147 0.0603027C642.111 81.9909 625.617 253.161 479.927 282.396C297.814 318.939 -90.7853 86.6632 20.046 421.06'
						stroke='black'
					/>
				</svg>
			</div>
			{/** Row 3 */}
			<p className='text-[] col-start-2 pt-[300px] col-span-5 font-serif text-[108px] leading-[0.85] uppercase'>
				Welcome
			</p>
			<img src='/img-home-3.jpg' className='aspect-646/1383 col-start-9 col-span-3 pt-[300px]  object-cover' />
			<img src='/img-home-2.jpg' className='aspect-353/177 col-start-4 col-span-3 mt-[-150px]  object-cover' />
		</div>
	);
};
