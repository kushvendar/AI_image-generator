import React from 'react'
import {assets} from '@/assets/assets'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
     <div className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Image src={assets.logo} alt='logo' />  
    </div>   
    </div>
  )
}

export default Navbar
