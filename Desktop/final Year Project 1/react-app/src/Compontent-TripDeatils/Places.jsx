import React from 'react'

const Places = ({trip}) => {
 if(!trip || !trip.tripData || !trip.tripData.itinerary){
  return <p className='text-center text-xl text-red-500'> No trip data available</p>
 }
 const sortedDays = Object.keys(trip.tripData.itinerary).sort(
  (a, b) => Number(b.replace("day", "")) - Number(a.replace("day", ""))
)
const sorteDays = sortedDays.map((day)=>{
  const dayData = trip?.tripData?.itinerary[day];
  return {
    day,
    theme:dayData?.theme,
    bestTimeToVisit:dayData?.bestTimeToVisit,
    activities:dayData?.activities.map((activity)=>(
      {
        placeName:activity?.placeName,
        placeDetails:activity?.placeDetails||"No details Available",
        ticketPricing:activity?.ticketPricing,
        travelTime:activity?.travelTimeBetweenLocations,
        
      }

    )) 
   }
})
 
 console.log(sortedDays)
 //console.log(Object.keys(trip?.tripData?.itinerary))
 
  return (
    <div className='max-w-[1000px] md:mx-auto mx-24 mt-10'>
      <h1 className='text-center text-2xl lg:text-4xl font-bold drop-shadow-lg text-neutral-700'>Places</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 p-2 mt-7'>

        


      </div>

    </div>
  )
}

export default Places