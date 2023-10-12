import React from 'react'
import About from './About'
import { FadeIn } from '../FadeIn'
import Parallax from '../Parallax'


const Section_2 = () => {
  return (
    <FadeIn>
      <h1 className=' text-green-600 text-center flex-none text-[5vw] font-medium'>About</h1>
      <div id='about' className="scroll-smooth bg-white h-screen max-md:w-[95%] w-full m-auto">     
      <Parallax>
      <About/>
      </Parallax>
    </div>
    </FadeIn>
    
  )
}

export default Section_2
