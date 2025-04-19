'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Application, ProcessWork } from '@/app/data/common/types';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { ScrollArea } from '@/components/ui/scroll-area';

const ProjectsImpl = ({ applications, works } : { applications: Application[], works: ProcessWork[] }) => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs defaultValue='personal' className='flex flex-col'>
          <TabsList className='mt-0 xl:mt-8'>
            <TabsTrigger value='personal'>Personal</TabsTrigger>
            <TabsTrigger value='work'>Work</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='personal'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { 
                    delay: 1.0,
                    duration: 0.4,
                    ease: 'easeIn'
                  }
                }}
                className='grid grid-cols md:grid-cols-2 gap-[60px]'
              >
                {
                  applications.map((item, index) => {
                    return (
                      <div className='flex-1 flex flex-col justify-center gap-2' key={index}>
                        <div className='w-full flex justify-between items-center'>
                          <div className='text-3xl font-extrabold'>{item.title}</div>
                          <div className='flex flex-row gap-2'>
                            {
                              item.site !== null ? 
                                <Link
                                  href={item.site}
                                  className='w-[32px] h-[32px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-360'
                                >
                                  <FaGlobe className='text-primary text-xl' />
                                </Link>
                              : null
                            }
                            {
                              item.repository !== 'N/A' ?
                                <Link 
                                  href={item.repository}  
                                  className='w-[32px] h-[32px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-360'
                                >
                                  <FaGithub className='text-primary text-xl'/>
                                </Link>
                              : null
                            }
                          </div>
                        </div>
                        <h2 className='text-[18px] font-bold leading-none text-accent transition-all duration-500'>{item.tech}</h2>
                        <h2 className='text-[16px] text-white/60 leading-none'>{item.category}</h2>
                        <p className='text-white/60 mt-4'>{item.description}</p>
                        <div className='border-b border-white/20 w-full' />
                      </div>
                    )
                  })
                }
              </motion.div>
            </TabsContent>
            <TabsContent value='work'>
              <ScrollArea className='h-[525px]'>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: { 
                      delay: 1.0,
                      duration: 0.4,
                      ease: 'easeIn'
                    }
                  }}
                  className='grid grid-cols gap-[30px]'>
                  {
                    works.map((item, index) => {
                      return (
                        <div className='flex-1 flex flex-col justify-center gap-2' key={index}>
                          <div className='text-3xl font-extrabold'>{item.name}</div>
                          <div className='text-[18px] font-bold leading-none text-accent transition-all duration-500'>{item.sub}</div>
                          <div className='text-[14px] text-white/60 leading-none'>{item.technology}</div>
                          <div className='text-[16px] font-semibold leading-none mb-2'>{item.company}</div>
                          {
                            item.descriptions.map((description, index) => {
                              return (
                                <div className='gap-2' key={index}>{description}</div>
                              )
                            })
                          }
                          <div className='border-b border-white/20 w-full' />
                        </div>
                      )
                    })
                  }
                </motion.div>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
        
      </div>
    </section>
  )
}

export default ProjectsImpl;