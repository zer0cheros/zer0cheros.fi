'use client'
import React, {Suspense} from 'react'
import Section_1 from './section_1/Section_1';
import Section_2 from './section_2/Section_2';
import Footer from './footer/Footer';
import Section_3 from './section_3/Section_3';





const Page = () => {
    return (
      <Suspense fallback={'...loading'}>
        <Section_1 />
        <Section_2 />
        <Section_3/>
        <Footer />
      </Suspense>
    )
}

export default Page

