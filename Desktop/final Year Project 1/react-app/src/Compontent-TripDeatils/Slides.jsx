import React from 'react'

const Slides = ({img}) => {
  return (
    <div>
        {
            img.map((item,i)=>(
                <img src={item} alt='images' key={i}/>
            ))
        }
    </div>
  )
}

export default Slides