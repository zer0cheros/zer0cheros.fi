'use client'
import React from 'react'
import Section_1 from './section_1/Section_1';
import Section_2 from './section_2/Section_2';
import Footer from './footer/Footer';
import Section_3 from './section_3/Section_3';





const Page = () => {
    return (
      <>
        <Section_1 />
        <div style={{backgroundPositionY: '-600px'}} className="bg-fixed bg-cover relative  bg-[url('/4.webp')]">
        <Section_2 />
        <Section_3/>
        </div>
        <Footer />
      </>
    )
}

export default Page

