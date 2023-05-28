'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import Section_1 from './section_1/Section_1';
import Footer from './footer/Footer';


const Section_2 = dynamic(() => import('./section_2/Section_2'))
const Section_3 = dynamic(() => import('./section_3/Section_3'))


const Page = () => {
    const [scrollY, setScrollY] = useState(0);
    const [size, setSize] = useState(0);
    
      useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY); 
      }  
      const s = () => {
        setSize(window.innerWidth); 
      }  
      s()
      if(size < 600){
        window.addEventListener("scroll", handleScroll);
        console.log('mindre');
        return () => {
        window.removeEventListener("scroll", handleScroll);
      };
      }else {
        console.log('stÃ¶rre');
        window.removeEventListener("scroll", handleScroll);
      }
      
    }, [size]);
    return (
      <div className='font-font1 '>
        <Section_1 />
        <Section_2 />
        {(scrollY > 600 || size > 600) ? <Section_3 />: null}
        <Footer />
      </div>
    )
}

export default Page

