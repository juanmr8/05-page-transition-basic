import React, { useLayoutEffect, useRef } from 'react';
import { cn } from '@/app/utils';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);

function Title({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLHeadingElement>(null);
	useGSAP(() => {
		let split = SplitText.create(ref.current, {
			type: 'chars',
			lines: true,
			words: true,
			mask: 'chars',
			smartWrap: true,
		});

		gsap.from(split.chars, {
			opacity: 0,
			y: '100%',
			ease: 'power2.out',
			duration: 0.8,
			stagger: 0.03,
			delay: 0.5,
		});
	}, {});

	return (
		<h1 className={cn('overflow-hidden', className)}>
			<span className='block overflow-hidden py-[5px]' ref={ref}>
				{children}
			</span>
		</h1>
	);
}

export default Title;
