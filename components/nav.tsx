'use client';
import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

function Nav() {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const triggerPageTransition = () => {
	document.documentElement.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 2000,
        easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
        pseudoElement: '::view-transition-new(.content)',
      });

    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(25% 75%, 75% 75%, 75% 25%, 25% 25%)',
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
      ],
      {
        duration: 2000,
        easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  const handleNavigation =
    (path: string) =>
    (e: React.MouseEvent<HTMLAnchorElement>): void => {
      e.preventDefault();
      if (pathname === path) {
        return;
      }
      router.push(path, {
        onTransitionReady: triggerPageTransition,
      });
    };

  return (
    <div className='bg-background relative z-10 h-16 w-full'>
      <div className='container mx-auto flex h-full items-center gap-[16px] px-4'>
        <Link href='/' onClick={handleNavigation('/')}>
          Home
        </Link>
        <Link href='/demo' onClick={handleNavigation('/demo')}>
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
        transform: 'translateY(0)',
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: 'translateY(-100px)',
      },
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
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
        transform: 'translateY(0)',
      },
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)',
    }
  );
};

export default Nav;
