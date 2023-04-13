import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFilmContext } from '../contexts/FilmContext';

function DetailFilm() {
  const { id } = useParams();
  const { getOneFilm, oneFilm, deleteReview, editReview } = useFilmContext();
  const [ oneFilmValue, setOneFilmValue ] = useState();

  useEffect(() => {
    getOneFilm(id);
  }, []);


  useEffect(() => {
    if(oneFilm) {
        setOneFilmValue(oneFilm);
    };
  }, [oneFilm]);

  const navigate = useNavigate();

  return (
    <div>
        { oneFilm ? (
            <>
                <div>{oneFilm.title}</div>
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
                </Button>
            </>
        ) : (
            <h1>Loading...</h1>
        ) }
    </div>
  )
}

export default DetailFilm