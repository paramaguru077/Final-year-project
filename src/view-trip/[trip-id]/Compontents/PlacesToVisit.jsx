import React from 'react'
import PlaceDetails from './PlaceDetails'
const PlacesToVisit = ({trip}) => {
  return (

    <div>
        <h2 className='font-bold text-lg'>Places to Visit</h2>
    
        <div>
            {Object.entries(trip.tripData?.itinerary||{}).map(([day,item],index)=>(
                <div className='mt-5' key={index}>
                    <h2 className='font-medium text-lg'>{day}</h2>
                    <p className='text-sm text-gray-500'>Best Time To Visit:{item.bestTimeToVisit}</p>
                    <div className=' border'>
                    {Array.isArray(item.activities) && (
              <PlaceDetails places={item.activities} />
            )}
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit