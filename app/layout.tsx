import '../styles/globals.css'
import { Zen_Dots } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';


const inter = Zen_Dots({ subsets: ['latin'], weight: '400' })

export const metadata:Metadata = {
  title: 'Zer0cheros.fi',
  description: 'Hi, im Zer0cheros, teachering development for students in Pietarsaari, Finland. Creating and sharing knowledge is my passion.With over 8 years experience working as a teacher and couple of yeas working with development in classrooms.', 
  alternates: {
    canonical: 'https://www.zer0cheros.fi',
  },
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Zer0cheros' ,url: 'https://www.zer0cheros.fi' }],
  creator: 'Christian Wiss',
  keywords : ['development', 'kokkola', 'jakobstad', 'pietarsaari', 'teacher', 'programutvecklare', 'Optima', 'programmering', 'ohjelmointi'],
  publisher: 'Christian Wiss',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="Dyh_biTQza4pp3-P5BtTrjft_H9pha5eVGaFx6GsGbc" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="canonical" href="https://www.zer0cheros.fi" />
      <body className={inter.className}>
        {children}           
        </body>
        <Analytics />
        
    </html>
  )
}
