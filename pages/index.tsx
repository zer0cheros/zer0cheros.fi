import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Footer from '../components/footer/Footer'
import Section_1 from '../components/section_1/Section_1'

const Section_2 = dynamic(() => import('../components/section_2/Section_2'))
const Section_3 = dynamic(() => import('../components/section_3/Section_3'))

const Home: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='font-font1 '>
      <Section_1 />
      {(scrollY > 10) ? <Section_2 />: null}
      {(scrollY > 300) ? <Section_3 />: null}
      <Footer />
    </div>
  )
}

export default Home
