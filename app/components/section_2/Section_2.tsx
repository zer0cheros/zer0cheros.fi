import React from 'react'
import About from './About'
import { FadeIn } from '../FadeIn'
import Parallax from '../Parallax'
import ParticlesComponent from './Priticles'


const Section_2 = () => {
  return (
    <FadeIn>
      <div  id='about' className="scroll-smooth text-center h-[100vh] max-md:w-[95%] mt-16 w-full m-auto">
      <ParticlesComponent color={'#15803d'} />   
      <h1 className=' text-green-700 flex-none text-[5vw] pt-5 max-md:-mt-6 -mt-20 w-auto font-medium'>Whoami</h1>     
      <About/>
       </div>
    </FadeIn>

  )
}

export default Section_2
