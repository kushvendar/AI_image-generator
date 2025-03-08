import React from 'react'
import default_image from '../Assets/default_image.svg'
const ImgGenerator = () => {
  return (
    <div>
        <div>AI Image <span>Generator</span></div>
        <div>
            <div><img src={default_image} alt="ai_img" /></div>
        </div>
    </div>
  )
}

export default ImgGenerator
