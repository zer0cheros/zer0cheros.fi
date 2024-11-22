import React from 'react'
import Nextjs from './svg/Nextjs'
import Tailwind from './svg/Tailwind'
import { motion } from 'framer-motion'

export default function Icons() {
  return (
    <motion.p initial={{x:-200 , opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay:1}} className='max-md:hidden text-slate-900 absolute left-10 z-50 bottom-32 min-[2000px]:bottom-60  flex justify-center items-center gap-3 ml-5'><Nextjs/><Tailwind/></motion.p> 
  )
}
