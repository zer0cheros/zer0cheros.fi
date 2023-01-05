import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import Footer from '../components/footer/Footer'
import Section_1 from '../components/section_1/Section_1'

const Section_2 = dynamic(() => import('../components/section_2/Section_2'))
const Section_3 = dynamic(() => import('../components/section_3/Section_3'))

const Home: NextPage = () => {
  const targetRef = useRef<any>()
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
      console.log('större');
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

export default Home
