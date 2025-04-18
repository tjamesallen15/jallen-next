'use client';

import { RiNextjsLine } from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';
import { Socials } from '../common/Types';
import { motion } from 'framer-motion';

const socials: Socials[] = [
  {
    name: 'Next.js',
    href: 'https://nextjs.org/',
  },
  {
    name: 'Hire Me',
    href: 'https://www.linkedin.com/in/tjamesallen15/',
  },
];

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: 'easeInOut'
        }
      }}
      className='fixed w-full flex-row justify-between bg-gray-800 bottom-0 p-4 hidden xl:flex'>
      <span className='text-xs text-gray-500'>Created using Next.js &#169; Copyright 2025 of James Allen All Rights Reserved.</span>
      <div className='flex flex-row gap-6 items-center'>
        {
          socials.map((social, index) => {
            if (index === 0) {
              return (
                <div key={index} className='flex flex-row gap-2'>
                  <RiNextjsLine />
                  <a href={social.href} className='text-xs text-gray-500 hover:underline'>{social.name}</a>
                </div>
              )
            } else if (index === 1) {
              return (
                <div key={index} className='flex flex-row gap-2'>
                  <FaEnvelope />
                  <a href={social.href} className='text-xs text-gray-500 hover:underline'>{social.name}</a>
                </div>
              )
            }
          })
        }
      </div>
    </motion.footer>
  )
}

export default Footer;