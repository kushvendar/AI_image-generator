import React, { useRef, useState } from 'react'
import default_image from '../Assets/default_image.svg'
import { env } from 'process'



const ImgGenerator = () => {

  const [imgUrl,setImgurl]=useState('/')

  let inputRef=useRef(null)

  const imageGenerator=async ()=>{
    if(inputRef.current.value===""){
      return 0
    } 
    const key=env(OPENAI_API_KEY)
    const response=await fetch(
      "https://api.openai.com/v1/images/generations", 
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}` ,
          "User-Agent":"Chrome",
        },
        body: JSON.stringify({
          prompt:`${inputRef.current.value}`,
          n:1,
          size:"512x512"
        }),
      }
    )
    const data=await response.json()
    console.log(data)
  }
  return (
    <div className='flex flex-col m-auto items-center mt-[80px] mb-[20px] gap-[30px] '>
        <div className='text-[70px] text-white font-medium pb-[20px]'>AI Image <span className='text-[#de1b89] font-semibold'>Generator</span></div>
        <div className='flex flex-col '>
            <div className='w-[512px] mb-[25px]'><img src={imgUrl==="/"?default_image:imgUrl} className='rounded-[15px]' alt="ai_img" /></div>
        </div>
        <div className='flex w-[1000px] h-[65px] justify-around  items-center rounded-[50px] bg-[#1f3540]'>
            <input type="text" ref={inputRef} className='w-[600px] h-[50px] bg-transparent text-[18px] pl-[35px] mr-[35px] text-white placeholder:text-[#999]' placeholder='Describe what you want to see' />
            <div className='flex items-center justify-center w-[300px] h-[65px] text-white rounded-[50px] text-[20px] ml-[55px] cursor-pointer bg-[#de1b89]' onClick={()=>{imageGenerator()}}>Generate</div>
            </div>
    </div>
  )
}

export default ImgGenerator
