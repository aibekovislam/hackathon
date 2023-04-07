import React from 'react'
import MoviesList from '../components/MoviesList'

function MainScreen() {
  return (
    <>
        <div className='pc'>
            <MoviesList/>
        </div>
        <div className='mobile'>
            <h1>Hello mobile</h1>
        </div>
    </>
  )
}

export default MainScreen