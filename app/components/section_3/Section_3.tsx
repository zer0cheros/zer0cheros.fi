import Work from "./Work"
import { FadeIn } from "../FadeIn"


const Section_3 = () => {
  
  return ( 
    <FadeIn>
    <div id='project' className='w-full h-screen bg-white text-center'>
      <h1 className=' text-green-700 flex-none text-[5vw] w-auto font-medium'>Projects</h1>
        <Work/>
    </div>
    </FadeIn>
    
  )
}

export default Section_3