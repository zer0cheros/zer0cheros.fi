import type { NextPage } from 'next'
import Footer from '../components/footer/Footer'
import Section_1 from '../components/section_1/Section_1'
import Section_2 from '../components/section_2/Section_2'
import Section_3 from '../components/section_3/Section_3'


const Home: NextPage = () => {
  return (
    <div className='font-font1 '>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Footer />
    </div>
  )
}

export default Home
