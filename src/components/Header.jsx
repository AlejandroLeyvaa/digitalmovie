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
                <h2>DigitalMovies</h2>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
