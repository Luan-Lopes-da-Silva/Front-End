import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
      <nav>
      <ul>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </ul>
      </nav>  
      </header> 
        {children}
      </body>
    </html>
  )
}
