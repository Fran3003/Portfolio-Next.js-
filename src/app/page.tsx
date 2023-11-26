import { Cover } from '@/components/Cover'
import { Transition } from '@/components/Transition/Transition'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Franco Emanuel Rantucho',
  description: 'Portfolio - Next.js 14',
}

export default function Home() {
  return (
    <main className="bg-[#222831] h-[100vh]">
      {/* <Transition /> */}
      <Cover />
    </main>
  )
}
