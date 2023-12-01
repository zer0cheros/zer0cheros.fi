import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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
      <meta charSet="utf-8" />
      <DefaultSeo 
      title={metadata.title}
      description={metadata.description}
      themeColor='#FFFFFF'
      />
      <meta name="viewport" content="width=device-width" />
      <body className={inter.className}>
        {children}           
        </body>
        <Analytics />
    </html>
  )
}
