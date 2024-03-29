import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFilmContext } from '../contexts/FilmContext';
import { auth } from '../firebase';
import { ReactComponent as LogoSvg } from '../static/Filmoon.svg';
import '../static/addpost.css'
function AddPost() {
  
  const { addReview } = useFilmContext();
  const [isUserHave, setUserHave] = useState();
  const [formValue, setFormValue] = useState({
    title: "",
    background: "",
    text: "",
    posterIMAGE: "",
    oscar: false,
    category: "",
    date: ""
  })

  function handleChange(e) {
    const obj = {
        ...formValue,
        [e.target.name]: e.target.value
    };
    setFormValue(obj)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!formValue.title.trim() || !formValue.text.trim() || !formValue.background.trim() || !formValue.posterIMAGE.trim() || !formValue.category.trim()) {
        alert("Заполните поля");
        return
    };
    addReview(formValue)
    console.log(formValue)
  };

  const navigate = useNavigate();
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
            <div className='d-fIn2'>
            <div className='mainMovies'>
              {/* <div className='blockTitles2'>
                  <span>Add your film</span>
              </div> */}
                <h1 className='title'>Add your film</h1>
                <div className='mainMoviesList'>
                    <div className='AddBlock'>
                        <div className='add__input'>
                            <form className='d-fIn' onSubmit={(e) => handleSubmit(e)}>
                                <input onChange={(e) => handleChange(e)} type='text' value={formValue.title} className='input' name='title' placeholder='Название фильма'/>
                                <input onChange={(e) => handleChange(e)} type='text' value={formValue.background} className='input' name='background' placeholder='Картинка фильма'/>
                                <input onChange={(e) => handleChange(e)} type='text' value={formValue.text} className='input' name='text' placeholder='Текста фильма'/>
                                <input onChange={(e) => handleChange(e)} type='text' value={formValue.posterIMAGE} className='input' name='posterIMAGE' placeholder='Постер'/>
                                <input onChange={(e) => handleChange(e)} type='date' value={formValue.date} className='input' name='date' placeholder='Дата'/>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    sx={{ backgroundColor: 'white' }}
                                    value={formValue.category}
                                    label="Category"
                                    name="category"
                                    onChange={(e) => {handleChange(e)}}
                                    >
                                    <MenuItem value={"action"}>Action</MenuItem>
                                    <MenuItem value={"fantasy"}>Fantasy</MenuItem>
                                    <MenuItem value={"drama"}>Drama</MenuItem>
                                    <MenuItem value={"adventure"}>Adventure</MenuItem>
                                    <MenuItem value={"animation"}>Animation</MenuItem>
                                    <MenuItem value={"thriller"}>Thriller</MenuItem>
                                    <MenuItem value={"comedy"}>Comedy</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button type='submit' variant='contained' color='info'>POST</Button>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AddPost