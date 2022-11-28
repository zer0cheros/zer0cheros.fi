import React, {useState, useEffect} from 'react'
import Mountain from './Mountain'
import Header from './Header'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { text } from 'stream/consumers'


const Background = () => {
  const [words, setWords] = useState("cheros")
  const [animate, setAnimate] = useState(false)
  const [text, count] = useTypewriter({
    words: [
      "cheros", "Emission", "Time"
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className="relative bg-[url('/layer_1.jpg')] bg-no-repeat bg-center bg-cover max-h-screen shadow-xl">
        <Header />
        <Mountain />
        <div className='absolute z-20 top-[10%] w-full h-screen text-center'>
            <div className='flex ml-[22%] '>
                <h1 style={{textShadow:'3px -1px 400px black'}} className='text-[12vw] font-medium text-white py-6 border-white'>Zer0<span style={{textShadow:'2px 1px 2px black'}} className=' text-green-600 flex-none text-[12vw] w-auto font-medium py-6'>{text}</span><Cursor /></h1>
            </div>
            <h1 style={{textShadow:'3px 2px 2px black'}} className='text-[4vw] font-medium text-gray-500'>Teaching <span className='text-[4vw] font-medium text-green-600'>Substainable</span> Developing</h1>
        </div>
    </div>
  )
}

export default Background