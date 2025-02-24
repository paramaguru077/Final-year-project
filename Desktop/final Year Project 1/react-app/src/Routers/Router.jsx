import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import Home from '../Compontent1/Home'
import CreateTrip from '../Compontent2/CreateTrip'

const Router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>
        },{
            path:'/create-trip',
            element:<CreateTrip/>
        }
    ]
)
 

export default Router