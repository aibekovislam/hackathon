import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFilmContext } from '../contexts/FilmContext';
import '../static/MoviesPagesFooter.css';
import { ReactComponent as LogoSvg } from '../static/Filmoon.svg';
import { ReactComponent as HeartSvg } from '../static/Component 5.svg';
import { ReactComponent as PlusSvg } from '../static/Frame 289 (1).svg';
import { useAuthContext } from '../contexts/AuthContext';
import Slider from 'react-slick';


function DetailFilm() {
  const { id } = useParams();
  const { getOneFilm, oneFilm, deleteReview, editReview, addComment } = useFilmContext();
  const [ oneFilmValue, setOneFilmValue ] = useState();
  const { user } = useAuthContext();
  const [ inpuVal, setInputVal ] = useState("");

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 2

}


  useEffect(() => {
    getOneFilm(id);
  }, []);


  useEffect(() => {
    if(oneFilm) {
        setOneFilmValue(oneFilm);
    };
  }, [oneFilm]);

  // console.log(oneFilm)

  const navigate = useNavigate();

  function handleChange(e) {
    const str = `${e.target.value}`;
    setInputVal(str);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(!inpuVal.trim()) {
      alert("Заполните поля");
      return
    }
    oneFilm.comments.push(
      {
        user: user?.displayName,
        userComments: [
          inpuVal
        ]
      }
    )
    // oneFilm.comments?.push(inpuVal);
    addComment(id, oneFilm);
  }


  return (
    <div className="bcimage">
        { oneFilm ? (
            <>
                {/* <div>{oneFilm.title}</div>
                <img src={oneFilm.posterIMAGE} />
                <Button variant='contained' color='error' onClick={() => {
                    deleteReview(id)
                    navigate("/main")
                    }}>
                    delete
                </Button>
                <Button variant='contained' color='warning' onClick={() => {
                    navigate(`/edit/${oneFilm.id}`)
                    }}>
                    edit
                </Button> */}
                <div style={{ backgroundImage: `url(${oneFilm.background})` }} className='imageInBack'>
                  <div className='container'>
                  <nav className="navbarDetails">
                    <div className='navbarDetailsLogo'>
                      <LogoSvg className='logo'/>  
                    </div>
                    <div className='navbarDetailsItems'>
                      <ul className='navigationDetails'>
                        <li onClick={() => {navigate("/main")}}>Home</li>
                        <li onClick={() => {navigate("/films")}}>All films</li>
                        <li onClick={() => {navigate("/add")}}>Add films</li>
                        <li>About us</li>
                      </ul>
                    </div>
                  </nav>
                 <div className='df'>
                    <div className='detailsContent'>
                      <div className='detailsContentItems'>
                        <div className='detailsContentTitleAndText'>
                          <h1>{oneFilm.title}</h1>
                          <div className='date'>{oneFilm.date} : {oneFilm.category}</div>
                          <div className='buttons'>
                            <button className='buy'>BUY<PlusSvg style={{ marginLeft: '3px' }}/></button>
                            <div className='add'>ADD <HeartSvg/></div>
                          </div>
                          <p>{oneFilm.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className='nearlyBlock'>
                        <div className='nearlyBlockCommets'>
                          <div className='comments'>
                            <div className='commentsBlock'>
                              <Slider {...settings}>
                                {oneFilm.comments.map((item) => (
                                  <>
                                    <div className='commentsTitle'><div className='circle'></div>{item.user}</div>
                                    <div className='commentsText'>{item.userComments.map((item) => (<p>{item}</p>))}</div>
                                  </>
                                ))}
                              </Slider>
                            </div>
                            {/* <div>
                              <div className='commentsTitle'><div className='circle'></div>Google selects this movie</div>
                              <div className='commentsText'>if you want to watch a good movie this evening we recommend Kung-fu panda 3</div>
                            </div> */}
                            <form onSubmit={(e) => {handleSubmit(e)}}>
                              <input className='inputForComment' type='text' onChange={(e) => {handleChange(e)}} name="comment" placeholder='Написать комментарий'/>
                              <button className='commentButton' type='submit'>Submit</button>
                            </form>
                          </div>
                        </div>
                        <div className='photosBorderLine'>
                          <div className='photos'>
                            <h1>Movie scenes</h1>
                            <img src={oneFilm.movieScenes} className='miniPhotos'/>
                          </div>
                        </div>
                    </div>
                 </div>
                </div>
              </div>
            </>
        ) : (
            <h1>Loading...</h1>
        ) }
    </div>
  )
}

export default DetailFilm