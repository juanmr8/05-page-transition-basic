'use client';
import { LenisProvider } from '../lenis-provider';
import Title from '@/components/title';

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
	return (
		<LenisProvider>
			<div
				className='grid w-full grid-cols-12 flex-col gap-4 bg-[#F5F5F5] py-[40px] pl-[82px] '
				id='content'
			>
				<div className='col-span-2'>
					<div className=' flex items-center gap-2'>
						<div className='size-[32px] rounded-full bg-[#F61E1E]' />
						<p>COURSE I</p>
					</div>
				</div>

				<div className='col-span-8 col-start-4 flex flex-col gap-4 pb-8'>
					<div className='flex'>
						<p>$120</p>
						<div className='my-[4px] ml-[6px] border-l border-gray-500' />
						<p className='ml-[6px]'>6 MONTHS</p>
					</div>
					<Title className='text-[48px] leading-[0.85] lg:text-[9.5vw]'>
						Principles of Nature and Art{' '}
					</Title>
					<p className='text-[#666565]'>The relationship between nature and art has captivated human imagination since our earliest ancestors first traced the outline of their hands on cave walls or carved figures from bone and stone. This enduring dialogue between the natural world and human creative expression reveals fundamental principles that govern both realms—patterns of growth and decay, harmony and tension, simplicity and complexity that manifest whether we observe the spiral of a nautilus shell or the composition of a Renaissance painting.</p>
				</div>
				<img
					src='/img-course.jpg'
					className='col-span-12 aspect-1361/764 object-cover pr-[32px]'
				/>
				{/* <div className='header content flex w-full flex-col items-center justify-center gap-[32px] pt-[100px] bg-[#F5F5F5]'>
					{images.map(image => (
						<img
							key={image.src}
							src={image.src}
							alt={image.alt}
							className={'size-[500px]'}
						/>
					))}
				</div> */}
			</div>
		</LenisProvider>
	);
}
export default Page;
