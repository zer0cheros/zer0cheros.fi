import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        {children}           
        </body>
        <Analytics />
        
    </html>
  )
}
