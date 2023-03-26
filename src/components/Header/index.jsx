import React from 'react';
import logo from '../../assets/images/ufscat_logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="UFSCat" />
        <div className="menu-section">
          <button className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </button>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">Sobre nós</Link>
              </li>
              <li>
                <Link to="/adote">Adote</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
