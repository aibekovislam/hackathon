import React, { useEffect, useState } from 'react'
import { useFilmContext } from '../contexts/FilmContext'
import { ReactComponent as LogoSvg } from '../static/Filmoon.svg';
import { ReactComponent as StarSVG } from '../static/star-svgrepo-com.svg'
import '../static/movieList.css';
import Marquee from 'react-fast-marquee';
import MySlider from './MySlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuthContext } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { Button } from '@mui/material';
import { auth } from '../firebase';

function MoviesList() {
  const { movies, getMovies } = useFilmContext();
  const { user } = useAuthContext();
  const [isUserHave, setUserHave] = useState();
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
                    { isUserHave ? <>
                      <button className='signIn'>Sign In</button>
                      <button className='signUp'>Sign Up</button>
                    </> : <Button variant='contained' color='error' onClick={() => {
                      signOut(auth)
                      setUserHave(!isUserHave)
                    }}>Sign Out</Button> }
                    <div className='account'></div>
                  </div>
                </div>
              </div>
          </div>
          <div className='container'>
            <div className='blockTitles'>
              <span>Welcome 'guest'</span>
            </div>
            <div className='blockFilm'>
              <img src={require("../static/milad-fakurian-seA-FPPXL-M-unsplash.jpg")} className='imgBlock'/>
              <div className='blackShadow'>
                <h1 className='blackShadowTitle'>Filmoon</h1>
                <p className='blackShadowText'>Welcome to Filmoon, your ultimate destination for all things film-related! Whether you're a cinephile or just enjoy a good movie now and then, you'll find plenty to explore on our site. From classic Hollywood films to the latest releases, we've got you covered. We offer in-depth reviews, news and updates, trailers, interviews with filmmakers, and more. Our team of passionate film enthusiasts brings you expert analysis, thoughtful commentary, and a deep appreciation for the art of cinema. So grab some popcorn, settle in, and join us on a journey through the magical world of movies.</p>
              </div>
            </div>
            <div className='blockFilter'>
                <div className='blockFilter__items'>
                  <button>Экшен </button>
                  <button>Приключения </button>
                  <button>Драма </button>
                  <button>Триллер </button>
                  <button>Фэнтези </button>
                  <button>Комедия </button>
                  <button>Детектив </button>
                  <button>Роман </button>
                </div>
            </div>
            <div className='mainMovies'>
              <div className='mainMoviesTitle'>Reccomend you: </div>
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
            <div>
                <div className='marqueeTitle'>Premier films</div>
                <div>
                  <Marquee pauseOnHover={true} className='marqueeBlock'>
                    {movies.map((item) => (
                      <div className='stabilzBlock'>
                        <img src={item.posterIMAGE} className='stabilz' />
                      </div>
                    ))}
                  </Marquee>
                </div>
            </div>
            <div className='blockTopDayFilm'>
              {/* <img src={require("../static/994c82913bb3e6e493fac772f42ceb96--mia-wallace-quentin-tarantino.jpg")} className='topFilmToday'/> */}
              <video className='topFilmToday' autoPlay muted loop preload={require("../static/video/Pulp_Fiction___Official_Trailer_HD_John_Travolta,_Uma_Thurman,_Samuel.mp4")}>
                      <source src={require("../static/video/Pulp_Fiction___Official_Trailer_HD_John_Travolta,_Uma_Thurman,_Samuel.mp4")}></source>
                      Video not found
              </video>
              <div className='blackShadow2'>
                <h1 className='blackShadow2Title'>КРИМИНАЛЬНОЕ ЧТИВО</h1>
                <p className='blackShadow2Text'><StarSVG className='star'/>  8,6 | 1994 | 2 ч 34 мин</p>
                <p className='blackShadow2PodText'>США | Триллер, комедия | 18+</p>
                <button className='blackShadow2Button'>Full HD</button>
                <div className='blackShadow2ButtonGroup'>
                      <button className='SubscribeButton'>Смотреть по подписке</button>
                      <button className='TrailerButton'>Трейлер</button>
                </div>
                <p className='blackShadow2Description'>
                  Несколько связанных историй из жизни бандитов, <br/> Шедевр Квентина Тарантино, который изменил <br/> мировое кино.
                </p>
              </div>
            </div>
            <div className='blockOscarsFilm'>
                Oscar films
                <MySlider/>
            </div>
            <div className='blockFAQ'>
                <div className='blurBlock'></div>
            </div>
          </div>
        </div>
    </>
  )
}


export default MoviesList