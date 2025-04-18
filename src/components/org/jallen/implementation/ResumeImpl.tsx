'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa';

import { 
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const general = {};

// details: [
//   {
//     fieldName: 'Name',
//     fieldValue: 'James Tadique'
//   },
//   {
//     fieldName: 'Phone',
//     fieldValue: '0000'
//   },
//   {
//     fieldName: 'Experience',
//     fieldValue: '11 Years'
//   },
//   {
//     fieldName: 'Email',
//     fieldValue: 'name@yahoo.com'
//   },
//   {
//     fieldName: 'Email II',
//     fieldValue: 'name@gmail.com'
//   },
//   {
//     fieldName: 'Nationality',
//     fieldValue: 'Filipino'
//   }
// ]


const experience = {
  title: 'Experience',
  description: 'Description',
  details: [
    {
      company: 'Company',
      position: 'Position',
      duration: '1'
    },
    {
      company: 'Company',
      position: 'Position',
      duration: '2'
    },
    {
      company: 'Company',
      position: 'Position',
      duration: '3'
    },
    {
      company: 'Company',
      position: 'Position',
      duration: '4'
    }
  ]
};

const skills = {
  title: 'Skills',
  description: 'Description',
  details: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5'
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3'
    },
    {
      icon: <FaJs />,
      name: 'JavaScript'
    },
    {
      icon: <FaReact />,
      name: 'React'
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js'
    },
    {
      icon: <FaFigma />,
      name: 'Figma'
    },
    {
      icon: <SiNextdotjs />,
      level: 'Next.js'
    }
  ]
};

const ResumeImpl = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { 
          delay: 1.5,
          duration: 0.4,
          ease: 'easeIn'
        }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 gap-6'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-row w-full max-w-[380px] mx-auto xl:flex-col xl:mx-0 bg-transparent'>
            <TabsTrigger value='profile'>Profile</TabsTrigger>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='profile' className='w-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[10px] text-center xl:text-left'>
                  {/* <h3 className='text-4xl font-bold'>{profile.title}</h3> */}
                  {/* <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{profile.description}</p> */}
                </div>

                <ScrollArea className='h-[400px]'>
                  <div className='flex flex-col gap-4'>
                    <p>I am a full-stack developer with 11 years of total experience in different technical stacks. A person that finds enjoyment in learning about development such as different languages or technology, open to new challenges in coding and can be a team player. I thrive in research and development while delivering high quality systems.</p>

                    <p>I am skilled at different libraries and frameworks such as JavaScript, TypeScript, React, Next.js and Angular using Node.js for server environment for front-end development. For back-end development, I am adept at using Java with knowledge of Spring framework, Spring boot, OAuth, Maven with great understanding of web services, microservices and restful API.</p>

                    <p>I have good experience in using database management system such as MySQL, PostgreSQL, NoSQL, SQLite and Oracle Database. I am also proficient in using version control system such as Git with added fluency in deployment using Jenkins, Railway and Vercel.</p>

                    <p>Additionally, I have knowledge with Python in small scale projects. I am also adept at creating test scripts using Playwright and Puppeteer to capture regression bugs that will occasionally happen during development cycle.</p>
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {
                      experience.details.map((item, index) => {
                        return (
                          <li 
                            key={index}
                            className='bg-gray-700 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                          >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                            <div>
                              <span></span>
                              <p>{item.company}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>

                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {
                    skills.details.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-gray-700 rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-accent transition-all duration:300'>{item.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default ResumeImpl;