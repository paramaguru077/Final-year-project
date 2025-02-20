import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { Input } from '../ui/input'
const Hero = () => {
  return (
    <div className=' flex flex-col items-center mx-[30px] gap-9 mt-15'>
        <h1 className='font-extrabold text-[30px] text-center'>
           <span className='text-[#f56551]'> Discover Your Next Adventure with AI:</span> <br />Personalized Ltineraries at Your FingerTips
        </h1>
        <p className='text-[16px] text-center text-neutral-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, delectus. Inventore iste, ipsam dolorem enim praesentium sapiente animi eligendi, quam vitae dolores soluta libero quibusdam? Nostrum ipsam laudantium laboriosam quod!</p>
        <Link to='/create-trip'>
        <Button>Get Started ,It's Free</Button>
        </Link>
        
    </div>
  )
}

export default Hero