import './globals.css'
import type { Metadata } from 'next'
import { Commissioner } from 'next/font/google'

const commissioner = Commissioner({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crowdfunding',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={commissioner.className}>{children}</body>
    </html>
  )
}