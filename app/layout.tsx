import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Banner from '@components/banner'
import '@styles/globals.css'

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
          <section 
            className='lg:fixed lg:left-0 flex flex-col justify-center lg:w-[35%] lg:h-screen mt-[50px] lg:mt-[0px] mb-[20px] lg:mb-[0px]'> 
            <Banner/>
          </section>
          <section className='relative bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 lg:w-[65%]'>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
