import InfoSection from '@/view-trip/[trip-id]/Compontents/InfoSection';
import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '@/Services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Hotels from './Compontents/Hotels';
import PlacesToVisit from './Compontents/PlacesToVisit';
const Viewtrip = () => {
    const {tripId}=useParams();
    console.log(tripId)
    const [trip,setTrip]=useState([]);
    const GetTripData=async()=>{
        const docRef=doc(db,'AITrips',tripId);
        const docSnap=await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Dodcument:",docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No Such Document");
            toast('No trip Found!')
        }
    }
    useEffect(()=>{
        GetTripData();
    },[tripId])
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
        
        <InfoSection trip={trip}/>
        <Hotels trip={trip}/>
        <PlacesToVisit trip={trip}/>

        
    </div>
  )
}

export default Viewtrip