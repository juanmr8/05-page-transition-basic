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
			e.preventDefault();
			if (pathname === path) {
				return;
			}
			router.push(path, {
				onTransitionReady: pageAnimation2,
			});
		};

	return (
		<div className='menu fixed z-1000 h-16 w-full '>
			<div className='container mx-auto flex h-full items-center gap-[16px] px-4'>
				<Link href='/' 
				onClick={handleNavigation('/')} 
				>
					Home
				</Link>
				<Link href='/demo' 
				onClick={handleNavigation('/demo')}
				>
					Demo
				</Link>
			</div>
		</div>
	);
}

const pageAnimation = () => {
	document.documentElement.animate(
		[
			{
				opacity: 1,
				scale: 1,
			},
			{
				opacity: 0.5,
				scale: 0.9,
			},
			{
				opacity: 0.5,
				scale: 0.9,
			},
			{
				opacity: 0.5,
				scale: 0.9,
			},
		],
		{
			duration: 1000,
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
				transform: 'translateY(100%)',
			},
			{
				transform: 'translateY(100%)',
			},
			{
				transform: 'translateY(0)',
			},
		],
		{
			duration: 1000,
			easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
			fill: 'forwards',
			pseudoElement: '::view-transition-new(root)',
		}
	);
};

const pageAnimation2 = () => {
	const tl = gsap.timeline();
	tl.to('.menu', {
		y: '-100%',
		duration: 1,
		easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
	});
	tl.to('.menu', {
		y: '0%',
		duration: 1,
		easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
	});
	// Old page: Scale down and rotate (like scroll perspective effect)
	document.documentElement.animate(
		[
			{
				scale: 1,
				transform: 'translateY(0%)',
				rotate: '0deg',
				opacity: 1,
			},
			// {
			//   scale: 1.2,
			//   // rotate: '-5deg',
			// },
			// {
			//   scale: 1.5,
			//   // rotate: '-8deg',
			// },
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
				// scale: 0.6,
				// rotate: '-5deg',
				transform: 'translateY(100%)',

				// transform: 'translateY(160%)',
			},
			{
				// rotate: '-4deg',
				// transform: 'translateY(80%)',
			},
			{
				// rotate: '-3deg',
				// transform: 'translateY(50%)',
			},
			{
				// scale: 1,
				// rotate: '0deg',
				transform: 'translateY(0%)',

				// transform: 'translateY(0)',
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
