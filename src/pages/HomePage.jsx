import React from 'react';
import '../static/style.css';
import { ReactComponent as ArrowSvg } from '../static/Vector (3).svg'

function HomePage() {
  return (
    <div>
        <div className='homePageBlock'>
          <div className='homePageBlockItems'>
            <div className='homePageBlockTitle'>
              <h1>Unlimited Movies,TV<br/> Shows, And More.</h1>
            </div>
            <div className='homePageBlockText'>
              <p>Watch anywhere. Cancel Anytime</p>
            </div>
            <div className='homePageBlockText2'>
              <p>Ready to watch? Enter your email to  create or restart your membership</p>
            </div>
            <div className='homePageBlockInput'>
              <input type='text' placeholder='Email adress' />
              <button>Get Started <ArrowSvg/></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage