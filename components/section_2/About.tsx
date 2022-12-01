import React from 'react'
import Cloud from '../section_1/Cloud'

const About = () => {
  return (
    <div className='flex flex-col h-screen w-full p-3'>
        <div className='w-full justify-center flex'></div>
        <div className='w-full h-full flex flex-col md:flex-row'>
            <div className="md:w-[50%] w-full h-full bg-[url('/male.jpg')] bg-cover rounded-xl shadow-xl m-2">
            </div>
        <div className=' md:w-[50%] w-full h-full m-2'>
            <div >
              <h1 className='text-3xl p-4 text-center text-green-600' >Zer0cheros</h1>
                <p className='text-3xl p-4'>Programming teacher from Kokkola, Finland. Creating and sharing knowledge is my passion.
                With over 8 years experience working as a teacher and couple of yeas working with development in classrooms. We produce exciting and innovative projects.
                
                  </p>
            </div>
        </div>
        
    </div>
    </div>
   
  )
}

export default About