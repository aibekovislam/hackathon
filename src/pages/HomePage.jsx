import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { auth } from '../firebase';
import '../static/style.css';
import { ReactComponent as ArrowSvg } from '../static/Vector (3).svg'

export let mainEmail;

function HomePage() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  // const navigate = useNavigate();
  
  const [emailFromMain, setEmailFromMain] = useState();
  return (
    <>
      <div className='pc'>
        <div className='homePageBlock'>
          <div className='homePageBlockItems'>
            <div className='homePageBlockTitle'>
              <h1>Unlimited Movies,TV<br/> Shows, And More.</h1>
            </div>
            <div className='homePageBlockText'>
              <p>Watch anywhere. Cancel Anytime</p>
            </div>
            { !user ? <div className='homePageBlockText2'>
              <p>Ready to watch? Enter your email to  create or restart your membership</p>
            </div> : null }
            { !user ? <div className='homePageBlockInput'>
              <input type='text' placeholder='Email adress' value={emailFromMain} onChange={(e) => {
                setEmailFromMain(e.target.value)
                mainEmail = e.target.value;
                }} />
              <button onClick={() => navigate("/signin")}>Get Started <ArrowSvg/></button>
            </div> : 
              <Button variant='contained' style={{marginTop: '33px'}} onClick={() => navigate("/main")}>Continue</Button>
             }
             <button onClick={() => signOut(auth)}>log out</button>
          </div>
        </div>
      </div>
      <div className='mobile'>
        <div className='mobileHomePageBlock'>
          <div className='mobileHomePageBlock__title'>
              <h1>Unlimited Movies,TV<br/> Shows, And More.</h1>
          </div>
          <div className='mobileHomePageBlock__inputs'>
            <p className='watchP'>Watch anywhere. Cancel Anytime</p>
            <p className='readyP'>Enter your email to  create or restart your membership</p>
            <div className='inputs'>
              <input type='text' placeholder='Email adress' value={emailFromMain} onChange={(e) => {setEmailFromMain(e.target.value)}}/>
              <button>Get Started <ArrowSvg/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default HomePage