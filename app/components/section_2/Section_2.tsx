import React from 'react'
import About from './About'
import { FadeIn } from '../FadeIn'
import Parallax from '../Parallax'


const Section_2 = () => {
  return (
    <FadeIn>
      <div  id='about' className="scroll-smooth  h-[100vh] max-md:w-[95%] w-full m-auto">     
      <Parallax>
      <About/>
      </Parallax>
    </div>
    </FadeIn>

  )
}

export default Section_2
