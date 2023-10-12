import React, {useState,useEffect} from 'react'

export type Props = {
    setVisible: any,
    id: number,
    text: string,
    url: string,
    name: string,
}

const Modal = ({setVisible, id, text, url, name}:Props) => {
    const [visible, setModalVisible] = useState(setVisible)
    useEffect(() => {
        setModalVisible(setVisible);
      }, [setVisible]);
    return (
        <div key={id} className=' bg-slate-50 absolute top-0 left-0 w-full max-md:w-[70vw] max-md:overflow-scroll max-md:-left-9 max-md:h-[70vh] h-full z-40'>
            <div className='flex flex-col gap-5 p-5 max-md:p-0 max-md:gap-2'>
                <h1 className='text-5xl max-lg:text-xl max-md:text-lg text-green-600'>{name}</h1>
                <p className='inline-block p-10 text-xl max-lg:text-md max-md:text-sm'>{text}</p>
                <h2>Link</h2>
                <a href={url}>{url}</a>
            </div>
        </div>
    )
}

export default Modal