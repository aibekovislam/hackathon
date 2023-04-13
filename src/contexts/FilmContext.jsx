import axios from 'axios';
import React, { createContext, useContext, useReducer, useState } from 'react';
import { ACTIONS, API, LIMIT } from '../utils/consts';

const filmContext = createContext();


export function useFilmContext() {
    return useContext(filmContext);
}

const initState = {
    movies: []
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.movies:
            return {...state, movies: action.payload}
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

  const value = {
    movies: state.movies,
    getMovies
  }


  return <filmContext.Provider value={value} >{ children }</filmContext.Provider>
}

export default FilmContext