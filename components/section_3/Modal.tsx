import React, {useState,useEffect} from 'react'

export type Props = {
    visible: boolean 
}

const Modal = ({visible}:Props) => {
    const [state, setState] = useState(visible)
    useEffect(()=>{
        setState(visible)
    },[visible])
    return (
        <>
        {state ? 
        <div className=' bg-slate-50 absolute top-0 left-0 w-full h-full z-40'>
            <div>
                <h1 className='font-bold text-xl'>Heading</h1>
                <p className='text-start text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, saepe.</p>
            </div>
            <button onClick={()=>{
                setState(false)
            }}>Close</button>
        </div>
               
        :null}
    </>
    )
}

export default Modal