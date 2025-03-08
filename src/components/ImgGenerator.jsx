import React from 'react'
import default_image from '../Assets/default_image.svg'
const ImgGenerator = () => {
  return (
    <div className='flex flex-col m-auto items-center mt-[80px] mb-[20px] gap-[30px] '>
        <div className='text-[70px] text-white font-medium pb-[20px]'>AI Image <span className='text-[#de1b89] font-semibold'>Generator</span></div>
        <div className='flex flex-col '>
            <div className='w-[512px] mb-[25px]'><img src={default_image} className='rounded-[15px]' alt="ai_img" /></div>
        </div>
        <div className='flex w-[1000px] h-[65px] justify-around  items-center rounded-[50px] bg-[#1f3540]'>
            <input type="text" className='w-[600px] h-[50px] bg-transparent text-[18px] pl-[35px] mr-[35px] placeholder:text-[#999]' placeholder='Describe what you want to see ?' />
            <div className='flex items-center justify-center w-[300px] h-[65px] text-white rounded-[50px] text-[20px] ml-[55px] cursor-pointer bg-[#de1b89]'>Generate</div>
            </div>
    </div>
  )
}

export default ImgGenerator
