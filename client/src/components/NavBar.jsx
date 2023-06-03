import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState("closed");

  const toggleMenu = () => {
    setOpen(open === "closed" ? "active" : "closed");
  };

  return (
    <div className="navBar">
      <nav className="nav container">
        <div className="nav__logo">
          <a href="#" className="nav__link logo">
            <img src="images/logo-clean-hands-100.png" alt="" />
            <h1>Senior Center</h1>
          </a>
        </div>
        <ul onClick={toggleMenu} className={`nav__menu ${open}`}>
          <li className="nav__item">
            <Link to={`services`} className="nav__link">
              Services
            </Link>
          </li>
          <li className="nav__item">
            <Link to={`activities`} className="nav__link">
              Classes & Activities
            </Link>
          </li>
          <li className="nav__item">
            <Link to={`contact`} className="nav__link">
              Contact
            </Link>
          </li>
        </ul>

        <div onClick={toggleMenu} className={`hamburger ${open}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
