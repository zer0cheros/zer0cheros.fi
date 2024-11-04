import React from 'react'
import {motion} from 'framer-motion'

export default function InfoText() {
  return (
    <motion.div initial={{x:200 , opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay:2}} className='absolute z-50 right-10 bottom-24'>
        <a href="https://3d.zer0cheros.fi" className='no-underline text-xl ' target='_blank'><h1 style={{textShadow:'2px 1px 8px black'}} className='text-green-700 text-xl max-md:text-lg max-sm:text-md '>Check Out! <span style={{textShadow:'2px 1px 16px black'}} className='xl:text-xl md:text-lg text-md  font-medium text-gray-100 py-3 max-sm:py-0 border-slate-50 animate-pulse'>3d potfolio</span></h1></a>
    </motion.div>
  )
}
