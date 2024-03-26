'use client'
import Mountain from './Mountain'
import Header from './Header'
import Image from 'next/image'
import Parallax from '../Parallax'


const Background = () => {
  return (
    <div className="bg-[url('/layer_1.webp')] bg-no-repeat bg-center bg-cover">
        <Header />
        <Parallax offset={160}>
        <Mountain />
        </Parallax>
        <div className='absolute z-10 max-md:top-[15%] top-[12%] w-full h-[80%] text-center'>
            <div className='flex justify-center mt-10'>
              <Parallax offset={120}>
                <h1 style={{textShadow:'2px 1px 8px black'}} className='text-green-700 text-6xl max-md:text-3xl max-sm:text-xl' >Hi, I&apos;m</h1>
                <h1 style={{textShadow:'2px 1px 16px black'}} className='xl:text-[9rem] md:text-[5rem] text-[2.5rem]  font-medium text-gray-100 py-3 max-sm:py-0 border-slate-50'>Zer0<span style={{textShadow:'2px 2px 12px black'}} className=' text-green-700 flex-none xl:text-[9rem] md:text-[5rem] text-[2.5rem] w-auto font-medium py-6'>cheros</span></h1>
              </Parallax>
            </div>
            <Parallax>
            <h1 style={{textShadow:'3px 2px 8px black'}} className='md:text-[4vw] text-[8vw] font-medium -mt-20 max-md:-mt-2 max-lg:mt-2 max-sm:-mt-4 text-gray-100'>Web <span className='md:text-[4vw]  text-[8vw] font-medium text-green-700'>Development</span> Teacher</h1>
       </Parallax> 
       </div>
    </div>
  )
}

export default Background