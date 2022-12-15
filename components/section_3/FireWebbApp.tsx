import React from 'react'
import Image from 'next/image'


const FireWebbApp = () => {
  return (
    <div className='w-full h-full flex md:flex-row flex-col'>
        <div className="flex flex-col w-full h-full">
            <h1 className='text-bold text-xl m-1 text-green-600'>FireWebb-App</h1>
            <p className='text-mg text-slate-900 p-2'>FireWebb-App is a full-stack application created with Firebase, Nodejs, Express and EJS. Pages includes a protected admin page where you can mangage users and sales. Every user has their own profile where you can store data and change profile settings. Some routes are protected by middleware auth token. Feel free to share and use.  </p>
        </div>
        <img className='md:w-1/2 w-[90%] m-4 h-full shadow-lg' src="/firewebbapp.PNG" alt="" />
    </div>
  )
}

export default FireWebbApp