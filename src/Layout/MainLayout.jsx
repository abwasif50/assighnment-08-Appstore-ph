import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast"; // ✅ add this

const MainLayout = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-[#F1F5E8] text-base-content gap-30">
      <Navbar />
      <Toaster /> {/* ✅ Add this once for all toasts */}
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      </div>
    </>
  );
};

export default MainLayout;
