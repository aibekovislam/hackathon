import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../static/style.css";
// import Footer from "../components/Footer";
import MyFooter from "../components/footer";

function MainLayout() {
  return (
    <>
      <div className="mainBlock">
        <Navbar />
        <Outlet />
      </div>
      <div className="mainBlockMobile">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
