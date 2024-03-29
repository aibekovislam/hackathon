import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { useFilmContext } from '../contexts/FilmContext';
import '../static/movieList.css';


function MySlider() {
  const { movies, getMovies } = useFilmContext();

  useEffect(() => {
    getMovies();
  }, [])

  let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 4,
      slidesToShow: 4

  };
  const navigate = useNavigate();
  return (
    <Slider {...settings}>
        {movies.map((item) => (
            <div className='oscarFilms' key={item.id}>
                <img src={item.posterIMAGE} onClick={() => {navigate(`/detail/${item.id}`)}} className='imgFluid'/>
                {/* <div className='blackShadow3'>
                    <div className='blackShadow3Title'>{item.title}</div>
                    <div></div>
                </div> */}
            </div>
        ))}
    </Slider>
  )
}

export default MySlider