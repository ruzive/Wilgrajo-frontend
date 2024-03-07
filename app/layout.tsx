import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Banner from '@components/Banner'
import '@styles/globals.css'
import Nav from '@components/navbar/Nav'
import Footer from '@components/Footer/footer'
import Cards from '@components/Cards'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wilgrajo Realtors',
  description: 'Finding your next home made easy! We do it all !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex flex-col lg:flex-row justify-end min-h-screen'> 
          <section className='relative bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 lg:w-[100%]'>
            <Nav/>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
