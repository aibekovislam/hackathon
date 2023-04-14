import React, { useEffect, useState } from 'react'
import { ReactComponent as LogoSvg } from '../static/Filmoon.svg';
import '../static/movieList.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { signOut } from 'firebase/auth';
import { BottomNavigation, BottomNavigationAction, Button, Paper } from '@mui/material';
import { auth } from '../firebase';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { LIMIT } from '../utils/consts';
import { useFilmContext } from '../contexts/FilmContext';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MovieIcon from '@mui/icons-material/Movie';


function MovieListMobile() {
  const [isUserHave, setUserHave] = useState();
//   const { movies, getMovies } = useFilmContext();
  const [ movies, setMovies ] = useState([]);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [inputVal, setInputVal] = useState(searchParams.get("title_like") || '');
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:8000/movies").then(res => {
        setMovies(res.data);
    })
  }, [])
  return (
    <>
      <div className='parentMobile'>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            showLabels
            value=''
            
            onChange={() => {
                
            }}
            >
            <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
            <BottomNavigationAction label="Favorites" icon={<AddCircleIcon />} />
            <BottomNavigationAction label="Nearby" icon={<MovieIcon />} />
            </BottomNavigation>
      </Paper>
      <div className='cardsMobile'>
            {movies.map((item) => (
                <div className='d-f2'>
                    <img src={item.posterIMAGE} className="imageFromMobile"/>
                </div>
            ))}
      </div>
      </div>
    </>
  )
}

// {/* <input type='text' className='searchInput' placeholder='Search'/> */}
// { isUserHave ? <>
//     <button className='signIn' onClick={() => navigate("/signin")}>Sign In</button>
//     <button className='signUp' onClick={() => navigate("/signin")}>Sign Up</button>
//   </> : <Button variant='contained' style={{marginLeft: '23px'}} color='error' onClick={() => {
//     signOut(auth)
//     setUserHave(!isUserHave)
//     navigate("/signin")
//   }}>Sign Out</Button> }


export default MovieListMobile