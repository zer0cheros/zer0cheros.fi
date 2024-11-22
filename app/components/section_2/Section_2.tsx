import React, {Suspense} from 'react'
import About from './About'
import { FadeIn } from '../FadeIn'
import dynamic from 'next/dynamic'

const ParticlesComponent = dynamic(() => import('./Particles'), { ssr: false })


const Section_2 = () => {
  return (
    <>
    <FadeIn>
      <div  id='about' className="scroll-smooth text-center h-[100vh] max-md:w-[95%] mt-16 w-full m-auto">
      <h1 className=' text-green-700 flex-none text-[5vw] pt-5 max-md:-mt-6 -mt-20 w-auto font-medium'>Whoami</h1>     
      <About/>
      </div>
    </FadeIn>
    <Suspense fallback={'..loading'}>
      <ParticlesComponent color={'#15803d'} />
    </Suspense>
       </>  

  )
}

export default Section_2
