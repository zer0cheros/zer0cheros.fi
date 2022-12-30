import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Footer from '../components/footer/Footer'
import Section_1 from '../components/section_1/Section_1'

const Section_2 = dynamic(() => import('../components/section_2/Section_2'))
const Section_3 = dynamic(() => import('../components/section_3/Section_3'))

const Home: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='font-font1 '>
      <Section_1 />
      <Section_2 />
      {(scrollY > 600) ? <Section_3 />: null}
      <Footer />
    </div>
  )
}

export default Home
