import { Header } from '@/components/Header'
import Navbar from '@/components/NavBar/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Franco Emanuel Rantucho',
  description: 'Portfolio - Next.js 14',
}

export default function Home() {
  return (
    <main className="bg-[#363062] h-[100vh]">
      <Navbar />
      <Header />
    </main>
  )
}
