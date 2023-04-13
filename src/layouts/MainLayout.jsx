import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import '../static/style.css';
import MyFooter from "../components/footer";

function MainLayout() {
  return (
    <>
      <div className="mainBlock">
        <Navbar/>
        <Outlet/>
        {/* <MyFooter/> */}
      </div>
      <div className='mainBlockMobile'>
        <Navbar/>
        <Outlet/>
        {/* <MyFooter/> */}
      </div>
    </>
  )
}

export default MainLayout