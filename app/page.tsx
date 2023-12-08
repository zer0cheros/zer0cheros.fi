import React from 'react'
import Page from './components/Page'
import { ProfilePageJsonLd } from 'next-seo';


export default function Home() {
  return (
    <>
    <div className='font-font1 min-h-screen '>
      <Page /> 
    </div>
    <ProfilePageJsonLd
    lastReviewed="2014-10-01T19:30"
    useAppDir={true}
    breadcrumb={[
      {
        position: 1,
        name: 'Abour me',
        item: 'https://zer0cheros.fi#abouts',
      },
      {
        position: 2,
        name: 'projects',
        item: 'https://zer0cheros.fi#projects',
      },
      {
        position: 3,
        name: 'contact',
        item: 'https://zer0cheros.fi#contact',
      },
    ]}
  /></>
  )
}
