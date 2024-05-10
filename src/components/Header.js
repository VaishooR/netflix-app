import React from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";



const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  console.log('userSelector--',user)


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log('eroor')
    });
  }
  return (
    <div className="absolute w-screen px-40 py-2 bg-gradient-to-b from-black z-40 flex justify-between">
        <img className='w-44' src='/assets/netflix-logo.png' alt='logo'/>
       {user &&  <div className="flex p-4">
          <img src={user?.photoURL} className='w-10 h-10 mx-2'/>
          <button onClick={handleSignOut} className='text-white'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header