import React from 'react'
import { FadeIn } from '../FadeIn'
import Card from './CardFlip'
import { motion } from 'framer-motion'


const About = () => {
  return ( 
    <div className='relative w-full flex md:-mt-16 justify-center items-center h-full'>  
      <div className='max-xl:w-[80%] w-[40%] max-md:w-[95%] max-lg:w-5/6 h-[90%] m-auto'>
        <FadeIn>
          <motion.h2 initial={{x: -100}} animate={{x:0}} transition={{duration: 1}} className='text-center pb-5 text-lg'>Click on the card for more info</motion.h2>
          <Card id={1} front={`bg-[url('/me2.webp')] max-md: bg-position w-full`} back={'bg-slate-50'} text={''} title={''}/>  
        </FadeIn>
     </div> 
    </div>
  )
}

export default About