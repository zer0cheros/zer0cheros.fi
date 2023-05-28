'use client'
import dynamic from 'next/dynamic'
import React, {useState, Suspense} from 'react'

const Work = dynamic(() => import('./Work'), {
  suspense: true,
})

const Section_3 = () => {
  
  return ( 
    <div id='project' className='w-full h-screen bg-white text-center'>
      <h1 className=' text-green-600 flex-none text-[5vw] w-auto font-medium'>Projects</h1>
      <Suspense fallback={'...loading'}>
        <Work/>
      </Suspense>
    </div>
    
  )
}

export default Section_3