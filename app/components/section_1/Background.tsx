'use client'
import React, {useState, useEffect} from 'react'
import Mountain from './Mountain'
import Header from './Header'
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { text } from 'stream/consumers'
import Parallax from '../Parallax'


const Background = () => {
  const [words, setWords] = useState("cheros")
  const [text, count] = useTypewriter({
    words: [
      "cheros", "Emission", "Hacking", "Code"
    ],
    loop: true,
    delaySpeed: 4000
  })
  return (
    <Parallax offset={180}>
    <div className="bg-[url('/layer_1.webp')] bg-no-repeat bg-center bg-cover">
        <Header />
        <Parallax offset={80}>
        <Mountain />
        </Parallax>
        <div className='absolute z-10 md:top-[5%] top-[20%] w-full h-[80%] text-center'>
            <div className='flex justify-center'>
              <Parallax>
                <h1 style={{textShadow:'2px 1px 16px black'}} className='xl:text-[11rem] md:text-[5rem] text-[2.5rem]  font-medium text-gray-100 py-3 border-slate-50'>Zer0<span style={{textShadow:'2px 1px 8px black'}} className=' text-green-600 flex-none xl:text-[11rem] md:text-[5rem] text-[2.5rem] w-auto font-medium py-6'>{text}</span><Cursor /></h1>
              </Parallax>
            </div>
            <Parallax offset={100}>
            <h1 style={{textShadow:'3px 2px 8px black'}} className='md:text-[4vw] text-[8vw] font-medium text-gray-100'>Teaching <span className='md:text-[4vw] text-[8vw] font-medium text-green-600'>Substainable</span> Developing</h1>
       </Parallax> 
       </div>
    </div>
    </Parallax>
  )
}

export default Background