import React, { useState, useRef } from "react";
import Header from "./Header";
import "../App.css";
import {validateEmail, validatePassword, validateUserName} from "../utils/validateForm";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  const [signup, setsignup] = useState(false);
  const [emailErrorMessage, setemailErrorMessage] = useState("");
  const [passowrdErrorMessage, setpasswordErrorMessage] = useState("");
  const [usernameErrorMessage, setusernameErrorMessage] = useState("");
  const [errorMsg, seterrorMsg] = useState("");

  const dispatch=useDispatch();

  const username = useRef();
  const email = useRef();
  const password = useRef();

  const handleSignInForm = () => {
    const emailError = validateEmail(email.current.value);
    const passwordError = validatePassword(password.current.value);
    setemailErrorMessage(emailError);
    setpasswordErrorMessage(passwordError);

    if (emailError !== null || passwordError !== null) return;

    if (signup) {
      const usernameError = validateUserName(username.current.value);
      setusernameErrorMessage(usernameError);

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {displayName: username.current.value, photoURL: "https://th.bing.com/th/id/OIP.-d8GY5axNJZYoXsNOUJ4iwAAAA?rs=1&pid=ImgDetMain"})
            .then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            })
            .catch((error) => {
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + " - " + errorMessage);
        })

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>

      <Header />

      <div className="absolute">
        <img className="login-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_medium.jpg"/>
      </div>

      <div>
        <form onSubmit={(e) => e.preventDefault()} className="bg-black bg-opacity-70 absolute my-32 mx-auto right-0 left-0 w-3/12 p-12 rounded-md">
          
          <h1 className="mb-4 font-bold text-3xl text-white">{signup ? "Sign Up" : "Sign In"}</h1>
          
          {/* User Name */}
          {signup && (
            <div>
              <input ref={username} type="text" className="p-2 my-4 w-full rounded-sm opacity-70" placeholder="Your Name"/>
              <p className="text-red-600">{usernameErrorMessage}</p>
            </div>
          )}
          
          {/* Email */}
          <input ref={email} type="text" className="p-2 my-4 w-full rounded-sm opacity-70" placeholder="Email or mobile number"/>
          <p className="text-red-600">{emailErrorMessage}</p>

          {/* Password */}
          <input ref={password} type="password" className="inp p-2 my-4 w-full rounded-sm opacity-70" placeholder="Password"/>
          <p className="text-red-600">{passowrdErrorMessage}</p>
          <p className="text-red-600">{errorMsg}</p>

          {/* Submit Button */}
          <button type="submit" className="bg-red-600 text-white w-full p-2 my-4 rounded-sm" onClick={handleSignInForm}>{signup ? "Sign Up" : "Sign In"}</button>
          
          {/* SignIn / SignUp */}
          <p className="py-4 text-white">
            {signup ? "Already a member?" : "New to Netflix?"}
            <span onClick={() => {setsignup(!signup);}} className="cursor-pointer font-bold pl-1">
              {signup ? "Sign In" : "Sign Up Now"}
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
