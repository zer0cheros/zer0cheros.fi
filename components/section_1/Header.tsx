import React from 'react'

const Header = () => {
  return (
    <nav className='absolute z-20 w-full align-center h-24 bg-transparent '>
        <div className='flex h-full justify-between align-center shadow-sm mx-6'>
        <img src="" alt="" />
        <ul className='flex h-full items-center gap-8 p-2'>
            <li className='text-gray-500 text-4xl'>About</li>
            <li className='text-gray-500 text-4xl'>Contact</li>
            <li className='text-gray-500 text-4xl'>Vision</li>
            <li className='text-gray-500 text-4xl'>Projects</li>
        </ul>
        </div>
    </nav>
  )
}

export default Header