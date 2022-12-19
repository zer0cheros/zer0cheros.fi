import React, {useState, useEffect} from 'react'
import Mountain from './Mountain'
import Header from './Header'
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { text } from 'stream/consumers'


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
    <div className="bg-[url('/layer_1.webp')] bg-no-repeat bg-center bg-cover shadow-xl">
        <Header />
        <Mountain />
        <div className='absolute z-10 md:top-[10%] top-[20%] w-full h-screen text-center'>
            <div className='flex justify-center'>
                <h1 style={{textShadow:'3px -1px 400px black'}} className='xl:text-[11rem] md:text-[5rem] text-[2.5rem]  font-medium text-white py-6 border-white'>Zer0<span style={{textShadow:'2px 1px 2px black'}} className=' text-green-600 flex-none xl:text-[11rem] md:text-[5rem] text-[2.5rem] w-auto font-medium py-6'>{text}</span><Cursor /></h1>
            </div>
            <h1 style={{textShadow:'3px 2px 2px black'}} className='md:text-[4vw] text-[8vw] font-medium text-gray-500'>Teaching <span className='md:text-[4vw] text-[8vw] font-medium text-green-600'>Substainable</span> Developing</h1>
        </div>
    </div>
  )
}

export default Background