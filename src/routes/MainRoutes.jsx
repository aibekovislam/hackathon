import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignPage from '../pages/SignPage'

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signin' element={<SignPage/>}></Route>
    </Routes>
  )
}

export default MainRoutes