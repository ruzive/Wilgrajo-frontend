import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@styles/globals.css'
import Footer from '@components/Footer/footer'
import Banner from '@components/Banner' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wilgrajo Realtors',
  description: 'Finding your next home made easy! We do it all !',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <main className='flex flex-col lg:flex-row justify-end min-h-screen'> 
        <section 
            className='lg:fixed lg:left-0 rounded-lg flex flex-col justify-center lg:w-[31%] bg-gray-50 lg:h-screen mb-[20px] lg:mb-[0px]  mx-auto'> 
            <Banner placeholder='Search by intent, location and condition.'/>
            <Footer/>
        </section>
         <section className='relative transparent lg:w-[69%]'>
            {children}
        </section>
    </main>
  )
};
