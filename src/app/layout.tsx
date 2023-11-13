import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from '@/components/bootstrap'
import NavBar from './navBar'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'made with Next Js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      < body className={inter.className}>

        <NavBar />
        <main>
          <Container className='py-4'>
            {children}
          </Container>
        </main>

      </body >


    </html >

  )
}
