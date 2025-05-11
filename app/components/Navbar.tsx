import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-8 py-4 border-b border-b-[#e6ebf4]'>
        <div>
          <Image className='w-28 object-contain' src={assets.logo} alt='logo'/>
        </div>
        <div>
        <div className='font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md '>
          Create
        </div>
       </div>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)]'>
        
      </main>

    </div>
      
  )
}

export default Navbar
