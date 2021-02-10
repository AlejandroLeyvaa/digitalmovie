import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="Header">
      <div className="Header-items">
        <div className="Header-logo">
          <div id="title">
            <nav>
              <Link to="/">
                <span className="Title">Digital</span>
                <span className="Title">Movie</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
