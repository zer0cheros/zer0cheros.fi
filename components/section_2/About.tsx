import React from 'react'
import Cloud from '../section_1/Cloud'

const About = () => {
  return (
    <div className='flex flex-col h-screen w-full p-3'>
        <div className='w-full justify-center flex'><h1 className='text-green-600 flex-none text-[4vw] w-auto font-medium'>About</h1></div>
        <div className='w-full h-full flex'>
            <div className="w-[50%] bg-[url('/male.jpg')] rounded-xl shadow-xl m-2">
            </div>
        <div className=' w-[50%] m-2'>
            <div>
                <p className='text-3xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Animi obcaecati pariatur, non dolores error at cupiditate
                    blanditiis ipsum laboriosam ipsam sint, quasi sunt 
                    repudiandae, totam dignissimos! Odit rem aliquid 
                    cumque sed accusantium natus enim, laudantium 
                    consequatur minus harum, eos eaque quo veritatis
                    et distinctio, tenetur ad nam sit vel? Iste!</p>
            </div>
        </div>
        
    </div>
    </div>
   
  )
}

export default About