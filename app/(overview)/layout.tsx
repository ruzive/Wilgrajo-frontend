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

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    //     
    
    //       <section 
    //         className='lg:fixed lg:left-0 flex flex-col justify-center lg:w-[31%] lg:h-screen mt-[50px] lg:mt-[0px] mb-[20px] lg:mb-[0px]'> 
    //         <Banner placeholder='Search by intent, location and condition.'/>
    //         <Footer/>
    //       </section>
    //       <section className='relative bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 lg:w-[69%]'>
    //         <Nav/>
    //         {children}
    //       </section>
    //     </main>
    //   </body>
    // </html>

    // <main className='flex flex-col lg:flex-row justify-end min-h-screen'> 
    //   {/* <section className='lg:fixed lg:left-0 flex flex-col justify-center lg:w-[31%] lg:h-screen mt-[50px] lg:mt-[0px] mb-[20px] lg:mb-[0px]'> 
    //     <Banner placeholder='Search by intent, location and condition.'/>
    //     <Footer/>
    //   </section> */}
    //   <section className='relative bg-gradient-to-tr from-[#558b00]/60 to-[#fe3e0a]/60 lg:w-[69%]'>
    //     {children}
    //   </section>
    // </main>

    // <div className='flex flex-col lg:flex-row justify-end min-h-screen'>
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
    // </div>


  )
};
