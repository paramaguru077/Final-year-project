import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider } from 'react-router-dom'

import Router from './Routers/Router.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="786428451608-o1ia6lreo2rjh3g294bcoshnqi81khtl.apps.googleusercontent.com">
       <RouterProvider router={Router}/>

    </GoogleOAuthProvider>
    
  </StrictMode>,
)



