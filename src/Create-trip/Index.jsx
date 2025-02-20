import React, { useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { chatSession } from '@/Services/AIModal';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

import {FcGoogle} from "react-icons/fc"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/Services/firebaseConfig';
import { useNavigate } from 'react-router-dom';


const CreateTrip = () => {
  const[place,setPlace]= useState("");
  const [formData,setFormData]= useState([]);
  const[openDailog,setOpenDailog]=useState(false);
  const[loading,setLoading]= useState(false);
  const navigate= useNavigate();

  const handleChange =(e)=>{
    const{value}= e.target;
    setPlace(value);
    setFormData(prevFormData =>({
      ...prevFormData,
      place:value
    }))

  }

  // here we stroring  and handling the in formation
  const handleInputChange =(name,value)=>{
    if(name=='noOfDays' && value>5){
      alert("enter date within 5days");
      
      return;
    }
    setFormData({
      ...formData,
      [name]:value
    })
    
  }
// for google authentication
  const login = useGoogleLogin({
    onSuccess:(codeResp)=>GetUserProfile(codeResp),
    onError:(error)=>console.log(error)
  })


    // this function used to ai prompt
 const OnGenerateTrip =async()=>{

  const user=localStorage.getItem('user');

  if(!user){
    setOpenDailog(true);
    return;
    
  }
  if(formData.noOfDays>5 && !formData.place || !formData.budget ||!formData.traveler){
    //toast("Enter all details");
    alert("enter full details")
    return;
  }
  setLoading(true);
  const FINAL_PROMPT=AI_PROMPT .replace('{location}', formData?.place)
  .replace('{totalDays}', formData?.noOfDays)
  .replace('{traveler}', formData?.traveler)
  .replace('{budget}', formData?.budget)
  .replace('{totalDays}', formData?.noOfDays)
 

  const result = await chatSession.sendMessage(FINAL_PROMPT);
  console.log(result.response.text());
  setLoading(false);
  SaveAiTrip(result.response.text());
 }

  // get userprofile when there login
  const GetUserProfile = (tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`,{
      headers:{
        Authorization:`Bearer ${tokenInfo.access_token}`,
        Accept:'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDailog(false);
      OnGenerateTrip();
    })
  }


// firebase part 
  const SaveAiTrip = async(TripData)=>{
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection:formData, // storing user trip details
      tripData: JSON.parse(TripData),// storing data from ai model
      userEmail:user.email, // storing email from user store in local storage
      id: docId
    });
    setLoading(false);
    navigate('/view-trip/'+docId);


  }
  
 // useEffect(()=>{
    
 //   console.log(formData);

 // },[formData])



  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 border mx-1'>
        <h2 className='font-bold text-3xl'>Tell Us Your Travel Prefrenece 🚞</h2>
        <p className='mt-3 text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iste corporis quae impedit, quod reprehenderit vitae earum aliquid natus exercitationem ipsa ex, alias repellendus sed, ad odit eveniet illum similique?</p>
        <div className='mt-20 flex flex-col gap-10'>
            
           
                <div>
                <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
              {/*  <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}/>*/}
                <input type="text" name='place' value={place}className='border rounded min-w-[500px] ring-1 ring-amber-300 outline-none focus:ring-2'
                onChange={handleChange} />   
                </div> 
                <div>
                <h2 className='text-xl my-3 font-medium'>How Many days are you want to trip </h2>
                <Input placeholder={"enter here"} type="number"
                onChange={(e)=>handleInputChange("noOfDays",e.target.value)}/>
                </div>     
        </div>
        <div>
        <h2 className='text-xl my-3 font-medium'>What is Your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {
            SelectBudgetOptions.map((item,i)=>(
              <div key={i} className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData.budget==item.title && 'shadow-lg border-black'}`} onClick={()=>handleInputChange('budget',item.title)}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>

                </div>
            ))
          }
        </div>

        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelesList.map((item,i)=>(
              <div key={i} className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData.traveler== item.people && 'shadow-lg border-black'}` } onClick={() => handleInputChange('traveler', item.people)}  >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>

                </div>
            ))}
          </div>
        </div>


        <div className='flex justify-end mt-1'>
          <Button disabled ={loading} onClick={OnGenerateTrip}>

            {
              loading? <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin'/>:'Generate Trip'
            }
            Generate Trip</Button>
        </div>
        <Dialog open={openDailog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sign in with Google</DialogTitle> {/* Required for accessibility */}
              </DialogHeader>
              <DialogDescription>
                <img src="/logoipsum-325.svg" alt="logo" />
                
                <Button className="w-full mt-5 flex gap-4 items-center" onClick={login}>
                  <FcGoogle className="h-7 w-7" />
                  Sign in With Google
                </Button>
              </DialogDescription>
            </DialogContent>
         
         </Dialog>




    </div>  // develop the loading button
  )
}

export default CreateTrip


