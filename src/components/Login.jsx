import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>
      <form className="absolute  p-12 bg-black w-4/12  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <div className="flex items-center text-gray-400 p-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600 rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            />
            <p className="ml-2">Remember me</p>
            <p className="ml-20">Need help?</p>
          </div>
        ) : null}

        {isSignInForm ? (
          <div className="my-4 flex text-xl space-x-2 ">
            <p>New to Netflix?</p>
            <p
              onClick={toggleSignInForm}
              className="text-red-600 cursor-pointer"
            >
              Sign up now.
            </p>
          </div>
        ) : (
          <div className="my-4 flex text-xl space-x-2 ">
            <p>Already a User?</p>
            <p
              onClick={toggleSignInForm}
              className="text-red-600 cursor-pointer"
            >
              Sign in now.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
