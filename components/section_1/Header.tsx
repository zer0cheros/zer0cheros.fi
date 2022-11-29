import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='absolute z-20 w-full align-center h-24 bg-transparent '>
        <div className='flex h-full justify-between align-center shadow-sm px-32'>
        <img className='animate-texts mb-2 mt-2 rounded-full shadow-2xl' src="logo.PNG" alt="" />
        <ul className='cursor-pointer animate-texts flex h-full items-center gap-8 p-2'>
            <Link href={'#about'}><li className='text-gray-500 hover:text-green-600 text-4xl'>About</li></Link>
            <Link href={'#contact'}><li className='text-gray-500 hover:text-green-600 text-4xl'>Contact</li></Link>
            <Link href={'#vison'}><li className='text-gray-500 hover:text-green-600 text-4xl'>Vision</li></Link>
            <Link href={'#project'} scroll={false}><li className='text-gray-500 hover:text-green-600 text-4xl'>Projects</li></Link>
        </ul>
        </div>
    </nav>
  )
}

export default Header