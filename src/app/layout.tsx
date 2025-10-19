import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'VEFA Eğitim Merkezi | MEB Onaylı İş Makineleri Kursu',
  description: 'MEB onaylı forklift, manlift ve ekskavatör operatör eğitimleri. Profesyonel eğitmen kadrosu ve modern ekipmanlarla sertifikalı eğitim.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}