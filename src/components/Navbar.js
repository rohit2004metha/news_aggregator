import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar fixed-top custom-navbar">
      <div className="container-fluid text-center">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: '#1F2544' }}
          onClick={closeNav}
        >
          News Aggregator
        </Link>
        <button
          className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                state={{}}
                aria-current="page"
                to="/"
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/sports"
                onClick={closeNav}
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/entertainment"
                onClick={closeNav}
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/health"
                onClick={closeNav}
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/business"
                onClick={closeNav}
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/science"
                onClick={closeNav}
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/technology"
                onClick={closeNav}
              >
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/general"
                onClick={closeNav}
              >
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
