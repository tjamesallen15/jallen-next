import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navigation from '../navigation/Navigation';
import MobileNavigation from '../navigation/MobileNavigation';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-pink-50/20'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            James Allen
          </h1>
        </Link>

        <div className='hidden xl:flex items-center gap-8'>
          <Navigation />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className='xl:hidden'>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}

export default Header;