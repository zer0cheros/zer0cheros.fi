import React from 'react'
import Image from 'next/legacy/image'


const Terminal = () => {
  return (
    <div className='w-full h-full flex md:flex-row flex-col'>
        <div className="md:w-[50%] w-full flex flex-col h-full">
            <h1 className='text-bold text-xl m-1 text-green-600'>Optidev Terminal</h1>
            <p className='text-mg text-slate-900 p-2'>Terminal is a AWS ec2 instance with some docker containers running. The instance has apance2 server installd and running. Apache2 is using reverse-proxy to forward the terminal docker container. Once inside the container you can ssh into other containers running on the instance</p>
            <p className='text-mg text-slate-900 p-2'><a href="https://term.optidev.fi">Link to webbsite</a></p>
        </div >
        <div className='md:w-[50%] w-full h-full'>
          <Image alt='terminal' width={800} height={550} src={'/term.PNG'}></Image>
        </div>
        
    </div>
  )
}

export default Terminal