import React, {useState, useEffect} from 'react'
import Mountain from './Mountain'
import Header from './Header'
import { useSpring, animated } from '@react-spring/web'


const Background = () => {
  const [words, setWords] = useState("cheros")
  const [animate, setAnimate] = useState(false)
  const renderWords = ()=>{
    const wordlist = ["cheros", "Emission", "Time"]
    setTimeout(()=>{
      if(words == "cheros"){
        setWords(wordlist[1])
        setAnimate(true)
        }
    }, 3000)
    setTimeout(()=>{
      if(words == "Emission"){
        setWords(wordlist[2])
        setAnimate(true)
        }
    }, 3000)
    setTimeout(()=>{
      if(words == "Time"){
        setWords(wordlist[0])
        setAnimate(true)
        }
    }, 3000)
    //setWords(wordlist[0])
  }
  useEffect(()=>{
      renderWords()
}, [words])
  return (
    <div className="relative bg-[url('/layer_1.jpg')] bg-no-repeat bg-center bg-cover max-h-screen">
        <Header />
        <Mountain />
        <div className='absolute z-20 top-[10%] w-full h-screen text-center'>
            <div className='flex ml-[22%] '>
                <h1 style={{textShadow:'3px -1px 400px black'}} className='text-[12vw] font-medium text-white py-6 border-white'>Zer0</h1>
                {animate ? <span style={{textShadow:'2px 1px 2px black'}} className='animate-texts text-green-600 flex-none text-[12vw] w-auto font-medium py-6'>{words}</span>:<span style={{textShadow: '2px 2px 2px black'}} text-green-600 className=' text-green-600 text-[12vw] w-auto font-medium py-6'>cheros</span>}
            </div>
            <h1 style={{textShadow:'3px 2px 2px black'}} className='text-[4vw] font-medium text-gray-500'>Teaching Substainable Developing</h1>
        </div>
    </div>
  )
}

export default Background