import Work from "./Work"
import { FadeIn } from "../FadeIn"
import { motion } from "framer-motion"


const Section_3 = () => {
  
  return ( 
    <FadeIn>
    <div id='project' className='w-full h-screen bg-white text-center'>
      <h1 className=' text-green-700 flex-none text-[5vw] w-auto font-medium'>Projects</h1>
      <motion.h2 initial={{x: -100}} animate={{x:0}} transition={{duration: 1}} className='text-center text-lg'>Drag cards to change, and doubletap to view info</motion.h2>
        <Work/> 
    </div>
    </FadeIn>
    
  )
}

export default Section_3