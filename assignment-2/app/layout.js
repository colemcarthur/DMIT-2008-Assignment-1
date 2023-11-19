import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Peppers Plus',
  description: 'DMIT 2008 Assignment 2 | Cole McArthur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
