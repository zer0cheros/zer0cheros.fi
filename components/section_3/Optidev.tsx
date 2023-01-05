import React from 'react'
import Image from 'next/legacy/image'


const Optidev = () => {
  return (
    <div className='w-full h-full flex md:flex-row flex-col'>
        <div className="md:w-[50%] w-full flex flex-col h-full">
            <h1 className='text-bold text-xl m-1 text-green-600'>Optidev</h1>
            <p className='text-mg text-slate-900 p-2'>Optidev is a full-stack application created with Nextjs, Prisma and MongoDb. Pages includes a protected admin page where you can mangage users and add quizzes and question for the students. Optidev is a community for student to see their learning progress and courses. Routes are protected next-auth and custom provider. Feel free to share and use.  </p>
            <p className='text-mg text-slate-900 p-2'><a href="https://optidev.fi">Link to webbsite</a></p>
        </div >
        <div className='md:w-[50%] w-full h-full'>
          <Image alt='optidev' width={800} height={550} src={'/optidev.PNG'}></Image>
        </div>
        
    </div>
  )
}

export default Optidev