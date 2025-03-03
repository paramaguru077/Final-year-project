import React from 'react'
import logo from '../Compontent1/Images/logo final.jpg'
import img1 from '../Compontent-TripDeatils/Images/img1.jpg'
import img2 from '../Compontent-TripDeatils/Images/img2.jpg'
import img3 from '../Compontent-TripDeatils/Images/img3.jpg'
import img4 from '../Compontent-TripDeatils/Images/img4.jpg'
import Slides from './Slides'
const InfoSection = ({trip}) => {
  const slides =[
    img1,img2,img3,img4
  ]
 
  const user = JSON.parse(localStorage.getItem('user'));
  
  return (
    <div className='bg-white  w-full'>
      <div className='px-3 py-2  flex  justify-between items-center shadow-xl'>
        <div className='flex items-center gap-3'>
          <img src={logo} alt="img" className='w-8 rounded-full' />
          <h1 className='font-mono text-3xl font-bold text-[#2c0ac4]'>Wanter trip</h1>
        </div>
        <div >
          {
            user ?
            (
              <div className='flex items-center'>
                <h1 className='text-neutral-600 text-[18px] capitalize'> {user.name}</h1>
                <span className='p-2'><img src={user.picture} alt="" className='w-12 rounded-full' /></span>

              </div>

            ):
            (
              <div className='max-w-lg'>
                <h1>Welcome Guest</h1>
                
                </div>

            )
          }
        

        </div>

      </div>
      <div className='p-3 mt-6'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-4xl md:text-5xl font-medium text-[#150d8d]'>{trip?.tripData?.location}</h1>
          <p className='text-neutral-600 text-xl'>Wow, you always know how to pick the perfect one.</p> 
        </div>
        <div className='mt-15 max-w-lg' >
          <h1 className='text-center'>Take a sneak peek at what's ahead!</h1>
         {/* <Slides img={slides}/>*/}
        </div>

        <div className='flex-col items-center justify-center  space-y-3 mb-10'>
          <p className='text-neutral-700 text-xl text-center'>Ah, these are your picks—looking great so far!</p>
          <div className='flex justify-center items-center gap-3'>
            <h1 className='bg-neutral-400 px-3 py-2 text-white rounded '>💵 {trip?.userSelection?.budget}</h1>
            <h1 className='bg-neutral-400 px-3 py-2 text-neutral-100 rounded '>👨‍👩‍👧‍👦 {trip?.userSelection?.days} People</h1>
            <h1 className='bg-neutral-400 px-3 py-2 text-neutral-100 rounded '>📆{trip?.userSelection?.members} Days</h1>

          </div>
        </div>
        





      </div>

    </div>
  )
}

export default InfoSection