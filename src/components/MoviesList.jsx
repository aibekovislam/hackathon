import React, { useEffect } from 'react'
import { useFilmContext } from '../contexts/FilmContext'
import { ReactComponent as LogoSvg } from '../static/Filmoon.svg';
import '../static/movieList.css'

function MoviesList() {
  const { movies, getMovies } = useFilmContext();

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <>
      <div className='parent'>
          <div className='navbarInMainScreen'>
              <div className='container'>
                <div className='navbar__itemsMain'>
                  <div className='navbar__item' id='navbarItemOne'>
                    <div className='navbar__item__logo'>
                        <LogoSvg/>                  
                    </div>
                    <div className='navbar__item__nav'>
                      <ul className='navigation'>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>About</li>
                        <li>Contact</li>
                      </ul>
                    </div>
                  </div>
                  <div className='navbar__itemMainScreen'>
                    <input type='text' className='searchInput' placeholder='Search'/>
                    <button className='signIn'>Sign In</button>
                    <button className='signUp'>Sign Up</button>
                    <div className='account'></div>
                  </div>
                </div>
              </div>
          </div>
          <div className='container'>
            <div className='blockTitles'>
              <span>Recommend you</span>
            </div>
            <div className='blockFilm'>
              <img src={require("../static/milad-fakurian-seA-FPPXL-M-unsplash.jpg")} className='imgBlock'/>
              <div className='blackShadow'>
                <h1 className='blackShadowTitle'>Fury (2014)</h1>
                <p className='blackShadowText'>Wardaddy, along with his crew of five members, embarks on a mission that puts many lives in danger. The crew members realise that the odds are against them, but still decide to attack the Nazi army.</p>
              </div>
            </div>
            <div className='blockFilter'>
                <div className='blockFilter__items'>
                  <button>Action + </button>
                  <button>Drama + </button>
                  <button>Triller + </button>
                  <button>Fantasy + </button>
                  <button>Comedy + </button>
                  <button>Mystery + </button>
                  <button>Romance + </button>
                </div>
            </div>
            <div className='mainMovies'>
              <div className='mainMoviesTitle'>Movies: </div>
              <div className='mainMoviesList'>
                {movies.map((item) => (
                  <div className='cards'>
                    <img src={item.posterIMAGE} className='mainMoviesIMG' />
                    <span className='cards__title'>{item.title}.</span>
                    <div className='subscribe'>Подписка</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default MoviesList