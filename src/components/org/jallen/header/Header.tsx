import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navigation from '../navigation/Navigation';
import MobileNavigation from '../navigation/MobileNavigation';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-sidebar'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            James Allen
          </h1>
        </Link>

        <div className='hidden lg:flex items-center gap-8'>
          <Navigation />
          <Link href='https://www.linkedin.com/in/tjamesallen15/'>
            <Button className='gap-2 hover:bg-accent transition-all bg-white text-foreground hover:text-primary'>
              Hire me
              <FaLongArrowAltRight />
            </Button>
          </Link>
        </div>

        <div className='lg:hidden flex flex-row items-center gap-4'>
          <MobileNavigation />
          <Link href='https://www.linkedin.com/in/tjamesallen15/'>
            <Button className='gap-2 hover:bg-accent transition-all bg-white text-foreground hover:text-primary'>
              Hire me
              <FaLongArrowAltRight />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;