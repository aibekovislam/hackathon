import React, { useEffect } from 'react'
import { useFilmContext } from '../contexts/FilmContext'

function MoviesList() {
  const { movies, getMovies } = useFilmContext();

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div>
      { movies.map((item) => {
        return(
          <>
            <h1>{item.title}</h1>
          </>
        )
      }) }
    </div>
  )
}

export default MoviesList