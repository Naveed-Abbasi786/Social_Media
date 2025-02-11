import React, { Suspense } from "react";
import Navbar from "../shared/navbar/navbaar";
import Drawer from "../shared/drawer/drawer";
import { Outlet } from "react-router-dom";
import Loading from "../componnets/loading";
import Footer from "../componnets/Footer";
import { useSelector } from "react-redux";

export default function Layout() {
  const isOpen = useSelector((state) => state.drawer.isOpen);
   const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={`flex  ${isDarkMode ? 'bg-[#091025]' : 'bg-[#F7F8F9]'}  flex-col min-h-screen w-full`}>
      {/* Navbar */}
      <div
        className={` fixed top-0 left-0 ${
          isOpen ? "lg:pl-[230px]" : "lg:pl-[60px]"
        } w-full z-50 `}
      >
        <Navbar />
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`hidden z-50 ${
          isOpen ? "w-[7%]" : "w-[3%]"
        }   lg:block fixed`}
      >
        <Drawer />
      </div>

      {/* Main Content Area */}
      <div
        className={`flex  ${isDarkMode ? '!bg-[#091025]' : 'bg-[#F7F8F9]'} lg:mt-12 mt-24  :w-auto ${
          isOpen ? "lg:ml-[240px]" : "lg:ml-[60px]"
        }  overflow-hidden flex-col `}
      >
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <div className="mt-12">
          <Footer />
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}
