import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import MainScreen from '../pages/MainScreen'

import '../static/style.css'

function MainRoutes() {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>}></Route>
        </Route>
        <Route path='/main' element={<MainScreen/>}/>
    </Routes>
  )
}

export default MainRoutes