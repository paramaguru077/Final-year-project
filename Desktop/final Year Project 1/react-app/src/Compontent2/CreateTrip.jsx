import React, { useEffect, useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { AI_PROMPT,SelectBudgetOptions,SelectTravelesList } from './Constants/option';
const CreateTrip = () => {
    const data=[{
        place:"",
        days:"",
        budget:"",
        members:""
    }]
    const [formData,setFormData]=useState(data);
    // to handle formData
    const handleFormData= (name,value)=>{
        if(name=='days' && value>5){
            alert("enter Days within 5 days");
            return;
        }
        setFormData({
            ...formData,
            [name]:value
        })


    }
    useEffect(()=>{
        console.log(formData);
    },[formData]);


  return (
    <div className='max-w-[1330px] m-auto w-full   bg-amber-50'>
        <div className='flex flex-col gap-2 items-center'>
        <span className='text-3xl text-amber-400 rounded-2xl cursor-pointer hover:scale-120 transition-all duration-100'><FaShoppingBag /></span>
        <h1 className='text-2xl md:text-3xl font-bold drop-shadow-xl text-amber-800 tracking-wider text-center'>Tell Us Your Travel Prefrenece 🚞</h1>
        <p className='mt-2  text-[17px] md:text-xl text-center text-orange-400'>Plan your journey effortlessly by creating a new trip. Fill in the details and start your adventure!</p>
        </div>

        <div className='mt-8 ' >
            <div className='flex flex-col items-center'>
                <h1 className='text-xl text-[#EB5A3C]'>What is destination of choice?</h1>
                <input type="text" className='outline-none border border-amber-300 min-w-8/12 p-1 rounded-lg mt-3 focus:ring-1 ring-amber-100 ' value={formData.place} onChange={(e)=>handleFormData("place",e.target.value)} />
            </div>
            <div className='flex flex-col items-center mt-3'>
                <h1 className='text-xl text-[#EB5A3C]'>How Many days are you want to trip</h1>
                <input type="number" className='outline-none border border-amber-300 min-w-8/12 rounded-lg mt-3 focus:ring-1 ring-amber-100 p-1' value={formData.days} onChange={(e)=>handleFormData("days",e.target.value)}  />
            </div>

        </div>
        
         <div className='flex flex-col items-center mt-4'>
                <h1 className='text-xl text-[#EB5A3C]'>What is Your Budget?</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-4 mx-4 md:mx-1'>
                    {SelectBudgetOptions.map((item,i)=>(
                        <div className={`border border-amber-300 flex flex-col items-center hover:scale-105 hover:shadow-2xl shadow-gray-400 cursor-pointer rounded-lg p-4 transition-all duration-100 ${formData.budget==item.title && 'border-2 border-amber-500'}`} key={i} onClick={()=> handleFormData("budget",item.title)}>
                            <h2 className='text-3xl m-2 '>{item.icon}</h2>
                            <h2 className='text-xl font-medium text-[hsl(19,90%,50%)]'>{item.title}</h2>
                            <h2 className='text-[16px] text-[#c9b081] drop-shadow-xl brightness-90'>{item.desc}</h2>
                        </div>
                    ))}
                </div>


        </div>
        
        <div className='flex flex-col items-center mt-4 mx-4 md:mx-1'>
                <h1 className='text-xl text-[rgb(243,59,22)]'>Who do you plan on traveling with on your next adventure?</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-4'>
                    {SelectTravelesList.map((item,i)=>(
                        <div className={`border flex flex-col  items-center hover:scale-105 hover:shadow-2xl shadow-gray-400 cursor-pointer rounded-lg p-4 transition-all duration-100 border-amber-300 ${formData.members==item.people && 'border-2 border-amber-500 '}`} key={i} onClick= {()=>handleFormData("members",item.people)}>
                            <h2 className='text-3xl m-2 '>{item.icon}</h2>
                            <h2 className='text-xl font-medium text-[hsl(19,90%,50%)]'>{item.title}</h2>
                            <h2 className='text-[16px] text-[#c9b081] drop-shadow-xl brightness-90'>{item.desc}</h2>
                        </div>
                    ))}
                </div>


        </div>

        <div className='flex justify-center my-4'>
            <button className='px-4 py-2 text-[#fff] bg-amber-500 rounded-xl cursor-pointer hover:ring-1 ring-amber-500 hover:bg-amber-50 hover:text-amber-500 text-xl transition-all duration-150'>Generate Trip</button>
        </div>
        <div>
            <button>guru</button>
        </div>
        
        

    </div>
  )
}

export default CreateTrip
// authivation work 