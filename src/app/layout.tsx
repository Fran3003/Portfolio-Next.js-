import type { Metadata } from 'next'
import { Prosto_One } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import Navbar from '@/components/NavBar/Navbar'

const prosto = Prosto_One({ subsets: ['latin'], weight: "400"  })

export const metadata: Metadata = {
  title: 'Portfolio Franco Emanuel Rantucho',
  description: 'Portfolio - Next.js 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={prosto.className}>
        <Navbar />
        <Header />
        {children}
        </body>
    </html>
  )
}
