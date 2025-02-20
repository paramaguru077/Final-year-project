import React from 'react'
//import image from '../../public/placeholder.jpg'
import { Button } from '@/components/ui/button'
import { IoIosSend } from "react-icons/io";
const InfoSection = ({trip}) => {
  return (
    <div>
        <img src='./placeholder.jpg' alt="placeholder" className='h-[340px] w-full object-cover rounded-xl' />
        <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
           
           <h1>{trip?.userSelection?.place}</h1>
           <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-500'>{trip?.userSelection?.budget}</h2>
            <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-500'>{trip?.userSelection?.noOfDays} Days</h2>
            <h2 className='p-1 px-3 bg-gray-300 rounded-full text-gray-500'>{trip?.userSelection?.traveler}</h2>
            
           </div>

        </div>
        <Button><IoIosSend/></Button>
        </div>
    </div>
  )
}

export default InfoSection