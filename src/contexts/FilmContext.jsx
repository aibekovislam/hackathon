import axios from 'axios';
import React, { createContext, useContext, useReducer, useState } from 'react';
import { ACTIONS, API, LIMIT } from '../utils/consts';

const filmContext = createContext();


export function useFilmContext() {
    return useContext(filmContext);
}

const initState = {
    movies: [],
    oneFilm: null
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.movies:
            return {...state, movies: action.payload}
        case ACTIONS.oneFilm:
            return {...state, oneFilm: action.payload}
        default:
            return state
    }
}

function FilmContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [currentPage, setCurrentPage] = useState(1);
  async function getMovies() {
    try {
        const res = await axios.get(`${API}${window.location.search || `?_limit=${LIMIT}`}`);
        dispatch({
            type: ACTIONS.movies,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
  }

  async function getOneFilm(id) {
    try {
        const { data } = await axios.get(`${API}/${id}`);
        console.log(data)
        dispatch({
            type: ACTIONS.oneFilm,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
  }

  async function addReview(newReview) {
    try {
        await axios.post(API, newReview);
        getMovies();
    } catch (error) {   
        console.log(error)
    }
  }

  async function deleteReview(id) {
    try {
        await axios.delete(`${API}/${id}`);
        getMovies()
    } catch (error) {
        console.log(error)
    }
  }

  async function editReview(id, newReview) {
    try {
        await axios.patch(`${API}/${id}`, newReview);
        getMovies();
    } catch (error) {
        console.log(error)
    }
  }

  async function addComment(id, newFilm) {
    try {
        await axios.patch(`${API}/${id}`, newFilm);
        // data.comments.push(newComment)
        getMovies();
    } catch (error) {
        console.log(error)
    }
  }

  const value = {
    movies: state.movies,
    getMovies,
    getOneFilm,
    oneFilm: state.oneFilm,
    addReview,
    deleteReview,
    editReview,
    addComment
  }


  return <filmContext.Provider value={value} >{ children }</filmContext.Provider>
}

export default FilmContext