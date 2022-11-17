import React from 'react'

const Header = () => {
  return (
    <nav className='absolute z-20 w-full align-center h-24 bg-red-600'>
        <div className='flex h-full justify-between align-center  mx-4'>
        <img src="" alt="" />
        <ul className='flex h-full items-center gap-4 p-2'>
            <li className='text-white text-2xl'>About</li>
            <li className='text-white text-2xl'>Contact</li>
            <li className='text-white text-2xl'>Vision</li>
            <li className='text-white text-2xl'>Projects</li>
        </ul>
        </div>
    </nav>
  )
}

export default Header