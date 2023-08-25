import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App 13 course',
  description: 'Web development and tutorials',
  keywords: 'web development and tutorials, web design'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
