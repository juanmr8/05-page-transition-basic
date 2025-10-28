'use client';
import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

function Nav() {
	const router = useTransitionRouter();
	const pathname = usePathname();

	const handleNavigation =
		(path: string) =>
		(e: React.MouseEvent<HTMLAnchorElement>): void => {
			if (pathname === path) {
				e.preventDefault();
				return;
			}
			router.push(path, {
				onTransitionReady: pageAnimation,
			});
		};

	return (
		<div className='menu text-foreground border-foreground fixed top-0 left-0 z-1000 flex h-screen w-[50px] flex-col border-r bg-[#F5F5F5]'>
			<div className='flex items-center justify-center p-4 pt-8'>
				<p className='-rotate-90 whitespace-nowrap'>TWIST©</p>
			</div>
			<div className='flex flex-1 flex-col items-center justify-center gap-6'>
				<Link
					href='/'
					onClick={handleNavigation('/')}
					className='-rotate-90 whitespace-nowrap'
				>
					Home
				</Link>
				<Link
					href='/demo'
					onClick={handleNavigation('/demo')}
					className='-rotate-90 pr-8 whitespace-nowrap'
				>
					Demo
				</Link>
			</div>
			<div className='flex items-center justify-center pb-2'>
				<img
					src='/img-home-1.jpg'
					alt='TWIST'
					className='size-8 rounded-[5px] object-cover'
				/>
			</div>
		</div>
	);
}

const pageAnimation = () => {
	document.documentElement.animate(
		[
			{
				scale: 1,
				transform: 'translateY(0%)',
				rotate: '0deg',
				opacity: 1,
			},
			{
				scale: 1.2,
				transform: 'translateY(-10%)',
				rotate: '-5deg',
				opacity: 0,
			},
		],
		{
			duration: 1200,
			easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
			fill: 'forwards',
			pseudoElement: '::view-transition-old(root)',
		}
	);

	document.documentElement.animate(
		[
			{
				transform: 'translateY(100%)',
			},
			{
				transform: 'translateY(0%)',
			},
		],
		{
			duration: 1200,
			easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
			fill: 'forwards',
			pseudoElement: '::view-transition-new(root)',
		}
	);
};

export default Nav;
