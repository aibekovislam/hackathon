import React from 'react'
import '../static/style.css'
import { ReactComponent as LogoSvg } from '../static/Filmoon.svg';
import { ReactComponent as DropDownSvg } from '../static/Vector 1.svg';
import { ReactComponent as GlobusSvg } from '../static/Vector (2).svg';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <>
        <div className='pc'>
            <div className='black'>
                <div className='container navbar'>
                    <div className='navbar__items'>
                        <div className='navbar__item'>
                            <div>
                                <LogoSvg/>
                            </div>
                        </div>
                        <ul className='navbar__item'>
                            <li className='item'>
                                <div className='language_btn' id="baiel_btn">
                                    <button>
                                        <DropDownSvg/>
                                            English
                                        <GlobusSvg/>
                                    </button>
                                </div>
                            </li>
                            <li className='item'>
                                { !user ? <button className='sign_in_btn' onClick={() => navigate("/signin")}>Sign In</button> : null}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='mobile'>
            <div className='navbarMobile'>
                <div className='navbarMobile__items'>
                    <div className='navbarMobile__item'>
                        <LogoSvg/>
                    </div>
                    <div className='navbarMobile__item'>
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar