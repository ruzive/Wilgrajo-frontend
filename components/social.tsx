import { FunctionComponent } from 'react'
import Link from 'next/link'
import { GiMineralHeart } from 'react-icons/gi'
import { FaTwitterSquare, FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa'

const Socials: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center">
        <div className='flex justify-center font-semibold'>
            Made with 
            <span className='mx-[5px]'>
                <GiMineralHeart size={25}/>
            </span> Ruzive
        </div>
        <div className='flex justify-center font-semibold my-[10px]'>
            Hang out with us on our socials
            <span className='mx-[5px]'>
                <Link href='#' className='shadow-2xl bg-neutral-600/30 hover:text-neutral-300 hover:bg-neutral-600/60 transition duration-300 cursor-pointer my-[10px]'>
                <FaTwitterSquare size={25}/></Link>
            </span>
            <span className='mx-[5px]'>
            <Link href='#' className='font-bold shadow-2xl rounded-lg bg-neutral-600/30 text-neutral-700 hover:text-neutral-300 hover:bg-neutral-600/60 transition duration-300 cursor-pointer my-[10px]'>
                <FaFacebookSquare size={25}/></Link>
            </span>
            <span className='mx-[5px]'>
            <Link href='#' className='font-bold shadow-2xl rounded-lg bg-neutral-600/30 text-neutral-700 hover:text-neutral-300 hover:bg-neutral-600/60 transition duration-300 cursor-pointer my-[10px]'>
                <FaWhatsappSquare size={25}/></Link>
            </span> 
        </div>
        {/* <Link href="/contribute" className='font-bold shadow-2xl rounded-lg bg-neutral-600/30 text-neutral-700 hover:text-neutral-300 hover:bg-neutral-600/60 transition duration-300 w-max p-2 cursor-pointer my-[10px]'>
            <div>
                Add Property
            </div>
        </Link> */}
    </div>
  )
}

export default Socials