import React, {useState,useEffect} from 'react'
import FireWebbApp from './FireWebbApp'

export type Props = {
    setVisible: any,
    id: number
}

const Modal = ({setVisible, id}:Props) => {
    return (
        <div className=' bg-slate-50 absolute top-0 left-0 w-full h-full z-40'>
            <div>
                {id == 1 ? <FireWebbApp /> : null}
               
            </div>
            <button onClick={()=>{
                setVisible(false)
            }}>Close</button>
        </div>
    )
}

export default Modal