import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import '../static/style.css'

function MainLayout() {
  return (
    <div className='mainBlock'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout