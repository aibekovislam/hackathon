import React, { useEffect, useState } from 'react'
import { ReactComponent as LogoSvg } from '../static/Filmoon.svg';
import '../static/movieList.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { signOut } from 'firebase/auth';
import { Button } from '@mui/material';
import { auth } from '../firebase';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { LIMIT } from '../utils/consts';
import { useFilmContext } from '../contexts/FilmContext';

function FilmsList() {
  const [isUserHave, setUserHave] = useState();
  const { movies, getMovies } = useFilmContext();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ fetching, setFetching ] = useState(true);
  const [currentPage, setCurrentPage] = useState(+searchParams.get('_page') || 1);
  const [inputVal, setInputVal] = useState(searchParams.get("title_like") || '');
  const [ category, setCategory ] = useState(searchParams.get("category") || '');
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
        document.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  const navigate = useNavigate();
  useEffect(() => {
    if(fetching) {
      axios.get(`http://localhost:8000/movies?_limit=${LIMIT}&_page=${currentPage}`).then(res => {
        const check = movies.filter((item, index, movies) => {
          return movies.indexOf(item) !== index;
        });
        if(check !== movies) {
          movies.push(...res.data)
        } else {
          return movies
        }
        setCurrentPage(prevState => prevState + 1)
        // console.log(movies)
      })
      .finally(() => {
        setFetching(false)
      })
    }
  }, [fetching])
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  const scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true)
    }
  }
  useEffect(() => {
      getMovies();
  }, [searchParams])
  const [firstMount, setFirstMount] = useState(true)
  console.log(category)
  useEffect(() => {
    if(firstMount) {
      setFirstMount(false);
      return;
    }
		if (category === "all") {
			setSearchParams({
				title_like: inputVal,
				_limit: LIMIT,
				_page: 1,
			});
		} else {
			setSearchParams({
				title_like: inputVal,
				category: category,
				_limit: LIMIT,
				_page: 1,
			});
		}
		setCurrentPage(1);
    setFetching(true)
	}, [inputVal, category]);
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
                        <li onClick={() => {navigate("/main")}}>Home</li>
                        <li onClick={() => {navigate("/films")}}>Movies</li>
                        <li onClick={() => {navigate("/payment")}}>Subscribe</li>
                        <li>Contact</li>
                      </ul>
                    </div>
                  </div>
                  <div className='navbar__itemMainScreen'>
                    {/* <input type='text' className='searchInput' placeholder='Search'/> */}
                    { isUserHave ? <>
                      <button className='signIn' onClick={() => navigate("/signin")}>Sign In</button>
                      <button className='signUp' onClick={() => navigate("/signin")}>Sign Up</button>
                    </> : <Button variant='contained' style={{marginLeft: '23px'}} color='error' onClick={() => {
                      signOut(auth)
                      setUserHave(!isUserHave)
                      navigate("/signin")
                    }}>Sign Out</Button> }
                    <div className='account'></div>
                  </div>
                </div>
              </div>
          </div>
          <div className='container'>
            <div className='blockTitles2'>
                <span>Films list</span>
                <input type='text' onChange={(e) => {
                    setInputVal(e.target.value);
                    setSearchParams({
                      title_like: e.target.value
                    })
                }} value={inputVal} className='searchInput' placeholder='Search'/>
                <select onChange={(e) => {
                  setSearchParams({
                    category: e.target.value
                  })
                  setCategory(e.target.value)
                }}>
                    <option value={"all"}>Filters</option>
                    <option value={"action"}>Action</option>
                    <option value={"comedy"}>Comedy</option>
                    <option value={"drama"}>Drama</option>
                    <option value={"adventure"}>Adventure</option>
                    <option value={"fantasy"}>Fantasy</option>
                </select>
            </div>
            <div className='mainMovies'>
                <div className='mainMoviesList2'>
                    {movies.map((item) => (
                    <div className='cards' key={item.id}>
                        <img src={item.posterIMAGE} onClick={() => {navigate(`/detail/${item.id}`)}} className='mainMoviesIMG' />
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


export default FilmsList