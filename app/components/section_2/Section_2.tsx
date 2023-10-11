import React from 'react'
import About from './About'
import { FadeIn } from '../FadeIn'
import Parallax from '../Parallax'


const Section_2 = () => {
  return (
    <FadeIn>
      <h1 className=' text-green-600 text-center flex-none text-[5vw] font-medium'>About</h1>
      <div id='about' className="scroll-smooth bg-white md:h-screen h-[200vh] w-full m-auto">     
      <Parallax offset={60}>
      <About/>
      </Parallax>
    </div>
    </FadeIn>
    
  )
}

export default Section_2
