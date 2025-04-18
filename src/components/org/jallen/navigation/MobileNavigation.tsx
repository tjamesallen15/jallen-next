'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Resume',
    path: '/resume'
  },
  {
    name: 'Projects',
    path: '/projects'
  }
];

const MobileNavigation = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center gap-2 group'>
        <CiMenuFries className='text-[20px] text-white group-hover:text-accent' />
        <span className='text-white group-hover:text-accent hidden sm:block'>Menu</span>
      </SheetTrigger>

      <SheetContent className='flex flex-col'>
        <SheetTitle className='hidden'></SheetTitle>
        <div className='mt-32 mb-40 text-center text-2xl'>James Allen</div>

        <nav className='flex flex-col justify-center items-center gap-8'>
          { links.map((link, index) => {
            return (
              <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation;