import React from 'react';
import { Link } from 'react-router-dom';

const PlaceDetails = ({ places }) => {
  return (
    <div className="mt-3 grid md:grid-cols-2 gap-4">
      {places.map((place, i) => (
        // Link should have key
        <Link 
          key={i} 
          to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.placeName)}`} 
          target="_blank"
          className="block"
        >
          <div className="p-3 border rounded-md shadow-sm flex gap-4">
            {/* Place Image */}
            <img src='/placeholder.jpg' alt={place.placeName} className="w-32 h-32 object-cover rounded-lg" />

            {/* Place Information */}
            <div>
              <h3 className="font-semibold text-lg">{place.placeName}</h3>
              <p className="text-gray-600">{place.placeDetails}</p>
              <p className="font-medium text-green-600">Rating: {place.rating}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlaceDetails;
