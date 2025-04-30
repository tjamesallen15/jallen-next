'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const Navigation = () => {
  const pathName = usePathname();
  return (
    <nav className='flex gap-8'>
      { links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathName && "text-link-accent border-b-2 border-link-accent"} capitalize font-karla text-lg hover:text-link-accent transition-all`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation;