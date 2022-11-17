import React from 'react'
import Mountain from './Mountain'
import Header from './Header'

const Background = () => {
  return (
    <div className="relative bg-[url('/layer_1.jpg')] bg-no-repeat bg-center bg-cover max-h-screen">
        <Header />
        <Mountain />
        <div className='absolute z-20 top-0 w-full h-screen'>
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-9xl text-white border-4 border-white'>Zer0cheros</h1>
            </div>
        </div>
    </div>
  )
}

export default Background