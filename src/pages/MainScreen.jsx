import React from 'react'
import MovieListMobile from '../components/MovieListMobile'
import MoviesList from '../components/MoviesList'

function MainScreen() {
  return (
    <>
        <div className='pc'>
            <MoviesList/>
        </div>
        <div className='mobile'>
            <MovieListMobile/>
        </div>
    </>
  )
}

export default MainScreen