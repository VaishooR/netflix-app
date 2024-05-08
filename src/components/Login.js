import React, { useState } from "react";
import Header from "./Header";
import "../App.css";

const Login = () => {
  const [signup, setsignup] = useState(false);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="login-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_medium.jpg"
        />
      </div>

      <div>
        <form className="bg-black bg-opacity-70 absolute my-32 mx-auto right-0 left-0 w-3/12 p-12 rounded-md">
          <h1 className="mb-4 font-bold text-3xl text-white">
            {signup ? "Sign Up" : "Sign In"}
          </h1>
          {signup && (
            <input
              type="text"
              className="p-2 my-4 w-full rounded-sm opacity-70"
              placeholder="Your Name"
            />
          )}
          <input
            type="text"
            className="p-2 my-4 w-full rounded-sm opacity-70"
            placeholder="Email or mobile number"
          />
          <input
            type="password"
            className="inp p-2 my-4 w-full rounded-sm opacity-70"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-red-600 text-white w-full p-2 my-4 rounded-sm"
          >
            {signup ? "Sign Up" : "Sign In"}
          </button>
          <p className="py-4 text-white">
            {signup ? "Already a member?" : "New to Netflix?"}
            <span
              onClick={() => {
                setsignup(!signup);
              }}
              className="cursor-pointer font-bold pl-1"
            >
              {signup ? "Sign In" : "Sign Up Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
