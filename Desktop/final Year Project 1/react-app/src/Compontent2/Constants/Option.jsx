export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛵',
        people:'5 to 10 People'
    },
]


export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
]


export const AI_PROMPT = `Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget.  
Give me:  
1. Hotels options list with:  
   - HotelName, Hotel Address, Price in rupees, Hotel Image URL, Geo Coordinates, Rating, Description.  
2. Restaurants options list with:  
   - Restaurant Name, Address, Cuisine Type, Price Range in rupees, Rating, Image URL, Geo Coordinates, Description.  
3. Suggested itinerary with:  
   - Place Name, Place Details, Place Image URL, Geo Coordinates, Place Address, Ticket Pricing in rupees, Travel Time between locations for {totalDays} days, with each day's plan including the best time to visit.  

Return the response in JSON format.`;
