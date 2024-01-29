import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid text-center">
        <Link className="navbar-brand" to="/">
          NewsMonkey
        </Link>
        <button
          className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <Link className="nav-link" state={{ }} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">
                General
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
