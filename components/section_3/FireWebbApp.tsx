import React from 'react'
import Image from 'next/image'


const FireWebbApp = () => {
  return (
    <div className='w-full h-full flex md:flex-row flex-col'>
        <div className="flex flex-col w-full h-full">
            <h1 className='text-bold text-lg m-1'>FireWebb-App</h1>
            <p className='text-sm text-slate-900'>FireWebb-App is a full-stack application created with Firebase, Nodejs, Express and EJS. </p>
        </div>
        <img className='md:w-1/2 w-[90%] m-4 h-full' src="/firewebbapp.PNG" alt="" />
    </div>
  )
}

export default FireWebbApp