import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/assets/App-Error.png"; 

const ErrorApp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-4">



      <img
        src={errorImg}
        alt="App Not Found"
        className="w-72 h-72 object-contain mb-6"
      />
      <h1 className="text-4xl font-bold text-blue-950">App Not Found </h1>
      <p className="text-gray-500 max-w-md">
        The App you are requesting is not found on our system. please try another apps
      </p>


      
      <Link to="/all-apps" className="btn bg-[#9f62f2] text-white mt-4">
          Go Back
      </Link>
    </div>
  );
};

export default ErrorApp;
