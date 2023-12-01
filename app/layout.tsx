import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { ProfilePageJsonLd } from 'next-seo';
import type { Metadata } from 'next';


const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'Zer0cheros.fi',
  description: 'Hi, im Zer0cheros, teachering development for students ', 
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="Dyh_biTQza4pp3-P5BtTrjft_H9pha5eVGaFx6GsGbc" />
      
      <body className={inter.className}>
        {children}           
        </body>
        <Analytics />
        <ProfilePageJsonLd
      lastReviewed="2014-10-01T19:30"
      useAppDir={true}
      breadcrumb={[
        {
          position: 1,
          name: 'Abour me',
          item: 'https://zer0cheros.fi/#abouts',
        },
        {
          position: 2,
          name: 'projects',
          item: 'https://zer0cheros.fi/#projects',
        },
        {
          position: 3,
          name: 'contact',
          item: 'https://zer0cheros.fi/#contact',
        },
      ]}
    />
    </html>
  )
}
