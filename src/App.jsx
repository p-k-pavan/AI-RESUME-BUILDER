import { Outlet, useNavigate } from "react-router-dom"
import "./App.css"
import { useUser } from "@clerk/clerk-react"


export default function App() {
  const navigate = useNavigate();
  const {user,isLoaded,isSignedIn} = useUser();

  if(!isSignedIn && isLoaded){
    return navigate('/auth/sign-in')
  }
  return (
   <>
    <Outlet />
   </>

      
  )
}