import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  const [totalCount, setTotalCount] = useState(0);
  return (
    <div className="">
      <div className="sticky top-0 z-20">
        <NavBar totalCount={totalCount} setTotalCount={setTotalCount} />
      </div>
      <div className="bg-home-bg bg-no-repeat bg-cover py-10 min-h-screen grid place-items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
