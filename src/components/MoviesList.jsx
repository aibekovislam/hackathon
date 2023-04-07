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
            <p>{item.year}</p>
            <p>{item.director}</p>
            <img src={item.posterUrl} />
          </>
        )
      }) }
    </div>
  )
}

export default MoviesList