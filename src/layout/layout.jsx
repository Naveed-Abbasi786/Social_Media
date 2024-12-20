import React, { Suspense } from "react";
import Navbar from "../shared/navbar/navbaar";
import Drawer from "../shared/drawer/drawer";
import { Outlet } from "react-router-dom";
import Loading from "../componnets/loading";
import Footer from "../componnets/Footer";

export default function Layout() {
  return (
  
    // <div className="flex flex-col min-h-screen w-full">
    //   {/* Navbar */}
    //   <div className=" pl-[230px] w-full z-50 ">
    //     <Navbar />
    //   </div>

    //   {/* Sidebar Drawer */}
    //   <div className="hidden lg:block z-50">
    //     <Drawer />
    //   </div>

    //   {/* Main Content Area */}
    //   <div className="flex bg-[#F7F8F9] w-[81%] overflow-hidden flex-col  ml-auto">
    //     <Suspense fallback={<Loading />}>
    //       <Outlet />
    //     </Suspense>
    //     <div className="mt-12">
    //     <Footer  />
    //     </div>
    //   </div>

    //   {/* Footer */}
    // </div>


    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar */}
      <div className="lg:pl-[230px] w-full z-50 ">
        <Navbar />
      </div>

      {/* Sidebar Drawer */}
      <div className="hidden lg:block fixed top-0 left-0 z-50">
        <Drawer />
      </div>

      {/* Main Content Area */}
      <div className="flex bg-[#F7F8F9] lg:w-[81%] w-full overflow-hidden flex-col  ml-auto">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <div className="mt-12">
        <Footer  />
        </div>
      </div>

      {/* Footer */}
    </div>

    
  );
}
