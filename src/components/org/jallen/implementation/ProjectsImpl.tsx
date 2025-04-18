'use client';

import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Web Development 01',
    description: 'Description 01',
    href: ''
  },
  {
    num: '02',
    title: 'Web Development 02',
    description: 'Description 02',
    href: ''
  },
  {
    num: '03',
    title: 'Web Development 03',
    description: 'Description 03',
    href: ''
  },
  {
    num: '04',
    title: 'Web Development 04',
    description: 'Description 04',
    href: ''
  }
];

import { motion } from 'framer-motion';
import { BsArrowDownRight } from 'react-icons/bs';

const ProjectsImpl = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              delay: 2.4,
              duration: 0.4,
              ease: 'easeIn'
            }
          }}
          className='grid grid-cols md:grid-cols-2 gap-[60px]'
        >
          {
            services.map((service, index) => {
              return (
                <div className='flex-1 flex flex-col justify-center gap-6 group' key={index}>
                  <div className='w-full flex justify-between items-center'>
                    <div className='text-5xl font-extrabold'>{service.num}</div>
                    <Link 
                      href={service.href}
                      className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                    >
                      <BsArrowDownRight className='text-primary text-3xl'/>
                    </Link>
                  </div>
                  <h2 className='text-[24px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                  <p className='text-white/60'>{service.description}</p>
                  <div className='border-b border-white/20 w-full'></div>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsImpl;