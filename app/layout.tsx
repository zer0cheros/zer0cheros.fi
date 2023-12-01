
import '../styles/globals.css'
import { Inter } from 'next/font/google'


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
      <body className={inter.className}>
        {children}           
        </body>
    </html>
  )
}
