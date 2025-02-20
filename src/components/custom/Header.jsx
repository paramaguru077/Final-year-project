import React, { useEffect,useState } from 'react'
import {Button} from '../ui/button.jsx'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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
import { googleLogout,useGoogleLogin } from '@react-oauth/google';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDailog, setOpenDailog] = useState(false);
  useEffect(()=>{
    console.log(user);
  },[]);
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })
  const GetUserProfile = async(tokenInfo) => {
    console.log("HERE",tokenInfo)
     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDailog(false);
      window.location.reload()
    })
  }
  const image = user?.picture;
  return (
    <div className='p-2 flex  justify-between items-center shadow-xl px-5'>
      <img src='./logoipsum-325.svg' alt="logo" />
      
      <div>
        {
          user?
          <div className='flex items-center gap-3'>
            
            <a href='/create-trip'>
            <Button variant="outline" 
            className="rounded-full">+ Create Trip</Button>
            </a>
            <a href='/my-trips'>
            <Button variant="outline" 
            className="rounded-full">My Trips</Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <button className='border px-3 py-2 rounded-full focus:ring-1'>Logout</button>
              </PopoverTrigger>
              <PopoverContent>
              <img src={image} alt="" className='w-12 rounded-full' />
                <h2 className='cursor-pointer' onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Logout</h2>
              </PopoverContent>
            </Popover>

            </div>:
            <Button onClick={()=>setOpenDailog(true)}>Sign In</Button>
        }
      </div>
      <Dialog open={openDailog}>

<DialogContent>
  <DialogHeader>

    <DialogDescription>
      <img src="/logo.svg" />
      <h2 className='font-bold text-lg mt-7'>Sign In With Google</h2>
      <p>Sign in to the App with Google authentication securely</p>

      <Button

        onClick={login}
        className="w-full mt-5 flex gap-4 items-center">

        <FcGoogle className='h-7 w-7' />
        Sign In With Google

      </Button>

    </DialogDescription>
  </DialogHeader>
</DialogContent>
</Dialog>
    </div>
  )
}

export default Header