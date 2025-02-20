import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreateTrip from './Create-trip/Index'
import Header from './components/custom/Header'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './view-trip/[trip-id]'
import MyTrips from './my-trips'
const router = createBrowserRouter(
  [
   {
    path:'/',
    element:<App/>
   },
   {
    path:'/create-trip',
    element: <CreateTrip/>
   },
   {
    path:'/view-trip/:tripId',
    element:<Viewtrip/>
   },
   {
    path:'/my-trips',
    element:<MyTrips/>

   }

  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="786428451608-7od0aom1pn7lie0scmubgck865bgli0o.apps.googleusercontent.com">
        <Header/>
      <Toaster/>
      <RouterProvider router={router}/>
     </GoogleOAuthProvider>;
   
  </StrictMode>,
)
