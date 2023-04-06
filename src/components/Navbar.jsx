import React from 'react'
import '../static/style.css'
import { ReactComponent as LogoSvg } from '../static/Filmoon.svg';
import { ReactComponent as DropDownSvg } from '../static/Vector 1.svg';
import { ReactComponent as GlobusSvg } from '../static/Vector (2).svg';

function Navbar() {
  return (
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
                        <div className='language_btn'>
                            <button>
                                <DropDownSvg/>
                                    English
                                <GlobusSvg/>
                            </button>
                        </div>
                    </li>
                    <li className='item'>
                        <button className='sign_in_btn'>Sign In</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar