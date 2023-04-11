import React from "react";
import "../static/baielPayment.css"
import { ReactComponent as LogoSvg } from '../static/Vectors4NavbarDark/FilmoonDark.svg';
import { ReactComponent as DropDownSvg } from '../static/Vectors4NavbarDark/VectorDark 1.svg';
import { ReactComponent as GlobusSvg } from '../static/Vectors4NavbarDark/VectorDark (2).svg';

function NavbarDark() {
  return (
    <>
      <div className="pc">
        <div className="bla">
          <div className="container nav">
            <div className="navbar__it">
              <div className="navbar__i">
                <div>
                  <LogoSvg />
                </div>
              </div>
              <ul className="navbar__i">
                <li className="i">
                  <div className="language">
                    <button>
                      <DropDownSvg />
                      English
                      <GlobusSvg />
                    </button>
                  </div>
                </li>
                <li className="i">
                  <button className="sign">Sign In</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="navbarMobile">
          <div className="navbarMobile__items">
            <div className="navbarMobile__item">
              <LogoSvg />
            </div>
            <div className="navbarMobile__item">
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarDark;
