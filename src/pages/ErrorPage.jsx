import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/assets/error-404.png"; // 🔸 your image path here

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-base-200 text-center p-6">
      <img src={errorImg} alt="" className="w-72 mb-6 " />
      <h1 className="text-4xl font-bold text-[#001931] mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for doesn't exist or was moved.
      </p>
      <Link
        to="/"
        className="btn btn-primary bg-[#9f62f2] text-white hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
