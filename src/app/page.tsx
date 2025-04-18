import Profile from '@/components/org/jallen/profile/Profile';
import Socials from '@/components/org/jallen/socials/Socials';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

const profileMessage = 'I am a full-stack developer with 11 years of total experience in different technical stacks. A person that finds enjoyment in learning about software development such as different languages or technology, open to new challenges in coding and can be a team player. I thrive in research and development while delivering high quality systems.';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col pt-8 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Senior Software Developer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br /> <span className='text-accent'>James Allen</span>
            </h1>

            <p className='max-w-[500px] mb-9 text-white/80'>{profileMessage}</p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2 text-black'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl text-black' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials 
                  containerStyles='flex gap-6' 
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                  />
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Profile />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home;